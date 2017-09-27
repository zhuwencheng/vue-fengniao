<template>
    <div class="faqAudit">
        <Back>还款问题</Back>
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
                {title:'可以通过哪些方式还款？',bd:'用户可以在借款到期前通过蜂鸟钱包APP还款-待还款功能主动操作还款，或在用户绑定的银行卡准备充足的资金，借款到期当天系统将自动将资金扣划还款。',isShow:true},
                {title:'是否支持提前还款？',bd:'部分产品支持提前还款。'},
                {title:'是否支持部分还款？',bd:'蜂鸟钱包暂时不支持部分还款，请于到期当天在绑定的银行卡代扣账户中准备充足资金或通过APP主动还款。'},
                {title:'是否可以展期还款？',bd:'蜂鸟钱包暂不支持展期还款。'},
                {title:'借款逾期后会有什么影响？',bd:'借款逾期后会影响到您的征信，对您的信用产生不良影响，同时无法再次通过蜂鸟钱包申请借款。如果逾期时间较长，公司会采取必要法律手段。例如诉讼、仲裁等，裁决完毕后未履行，您将被录入法院失信被执行人名单。您将无法乘坐交通工具、住宿、购买或租赁不动产、购车、旅游度假、购买保险等一切高消费行为。'},
                {title:'正常还款和逾期还款自动扣款的时间是几点？',bd:'正常还款代扣时间为还款日当天9:00、17:00开始，请通过此方式还款的客户，及时将待还款项于应还款当日9:00、17:00前充值到自动代扣的银行卡账户内。逾期还款暂不进行自动代扣，请借款用户自行通过蜂鸟钱包APP-待还款功能进行主动还款。'}
            ]
        }
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

