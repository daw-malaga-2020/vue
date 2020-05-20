<template>
  <div>
<div class="pricing-entry d-flex ">
		<div
				  class="img"
				  :style='"background-image: url(" + img + ");"'
		></div>
		<div class="desc pl-3">
			  <div class="d-flex text align-items-center">
					<h3><span>{{title}}</span></h3>
					<span class="price">{{price}}</span>
			  </div>
		    <div class="d-block">
					<p>
            {{desc}}
					</p>
			  </div>
		</div>
	  </div>
  </div>
</template>

<script>
export default {
	props:["img", "title", "price", "desc" ],  
}
</script>