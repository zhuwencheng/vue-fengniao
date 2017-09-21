import Vue from 'vue'
import Router from 'vue-router'
export default new Router({
    routes: [
        { path: '/', redirect: { name: 'HelpCenter' } },
        //---------------
        { path: '/helpCenter', name: 'HelpCenter', component: resolve => require(['components/helpCenter/main.vue'], resolve) },//帮助中心
        { path: '/faqAudit', name: 'FaqAudit', component: resolve => require(['components/faqAudit/main.vue'], resolve) },//帮助中心内页-审核问题
        { path: '/lending', name: 'Lending', component: resolve => require(['components/faqAudit/main2.vue'], resolve) },//帮助中心内页-放款问题
        { path: '/repayment', name: 'Repayment', component: resolve => require(['components/faqAudit/main3.vue'], resolve) },//帮助中心内页-还款问题
        { path: '/cost', name: 'Cost', component: resolve => require(['components/faqAudit/main4.vue'], resolve) },//帮助中心内页-费用问题
        { path: '/other', name: 'Other', component: resolve => require(['components/faqAudit/main5.vue'], resolve) },//帮助中心内页-其他问题
        { path: '/transactionDetails', name: 'TransactionDetails', component: resolve => require(['components/transactionDetails/main.vue'], resolve) },//交易明细
        { path: '/safeCenter', name: 'SafeCenter', component: resolve => require(['components/safeCenter/main.vue'], resolve) },//安全中心
        { path: '/operatorCertification', name: 'OperatorCertification', component: resolve => require(['components/operatorCertification/main.vue'], resolve) },//运营商认证忘记密码
        { path: '/operatorCertificationtwo', name: 'OperatorCertificationtwo', component: resolve => require(['components/operatorCertification/main2.vue'], resolve) },//运营商认证忘记密码
        { path: '/modifyDPwd', name: 'MdifyDPwd', component: resolve => require(['components/modifyDPwd/main.vue'], resolve) },//重置交易密码
        { path: '/statement', name: 'Statement', component: resolve => require(['components/statement/main.vue'], resolve) },//借款费用说明
        { path: '/noticeCenter', name: 'NoticeCenter', component: resolve => require(['components/noticeCenter/main.vue'], resolve) },//公告列表页
        { path: '/noticeCentertwo', name: 'NoticeCentertwo', component: resolve => require(['components/noticeCenter/main2.vue'], resolve) },//通知列表页
        { path: '/noticeDetail/:id', name: 'noticeDetail', component: resolve => require(['components/noticeDetail/main.vue'], resolve) },//公告通知详情页
        { path: '/creditResult', name: 'CreditResult', component: resolve => require(['components/creditResult/main.vue'], resolve) },//芝麻信用结果页
        { path: '/agreement', name: 'Agreement', component: resolve => require(['components/agreement/main.vue'], resolve) },//代扣服务协议
        { path: '/agreement1', name: 'Agreement1', component: resolve => require(['components/agreement/main1.vue'], resolve) },//蜂鸟钱包用户注册协议
        { path: '/agreement2', name: 'Agreement2', component: resolve => require(['components/agreement/main2.vue'], resolve) },//江西银行网络交易资金账户服务三方协议
        { path: '/agreement3', name: 'Agreement3', component: resolve => require(['components/agreement/main3.vue'], resolve) },//借款协议
        { path: '/agreement4', name: 'Agreement4', component: resolve => require(['components/agreement/main4.vue'], resolve) },//信息获取授权书
        { path: '/agreement5', name: 'Agreement5', component: resolve => require(['components/agreement/main5.vue'], resolve) },//用户授权协议
        { path: '/agreement6', name: 'Agreement6', component: resolve => require(['components/agreement/main6.vue'], resolve) },//信息咨询与服务协议
        //------------------
        {
            path: '*',
            name: 'NotFound',
            component: resolve => require(['components/notFound/main.vue'], resolve)
        }
    ]
});
