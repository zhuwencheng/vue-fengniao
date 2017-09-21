<template>
    <div class="faqAudit">
        <Back>费用问题</Back>
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
                {title:'借款是否会收取服务费？',bd:'用户通过蜂鸟钱包借款，服务费在放款成功后一次扣除，选择不同金额，不同期限的产品，服务费不同。',isShow:true},
                {title:'提前还款是否有违约金？',bd:'提前还款违约金=未还本金*提前还款罚率。不同产品提前还款违约金不同，部分产品暂无违约金。'},
                {title:'借款逾期是否有逾期罚息、逾期管理费？',bd:'逾期罚息=待还本金*逾期天数*逾期利率（0.065%）。逾期管理费=逾期天数*每日逾期管理费（10元/日）。为避免影响用户征信，请用户务必在借款到期前还款。'}
            ]
        }
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

