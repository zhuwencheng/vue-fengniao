<template>
    <div class="helpCenter">
        <Back>帮助中心</Back>
        <div class="cantainer">
            <div class="telphone-bd">
                <a href="tel:027-87631568" target="_blank"><p class="phone-image"></p></a>
                <a href="tel:027-87631568">
                    <p>客服热线</p>
                    <p class="phone-text">027-87631568</p>
                </a>
            </div>
            <div class="contact-me">
                <span class="line"></span>
                <a href="mqq://im/chat?chat_type=wpa&uin=725650279&version=1&src_type=web" target="_blank">
                    <dl>
                        <dt><img src="../../images/QQ.png" /></dt>
                        <dd>在线客服<br/>QQ</dd>
                    </dl>
                </a>
                <a href="weixin://" target="_blank">
                    <dl>
                        <dt><img src="../../images/WCHAT.png" /></dt>
                        <dd>微信公众号<br/>蜂鸟钱包</dd>
                    </dl>
                </a>
            </div>
            <div class="hd-type1">常见问题</div>
            <div class="link-bd">
                    <dl v-for="item in linkData">
                        <router-link :to="{ path: item.goUrl }">
                            <dt :style="{backgroundImage: 'url(' + item.url + ')'}"></dt>
                            <dd>{{item.text}}</dd>
                        </router-link>
                    </dl>
            </div>
        </div>

    </div>
</template>

<script>
import Back from '../toolcomponents/back';
    export default {
    name: 'helpCenter',
    components:{
        Back
    },
    data(){
        return {
            linkData:[
                {url:require('../../images/shenhe.png'),text:'审核问题',goUrl:'faqAudit'},
                {url:require('../../images/fangkuan.png'),text:'放款问题',goUrl:'lending'},
                {url:require('../../images/huankuan.png'),text:'还款问题',goUrl:'repayment'},
                {url:require('../../images/feiyong.png'),text:'费用问题',goUrl:'cost'},
                {url:require('../../images/other.png'),text:'其他问题',goUrl:'other'},
                {url:'',text:''}
            ]
        }
    },
    methods:{
        tip(){
            this.$messagebox.alert('提示', 'sdf');
        }
    },
    filters:{
        formateMoney(num){
            return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
        }
    },
    /*beforeRouteEnter (to, from, next){
        window.setTimeout(()=>{
        next(vm => {
        console.log(vm.$http)
        //vm.productItem = productJson
        })
        },100)
    }*/
}
</script>


<style lang="less" scoped>
    @import 'main.less';
</style>

