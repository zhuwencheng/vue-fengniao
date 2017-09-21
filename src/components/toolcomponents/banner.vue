<template>
  <div class="banner">
    <img :src="url" />
  </div>
</template>

<script>
export default {
  name: 'banner',
  props:['url']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
	width:100%;
	height:150px;
}
.banner img{
	width:100%;
	height:150px;
}
</style>
