<template>
  <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section  text-center">
            <h2 class="mb-4">Read our blog</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
        <div class="row d-flex">
          <ArticleRecentBlog v-for="item in recentsBlogs" :resumeBlog="item.resumeBlog" :titleBlog="item.titleBlog" :numberOfComments="item.numberOfComments" :author="item.author" :date="item.date" :img="item.img" :key="item.id"></ArticleRecentBlog> 
          
        </div>
      </div>
    </section>
</template>
<script>

import ArticleRecentBlog from '../partials/ArticleRecentBlog'

export default {
  name:"MainBlog",
  data(){
    return {
    	recentsBlogs: [
				{
					resumeBlog:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", titleBlog:"The Delicious Pizza",
					numberOfComments:3,
					author: "Admin",
					date:"Sept 10, 2018",
					img: "images/image_1.jpg"
				},
				{
					resumeBlog:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", titleBlog:"The Delicious Pizza",
					numberOfComments:3,
					author: "Admin",
					date:"Sept 10, 2018",
					img: "images/image_1.jpg"
				},
				{
					resumeBlog:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", titleBlog:"The Delicious Pizza",
					numberOfComments:3,
					author: "Admin",
					date:"Sept 10, 2018",
					img: "images/image_1.jpg"
        },
        {
					resumeBlog:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", titleBlog:"The Delicious Pizza",
					numberOfComments:3,
					author: "Admin",
					date:"Sept 10, 2018",
					img: "images/image_1.jpg"
				},
				{
					resumeBlog:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", titleBlog:"The Delicious Pizza",
					numberOfComments:3,
					author: "Admin",
					date:"Sept 10, 2018",
					img: "images/image_1.jpg"
				},
				{
					resumeBlog:"A small river named Duden flows by their place and supplies it with the necessary regelialia.", titleBlog:"The Delicious Pizza",
					numberOfComments:3,
					author: "Admin",
					date:"Sept 10, 2018",
					img: "images/image_1.jpg"
				}
      ]
    }  
  },
  components:{
    ArticleRecentBlog
  }
}
</script>