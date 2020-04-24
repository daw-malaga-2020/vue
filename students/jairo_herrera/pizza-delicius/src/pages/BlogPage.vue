<template>
  <div>
<FeatureBlog />

<li>
      <router-link to="/BlogPage">Blog</router-link>
</li>

  </div>
</template>

<script>

import FeatureBlog from '@/components/FeatureBlog'


export default {
	components: {
    FeatureBlog, 
	}
}
</script>