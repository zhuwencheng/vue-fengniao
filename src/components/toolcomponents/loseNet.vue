<template>
  <div class="loseNet" v-if="isShow">
    <div class="notFound-box">
        <span class="img-wrapper"><img src="../../images/404.png"></span>
        <p>找不到你访问的页面！</p>
        <p class="btn-wrapper"><mt-button type="default" @click='refeshPage'>立即刷新</mt-button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loseNet',
  computed:{
    isShow(){
      return this.$store.state.isLoseNet;
    }
  },
  methods:{
    refeshPage(){
      window.location.reload();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import 'loseNet.less';
</style>
