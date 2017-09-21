<template>
    <div class="statement">
        <Back>借款费用说明</Back>
        <div class="cantainer hasFooter">
            <div class="bd">
                <p class="title">一、服务费用</p>
                <p>用户在蜂鸟钱包申请借款，出借人收取的借款利息为每日万分之5，按日计算。同时蜂鸟钱包会按照借款金额的百分之15~20收取平台服务费，实际服务费根据您申请的借款产品进行确定，平台服务费包括手机验证费、银行卡验证费、身份验证费、账户管理费、征信审核费、信息发布费、平台运营费、电话客户服务费及风险准备金计提等。您的提现到账金额等于借款金额减去平台服务费。</p>
                <p class="title">二、逾期费用</p>
                <p>若您的借款未按时还款，我们将根据用户借款金额，按日收取逾期罚息以及逾期管理费费用，收取规则如下：</p>
                <table>
                    <tr>
                        <td>借款本金</td>
                        <td>逾期罚息/日</td>
                        <td>逾期管理费/日</td>
                    </tr>
                    <tr>
                        <td>500~1000元</td>
                        <td>0.065%</td>
                        <td>10元</td>
                    </tr>
                </table>
                <p>逾期后应还金额=借款本金+应还利息+逾期罚息+逾期管理费</p>
                <p class="title">三、提前还款费用</p>
                <p>若用户提前还款，借款利息按照实际借款天数收取，目前蜂鸟钱包提前还款暂不收取提前还款违约金。</p>
            </div>
        </div>
        <div class="footer-btn" @click="goToUrl">借款试算</div>
    </div>
</template>

<script>
import Back from '../toolcomponents/back';
export default {
    name: 'helpCenter',
    components: {
        Back
    },
    data() {
        return {
            
        }
    },
    methods: {
        goToUrl() {
            if(typeof xjd!='undefined'){
                xjd.goCount();
            }
        }
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

