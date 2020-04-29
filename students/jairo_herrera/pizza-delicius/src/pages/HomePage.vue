<template>

	<div>
		<MainSlider />
		<MainSeparator />
		<FeaturePizza :products="products" :count="3" category="pasta" :title="title" :desc="desc" />
		<OurServices />
		<FeatureBlog />
	</div>

</template>

<script>
import MainSlider from "@/components/MainSlider";
import MainSeparator from "@/components/MainSeparator";
import FeaturePizza from "@/components/FeaturePizza";
import OurServices from "@/components/OurServices";
import FeatureBlog from "@/components/FeatureBlog";
export default {
  data() {
    return {
      title: "Mi titulo",
      desc: "Mi descripción",
      products: [
        {
          id: 1,
          category: "pizza",
          title: "Pizza 1",
          img: "images/pizza-1.jpg",
          desc: "Esta es una pizza 1",
          price: 10
        },
        {
          id: 2,
          category: "pizza",
          title: "Pizza 2",
          img: "images/pizza-2.jpg",
          desc: "Esta es una pizza 2",
          price: 9
        },
        {
          id: 3,
          category: "pizza",
          title: "Pizza 3",
          img: "images/pizza-3.jpg",
          desc: "Esta es una pizza 3",
          price: 7
        },
        {
          id: 4,
          category: "pizza",
          title: "Pizza 4",
          img: "images/pizza-4.jpg",
          desc: "Esta es una pizza 4",
          price: 11
        },
        {
          id: 5,
          category: "pizza",
          title: "Pizza 5",
          img: "images/pizza-5.jpg",
          desc: "Esta es una pizza 5",
          price: 15
        },
        {
          id: 6,
          category: "pizza",
          title: "Pizza 6",
          img: "images/pizza-6.jpg",
          desc: "Esta es una pizza 6",
          price: 6
        },
        {
          id: 7,
          category: "pizza",
          title: "Pizza 7",
          img: "images/pizza-7.jpg",
          desc: "Esta es una pizza 7",
          price: 9
        },
        {
          id: 8,
          category: "pizza",
          title: "Pizza 8",
          img: "images/pizza-8.jpg",
          desc: "Esta es una pizza 8",
          price: 10
        },
        {
          id: 9,
          category: "pasta",
          title: "Pasta 1 ",
          img: "images/pasta-1.jpg",
          desc: "Esta es pasta 1",
          price: 9
        },
        {
          id: 10,
          category: "pasta",
          title: "Pasta 2 ",
          img: "images/pasta-2.jpg",
          desc: "Esta es pasta 2",
          price: 9
        },
        {
          id: 11,
          category: "pasta",
          title: "Pasta 3 ",
          img: "images/pasta-3.jpg",
          desc: "Esta es pasta 3",
          price: 9
        },
        {
          id: 12,
          category: "drink",
          title: "Bebida 1 ",
          img: "images/drink-1.jpg",
          desc: "Esta es pasta 1",
          price: 4
        },
        {
          id: 13,
          category: "drink",
          title: "Bebida 2 ",
          img: "images/drink-2.jpg",
          desc: "Esta es pasta 2",
          price: 3
        },
        {
          id: 14,
          category: "drink",
          title: "Bebida 3 ",
          img: "images/drink-3.jpg",
          desc: "Esta es pasta 3",
          price: 2
        }
      ]
    };
  },
  components: {
    MainSlider,
    MainSeparator,
    FeaturePizza,
    OurServices,
    FeatureBlog
  }
};
</script>