<template>
    <div class="faqAudit">
        <Back>其他问题</Back>
        <div class="cantainer">
            <div class="faq-wp" v-for="(item,index) in faqData">
                <p class="hd" @click="tabChange(item)"><span class="index">{{index+1}}</span>{{item.title}}</p>
                <p :class="{ active: item.isShow,bd:true }" v-html="item.bd"></p>
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
                {title:'借款需要什么材料？',bd:'需要用户在蜂鸟钱包APP中填写身份证、银行卡、现居住址、单位名称、单位地址、工作岗位、联系人等资料，以及进行运营商认证。如有疑问详询客服。',isShow:true},
                {title:'可借金额为500-1000元，为何申请500元后不能继续申请？',bd:'目前蜂鸟钱包500-1000元的可借金额是针对所有符合提交的用户设定的，若申请一次借款后，用户需要在还款成功后才能进行下次借款。即若用户申请了500元借款，那么只能在还款成功后才能再次申请借款。'},
                {title:'如何更改手机号？',bd:'目前暂不支持用户自行修改手机号码。'},
                {title:'忘记登录密码怎么办？',bd:'用户可以在登录页面点击“忘记密码”，通过手机号重置登录密码，设置成功后重新登录即可。'},
                {title:'若想更换银行卡该怎么办？',bd:'目前蜂鸟钱包暂不支持更换绑定的银行卡。'},
                {title:'身份证是否可以更换？',bd:'身份证若过期了，可以更换新的身份证，但必须是本人身份证，非本人身份证无法审核通过。'},
                {title:'可以通过哪些方式联系蜂鸟钱包客服？',bd:'客服电话：027-87631568。服务时间：工作日9：00-12:00  13:30~17：30。客服QQ：725650279。'},
                {title:'银行卡绑定失败的原因是什么？',bd:'（1）银行卡信息填写错误，请核实后重新提交；<br/>（2）非本人在银行预留手机号，请更换一张本人预留手机号的银行卡或前往银行修改预留手机号后再重新提交；<br/>（3）绑定的不是您本人的银行卡，请用本人的银行卡进行绑定。'}
                                                
            ]
        }
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

