<template>
	<div>

		<MainSlider />
    <ProductItem />
    

    

		<section class="ftco-menu">
        <div class="container-fluid">
          <div class="row d-md-flex">
            <div class="col-lg-12  p-md-5">
              <div class="row">
                <div class="col-md-12 nav-link-wrap mb-5 d-flex">
                  <div
                    class="nav  nav-pills mx-auto"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      class="nav-link active"
                      id="v-pills-1-tab"
                      data-toggle="pill"
                      href="#v-pills-1"
                      role="tab"
                      aria-controls="v-pills-1"
                      aria-selected="true"
                      >Pizza</a
                    >
    
                    <a
                      class="nav-link"
                      id="v-pills-2-tab"
                      data-toggle="pill"
                      href="#v-pills-2"
                      role="tab"
                      aria-controls="v-pills-2"
                      aria-selected="false"
                      >Drinks</a
                    >
    
                    <a
                      class="nav-link"
                      id="v-pills-3-tab"
                      data-toggle="pill"
                      href="#v-pills-3"
                      role="tab"
                      aria-controls="v-pills-3"
                      aria-selected="false"
                      >Burgers</a
                    >
    
                    <a
                      class="nav-link"
                      id="v-pills-4-tab"
                      data-toggle="pill"
                      href="#v-pills-4"
                      role="tab"
                      aria-controls="v-pills-4"
                      aria-selected="false"
                      >Pasta</a
                    >
                  </div>
                </div>
                <div class="col-md-12 d-flex align-items-center">
                  <div class="tab-content " id="v-pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="v-pills-1"
                      role="tabpanel"
                      aria-labelledby="v-pills-1-tab"
                    >
                      <div class="row">

						<ProductItem v-for="item in productsFiltered" :key="item.id"
						:title="item.title" />
                      
               
                      </div>
                    </div>
    
                    <div
                      class="tab-pane fade"
                      id="v-pills-2"
                      role="tabpanel"
                      aria-labelledby="v-pills-2-tab"
                    >
                      <div class="row">
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/drink-1.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Lemonade Juice</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/drink-2.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Pineapple Juice</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/drink-3.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Soda Drinks</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div
                      class="tab-pane fade"
                      id="v-pills-3"
                      role="tabpanel"
                      aria-labelledby="v-pills-3-tab"
                    >
                      <div class="row">
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/burger-1.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Burger de carne mechada</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/burger-2.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Cheese Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/burger-3.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Itallian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$2.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    <div
                      class="tab-pane fade"
                      id="v-pills-4"
                      role="tabpanel"
                      aria-labelledby="v-pills-4-tab"
                    >
                      <div class="row">
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/pasta-1.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Itallian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$7.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/pasta-2.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Russian Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$7.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                              <button @click="addProduct" v-if="isNew" class="waves-effect waves-light btn">añadir producto</button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/pasta-3.jpg);"
                            ></a>
                            <div class="text">
                              <h3><a href="#">Hawaiana Pizza</a></h3>
                              <p>
                                Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia.
                              </p>
                              <p class="price"><span>$7.90</span></p>
                              <p>
                                <a href="#" class="btn btn-white btn-outline-white"
                                  >Add to cart</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</section>

<section class="ftco-intro">
  <div class="container-wrap">
    <div class="wrap d-md-flex">
      <div class="info">
        <div class="row no-gutters">
          <div class="col-md-4 d-flex">
            <div class="text">
              <h3>OUR PRODUCTS</h3>
              <p>Add your delicious order and press "Order" button </p>
            </div>
          </div>
          <div class="col-md-8 d-flex">
            <div class="text">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pizza Hawai</td>
                    <td>1</td>
                    <td>10,5 €</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="social d-md-flex pl-md-5 p-4 align-items-center">
        <div class="text">
          <h2>TOTAL</h2>
          <h4>10,5 €</h4>
        </div>
        <a href="./pages/OrderPage" class="p-3 px-xl-4 py-xl-3 btn-white btn btn-outline-white">Order Now</a>
      </div>
    </div>
  </div>

</section>
	</div>
</template>
<script src="https://unpkg.com/vue"></script>
<script>
import MainSlider from '@/components/MainSlider'
import ProductItem from '@/partials/ProductItem'

export default {
	data(){
		return {
			products: [
				{id: 1, category: "pizza", title: "Pizza simple", img: "images/pizza-5.jpg", desc: "Esta es una pizza simple", price: 10},
				{id: 2, category: "pizza", title: "Pizza de Mantecados ", img: "images/pizza-2.jpg", desc: "Esta es una pizza de Jamón York", price: 9},
        {id: 3, category: "drink", title: "lemonade drink", img:"images/drink-1.jpg", desc: "Esta es una jugosa y fresquita Limonada", price: 2.90},
        {id: 3, category: "drink", title: "PineaPle Juice", img:"images/drink-2.jpg", desc: "Esta es una jugoso zumo de piña", price: 2.90},
        {id: 3, category: "drink", title: "Soda drink", img:"images/drink-3.jpg", desc: "Esta es una jugosa y fresquita Soda", price: 2.90},
        {id: 3, category: "burger", title: "burger de carne mecha", img:"images/burger-1.jpg", desc: "Esta es una deliciosa Burger", price: 2.90},
        {id: 3, category: "burger", title: "burger cheese", img:"images/burger-2.jpg", desc: "Esta es una deliciosa Burger", price: 2.90},
        {id: 3, category: "burger", title: "burger de pavo", img:"images/burger-3.jpg", desc: "Esta es una deliciosa Burger", price: 2.90},
        {id: 3, category: "pizza", title: "pizza russian", img:"images/pasta-1.jpg", desc: "Esta es una jugosa y fresquita Limonada", price: 2.90},
        {id: 3, category: "pizza", title: "pizza hawaiana", img:"images/pasta-3.jpg", desc: "Esta es una jugosa y fresquita Limonada", price: 2.90}
      
      ]
		}
	},
	computed:{
		productsFiltered(){
			let category = "pizza"
			return this.products.filter( (item) => item.category === category )
    },
  
	},
	components: {
		MainSlider, 
    ProductItem,
    
	}
}
</script>