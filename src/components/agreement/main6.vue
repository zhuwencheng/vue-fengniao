<template>
    <div class="agreement">
        <Back>信息咨询与服务协议</Back>
        <div class="cantainer agreement-bd">
            <p>协议编号：{{agreementNo}}</p>
            <p>汉信互联网金融服务（武汉）股份有限公司为蜂鸟钱包APP运营方（以下简称“蜂鸟钱包”或“本平台”），用户（下称“您或用户”）是注册蜂鸟钱包帐号并使用其相关服务的完全民事行为能力自然人。</p>
            <p>本《信息咨询与服务费协议》（下称“本协议”）签约双方为您与蜂鸟钱包平台，在签订本协议之前，您确定已经充分阅读、理解并接受本协议的全部条款，并承诺遵守中华人民共和国现行有效的各类法律、法规、政策的规定。您通过平台点击确认本协议的，即表示您同意遵循本协议的所有约定，本协议在您和平台之间具有法律约束力。</p>
            <p class="h3">一、平台服务内容与范围</p>
            <p>1.1 本平台专注于为有资金需求的用户搭建一个安全、透明、便捷的融资网络交易信息中介服务平台，提供的服务内容包括但不限于账户开立及维护、信用咨询与评估、借款匹配、贷后信息管理等。您自愿注册成为蜂鸟平台注册用户，使用本平台提供的用户服务。</p>
            <p>1.2 用户同意并承诺：用户无条件接受平台为其推荐的资金提供方（下称“出借人”），自出借人将借款划付至用户的专用账户时，用户与出借人建立借款法律关系，受其与出借人签署的《借款协议》等文件条款的约束。</p>
            <p>1.3 根据以上约定的服务内容，平台有权向用户收取双方约定的服务费。</p>
            <p class="h3">二、服务费</p>
            <p>2.1 服务费指平台为用户提供账户开立及维护、信用咨询与评估、借款匹配、贷后信息管理等金融服务，而由用户支付给平台的费用，具体分为“平台服务费”和“逾期管理费”。</p>
            <p>2.1.1 “平台服务费”是指平台为用户提供账户开立及维护、信用咨询与评估、资金对接服务，而由用户支付给平台的一次性约定费用。</p>
            <p>2.1.2“逾期管理费”是指在用户未按时还款，产生逾期时，需要支付给平台的额外费用。</p>
            <p class="h3">三、收取标准及方式</p>
            3.1 平台服务费
            <p>3.1.1收取标准：逐笔收取，平台服务费金额为用户单笔借款金额的{{servFeeRate}}％。</p>
            <p>3.1.2收取时间：出借人发放借款之后，用户提现之前，用户授权平台或平台委托的第三方合作机构预先一次性扣除。</p>
            <p>3.2 逾期管理费</p>
            <p>3.2.1收取标准：用户应严格履行还款义务，如用户逾期还款时，则应向平台支付逾期管理费。逾期管理费收取金额见下表：</p>
            <table class="table">
                <tr>
                    <td>用户借款本金数额（元）</td>
                    <td>逾期管理费（元/日）</td>
                </tr>
                <tr>
                    <td>{{loanAmt}}元</td>
                    <td>{{overdueFee}}元</td>
                </tr>
            </table>
            <p>3.2.2 收取时间：平台自用户发生逾期还款行为超过0日（不含0日）后开始计收逾期管理费，至用户实际还款日为止。</p>
            <p class="h3">四、违约规定</p>
            <p>任何一方违反本协议的约定，使得本协议的全部或部分不能履行，均应承担违约责任，并赔偿给对方造成的损失（包括由此产生的诉讼费和律师费等其他费用）；如双方均违约，根据实际情况各自承担相应的责任。</p>
            <p class="h3">五、通知与送达</p>
            <p>5.1 本协议履行过程中双方之间作出的一切意思通知及往来文件，均可通过平台公告、手机短信、电子邮件、挂号信、特快专递送达双方。</p>
            <p>5.2 用户同意并确认，用户在平台注册时提供的手机号码、电子邮件、联系地址等均为有效的法律文书送达地址，用户在接受平台服务期间，若因以上信息发生变更，应当在相关信息发生变更之日起三日内将更新后的信息提供给平台。否则，用户因用户未能及时提供上述变更信息而带来的损失或额外费用应由用户自行承担。</p>
            <p class="h3">六、适用法律及争议解决</p>
            <p>6.1 本协议的签订、履行、终止、解释均适用中华人民共和国法律。</p>
            <p>6.2 履行本协议所产生的争议应当通过友好协商解决；如协商不成，则本协议任意一方均可向汉信互联网金融服务（武汉）股份有限公司所在地人民法院起诉。</p>
            <p class="h3">七、其他</p>
            <p>7.1 本协议采用电子文本形式制成，并在平台系统上保留存档。用户通过平台系统点击确认或以其他方式选择接受本协议，即表示已同意接受本协议的全部内容以及与本协议有关的各项平台规则。</p>
            <p>7.2本协议未尽事项按照平台现有及不时发布的各项规则执行。</p>
            <p>7.3 如本协议中的任何一条或多条被确认为无效，该无效条款并不影响本协议其他条款的效力。</p>
    
        </div>
    
    </div>
</template>

<script>
import Back from '../toolcomponents/back';
export default {
    name: 'agreement',
    components: {
        Back
    },
    data() {
        return {
            msg: '',
            trueName: '',//姓名
            idNo: '',//身份证号
            mobile: '',//手机号
            loanAmt: '',//借款金额
            loanAmtChinese: '',//借款金额大写
            loanTerm: '',//借款期限
            interest: '',//总利息
            defaultFeeRate: '',//逾期违约费费率
            overdueFee: '',//逾期管理费
            accountId: '',//存管电子账户,
            cardNo:'',//cardNo
            defaultFeeRate:'',//逾期违约费费率
            agreementNo:'',//协议编号
            servFeeRate:''
        }
    },
    methods: {
        queryData() {
            const _this = this;
            const beseUrl = _this.$store.state.config.hjd_url;
            const params = {
                applyAmt: _this.$route.query.applyAmt,
                applyTerm: _this.$route.query.applyTerm,
                productId: _this.$route.query.productId
            };
            if (_this.$store.state.userInfo != undefined) {
                const { userId, tokenId, appKey } = _this.$store.state.userInfo;
                _this.$http({
                    url: beseUrl + 'api/anon/h5/jsonpDispather.jsonp',
                    method: 'JSONP',
                    jsonp: '_callback',
                    params: encodeParams(params, userId, tokenId, appKey, beseUrl + "api/cust/getAgreementFactor")
                }).then(function (res) {
                    //alert(JSON.stringify(res.data));
                    if (res.data.code === 'SUCCESS') {
                        _this.trueName = res.data.data.trueName;
                        _this.idNo = res.data.data.idNo;
                        _this.mobile = res.data.data.mobile;
                        _this.loanAmt = res.data.data.loanAmt;
                        _this.loanAmtChinese = res.data.data.loanAmtChinese;
                        _this.loanTerm = res.data.data.loanTerm;
                        _this.interest = res.data.data.interest;
                        _this.defaultFeeRate = res.data.data.defaultFeeRate;
                        _this.overdueFee = res.data.data.overdueFee;
                        _this.accountId = res.data.data.accountId;
                        _this.cardNo = res.data.data.cardNo;
                        _this.defaultFeeRate = parseFloat(res.data.data.defaultFeeRate)*100;
                        _this.agreementNo = res.data.data.agreementNo;
                        _this.servFeeRate= parseFloat(res.data.data.servFeeRate)*100;
                    } 
                }, function (res) {
                    _this.$toast(res.data.msg);
                });
            }

        }
    },
    created() {
        this.queryData();
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

