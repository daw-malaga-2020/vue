<template>
 
    <div class="col-md-4 d-flex ">
			  <div class="blog-entry align-self-stretch">
				<a
				  href="blog-single.html"
				  class="block-20"
				  :style='"background-image: url(" + img + ");"'
				>
				</a>
				<div class="text py-4 d-block">
				  <div class="meta">
					<div><a href="#">{{date}}</a></div>
					<div><a href="#">{{admin}}</a></div>
					<div>
					  <a href="#" class="meta-chat"
						><span class="icon-chat"></span> {{coments}}</a
					  >
					</div>
				  </div>
				  <h3 class="heading mt-2"><a href="#">{{title}}</a></h3>
				  <p>
            {{resumen}}
				  </p>
				</div>
		 </div>
  </div>
</template>

<script>

export default {
  props:["img", "date", "admin", "coments", "title", "resumen"]
}
</script>