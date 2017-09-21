<template>
  <div class="loadingWrapper" v-if="isShow">
	  <div class="lodingbox"><img src="../../images/loading.gif"></div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  computed:{
    isShow(){
      return this.$store.state.isLoading;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import 'loading.less';
</style>
