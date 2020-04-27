<template>
	<div>

		<MainSlider />

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
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/burger-2.jpg);"
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
                              style="background-image: url(images/pasta-2.jpg);"
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
                        <div class="col-md-4 text-center">
                          <div class="menu-wrap">
                            <a
                              href="#"
                              class="menu-img img mb-4"
                              style="background-image: url(images/pasta-3.jpg);"
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
              <h3>YOU ORDER</h3>
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
        <a href="#" class="p-3 px-xl-4 py-xl-3 btn-white btn btn-outline-white">Order Now</a>
      </div>
    </div>
  </div>

</section>
	</div>
</template>
<script>

import MainSlider from '@/components/MainSlider'
import ProductItem from '@/partials/ProductItem'

export default {
	data(){
		return {
			products: [
				{id: 1, category: "pizza", title: "Pizza 1", img: "images/pizza-1.jpg", desc: "Esta es una pizza 1", price: 10},
				{id: 2, category: "pizza", title: "Pizza 2", img: "images/pizza-2.jpg", desc: "Esta es una pizza 2", price: 9},
				{id: 3, category: "pizza", title: "Pizza 3", img: "images/pizza-3.jpg", desc: "Esta es una pizza 3", price: 7},
				{id: 4, category: "pizza", title: "Pizza 4", img: "images/pizza-4.jpg", desc: "Esta es una pizza 4", price: 11},
				{id: 5, category: "pizza", title: "Pizza 5", img: "images/pizza-5.jpg", desc: "Esta es una pizza 5", price: 15},
				{id: 6, category: "pizza", title: "Pizza 6", img: "images/pizza-6.jpg", desc: "Esta es una pizza 6", price: 6},
				{id: 7, category: "pizza", title: "Pizza 7", img: "images/pizza-7.jpg", desc: "Esta es una pizza 7", price: 9},
				{id: 8, category: "pizza", title: "Pizza 8", img: "images/pizza-8.jpg", desc: "Esta es una pizza 8", price: 10},
				{id: 9, category: "pasta", title: "Pasta 1 ", img: "images/pasta-1.jpg", desc: "Esta es pasta 1", price: 9},
				{id: 10, category: "pasta", title: "Pasta 2 ", img: "images/pasta-2.jpg", desc: "Esta es pasta 2", price: 9},
				{id: 11, category: "pasta", title: "Pasta 3 ", img: "images/pasta-3.jpg", desc: "Esta es pasta 3", price: 9},
				{id: 12, category: "drink", title: "Bebida 1 ", img: "images/drink-1.jpg", desc: "Esta es pasta 1", price: 4},
				{id: 13, category: "drink", title: "Bebida 2 ", img: "images/drink-2.jpg", desc: "Esta es pasta 2", price: 3},
				{id: 14, category: "drink", title: "Bebida 3 ", img: "images/drink-3.jpg", desc: "Esta es pasta 3", price: 2}
			]
		}
	},
	computed:{
		productsFiltered(){
			let category = "pasta"
			return this.products.filter( (item) => item.category === category )
		}
	},
	components: {
		MainSlider, 
		ProductItem
	}
}
</script>