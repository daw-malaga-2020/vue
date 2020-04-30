<template>
    <div>
        <div class="row no-gutters d-flex" v-for="(pizza, i) in pizzas" :key="i">
        <div class="col-lg-4 d-flex d-block">
            <div class="services-wrap d-flex" >
                <a href="#" class="img" :style="pizza.image"></a>
                <div class="text p-4" >
                    <h3>{{ pizza.title }}</h3>
                    <p>
                        {{ pizza.description }}
                    </p>
                    <p class="price">
                        <span>${{pizza.price.toFixed(2)}}</span>
                        <a href="#" class="ml-2 btn btn-white btn-outline-white">Order</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pizzas: [
                {image: 'background-image: url(images/pizza-1.jpg);', title: 'Italian Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90},
                {image: 'background-image: url(images/pizza-2.jpg);', title: 'Greek Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90},
                {image: 'background-image: url(images/pizza-3.jpg);', title: 'Caucasian Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90},
                {image: 'background-image: url(images/pizza-4.jpg);', title: 'American Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90},
                {image: 'background-image: url(images/pizza-5.jpg);', title: 'Tomatoe Pie', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90},
                {image: 'background-image: url(images/pizza-6.jpg);', title: 'Margherita', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90}
            ]
        }
    }
}
</script>