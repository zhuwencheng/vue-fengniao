<template>
    <div class="faqAudit">
        <Back>放款问题</Back>
        <div class="cantainer">
            <div class="faq-wp" v-for="(item,index) in faqData">
                <p class="hd" @click="tabChange(item)"><span class="index">{{index+1}}</span>{{item.title}}</p>
                <p :class="{ active: item.isShow,bd:true }">{{item.bd}}</p>
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
    methods:{
        tabChange(item){

            if(item.isShow==undefined){this.$set(item,'isShow',true)}else{item.isShow=!item.isShow;}

        }
    },
    data(){
        return {
            faqData:[
                {title:'审核通过后多长时间可以拿到放款资金？',bd:'审核通过后，一般情况下需要1~5天左右拿到放款资金，最快10分钟可以拿到放款资金。',isShow:true},
                {title:'放款资金是直接发放到绑定的银行卡吗？',bd:'是的，借款资金会直接发放到用户绑定的银行卡中。'}
            ]
        }
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

