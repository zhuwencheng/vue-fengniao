<template>
    <div class="faqAudit">
        <Back>审核问题</Back>
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
                {title:'审核一般要多久？',bd:'一般情况下审核时间是1-7个工作日，最快3分钟完成审核，审核结果将以APP消息通知大家，请及时关注蜂鸟钱包APP消息通知。若超过7个工作日还未审核通过，请联系蜂鸟钱包客服热线：027-87631568。',isShow:true},
                {title:'审核期间会打电话吗？',bd:'一般情况下不会给用户打电话，我们会根据用户填写的信息核实用户的情况，必要情况下会跟用户打电话确认。请用户务必保证用户的资料信息真实有效。'},
                {title:'审核期间能修改资料吗？',bd:'审核期间不能修改资料，用户的借款申请资料若审核未通过，用户可以修改资料重新提交。若一个月内连续三次申请仍未通过，则无法再次申请，用户可以一个月后再申请。'},
                {title:'审核失败的原因是什么？',bd:'用户借款申请审核失败原因可能是资料不真实或不正确，或综合信用评分不足，可能是用户暂时不符合标准，用户可以过一段时间再申请试试。'}
            ]
        }
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

