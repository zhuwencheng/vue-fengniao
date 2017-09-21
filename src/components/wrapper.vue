<template>
    <div>
    <!--<transition name="fade">-->
      <router-view></router-view>
    <!--</transition>-->
    <Loading></Loading>
    <loseNet></loseNet>
    </div>
</template>

<script>
import Vue from 'vue';
import Loading from './toolcomponents/loading';
import loseNet from './toolcomponents/loseNet';
export default Vue.component('wrapper', {
    name: 'wrapper',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        Loading,
        loseNet
    },
})
</script>

        <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../css/reset.less';
</style>
