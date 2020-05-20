export const state = () => ({
  products: [],
  categories: [],
  listOrder: [],
  isAuth: false,
  userLogged: {
    id: null,
    firstname: null,
    lastname: null,
    profile: "",
  },
})

export const actions = {
  async loadProducts(context) {
    console.info("load products")
    try {
      let response = await this.$fireStore.collection('products').get()

      context.commit("addProducts", response);
    } catch (e) {
      console.error(e)
    }
  },
  async loadCategories(context){
    console.info("load products")
    try {
      let response = await this.$fireStore.collection('categories').get()

      context.commit("addCategories", response);
    } catch (e) {
      console.error(e)
    }
  }
}

export const mutations = {
  addProducts(state, payload) {
    state.products = []

    payload.forEach(function (productItem) {
      productItem = { ...{ id: productItem.id }, ...productItem.data() }
      state.products.push(productItem);
    })
  },
  addCategories(state, payload) {
    state.categories = []

    payload.forEach(function (productItem) {
      productItem = { ...{ id: productItem.id }, ...productItem.data() }
      state.categories.push(productItem);
    })
  },
  addToCart(state, item) {
    let found = state.listOrder.filter((order) => order.id === item.id);

    if (found.length != 0) {
      found[0].quantity++;
    } else {
      let order = {
        id: item.id,
        title: item.title,
        unitPrice: item.price,
        quantity: 1,
      };
      state.listOrder.push(order);
    }
  },
  emptyCart(state) {
    state.listOrder = [];
  },
  decreaseQuantity(state, item) {
    item.quantity--;
    if (item.quantity <= 0) {
      this.commit("removeItem", item);
    }
  },
  increaseQuantity(state, item) {
    item.quantity++;
  },
  removeItem(state, item) {
    let index = state.listOrder.findIndex((item) => item.id === item.id);
    state.listOrder.splice(index, 1);
  },
  setCurrentUser(state, userInfo) {
    state.isAuth = (userInfo !== null);

    if (userInfo) {
      state.userLogged = userInfo
    }

    if (!userInfo) {
      state.userLogged = null
    }

    console.info(state.userLogged)
  }
}

export const getters = {
  listOrderCount(state) {
    if (state.listOrder.length === 0) {
      return 0;
    }
    return state.listOrder
      .map((item) => item.quantity)
      .reduce((acum, current) => acum + current);
  }
}
