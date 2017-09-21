<template>
  <div class="body-header blueHeader">
	  <div class="title" id="title" ref="title"><slot></slot></div>
	  <div class="back-btn" id="back-btn" @click='goback'></div>
  </div>
</template>

<script>
export default {
  name: 'back',
  props:['back'],
  methods:{
    goback:function(){
        if(typeof xjd!='undefined'&&this.$route.path==this.$store.state.enterUrl){
            xjd.goBack();
            return false;
        }else{
          this.$router.go(-1);
        }
        
        
    }
  },
  mounted(){
    if(typeof xjd!='undefined'&&xjd.changeNaviForIOS!=undefined){
        this.$nextTick(function () {
          xjd.changeNaviForIOS();
        });
          
    }
  },
  created(){
    window.title=this.$slots.default;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import 'back.less';
</style>
