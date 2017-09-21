import Vue from 'vue';
import vueResource from 'vue-resource';
import Router from 'vue-router';
import MintUI from 'mint-ui';

import Wrapper from './components/wrapper.vue';
import router from './router/router-new';
import store from './store/store';
import Vuex from 'vuex';
import encodeParams from 'encode.js';
Vue.use(Vuex);
Vue.use(MintUI);
Vue.use(Router);
router.beforeEach((to, from, next) => {
    if (store.state.enterUrl == undefined) {
        store.commit('setEnterUrl', to.path);
    }
    next();
})
Vue.use(vueResource);
window.IOSTool = {
    hideTitle() {
        document.querySelector('.body-header').style.display = 'none';
        document.querySelector('.cantainer').style.top = 0;
    },
    getTitle() {
        return document.querySelector('.body-header .title').innerHTML;
    }
};
window.encodeParams = encodeParams;
var app7 = new Vue({
    el: '#app',
    store,
    watch: {
        '$route'(to, from, next) {

            //this.$indicator.open('Loading...');
            //console.log(to,from);
        }
    },
    components: {
        wrapper: Wrapper
    },
    data: {
        parentDatas: 123
    },
    router,
    created() {
        const _this = this;
        if (typeof xjd != 'undefined'&&xjd.getLoginInfo != undefined) {
            try {
                const loginInfoString=xjd.getLoginInfo();
                _this.$store.commit('setUserInfo', JSON.parse(loginInfoString));
        　　} catch(err) {
                _this.$store.commit('setUserInfo', {});
        　　}

        };
    }
});