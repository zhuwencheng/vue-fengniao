<template>
    <div class="modifyDPwd">
        <Back>修改交易密码</Back>
        <div class="cantainer">
            <div class="des">为了您的账户安全，在重置交易密码前，请先验证以下信息！</div>
            <div class="form-wrapper">
                <mt-field label="手机号码" placeholder="请输入手机号码" v-model="phone" readonly></mt-field>
                <mt-field label="验证码" placeholder="请输入短信验证码" v-model="code">
                    <span :class="{sendCode:true, disabled:sendCodeNum}" @click="sendCode">{{sendCodeText}}</span>
                </mt-field>
            </div>
            <mt-button type="primary" size="large" class="hjd-btn-primary" @click="next">下一步</mt-button>
        </div>
    </div>
</template>
<script>
import Back from '../toolcomponents/back';
export default {
    name: 'transactionDetails',
    components: {
        Back
    },
    methods: {
        sendCode() {
            if (this.sendCodeNum === 0) {
                this.sendCodeNum=60;
                this.querySendCode();
                this.countDown();
            }
        },
        countDown() {
            window.setTimeout(function () {
                this.sendCodeNum--;
                if(this.sendCodeNum!==0){
                    this.sendCodeText=this.sendCodeNum+'秒!';
                    this.countDown();
                }else{
                    this.sendCodeText='发送验证码';
                }
            }.bind(this), 1000);
        },
        next(){
            if(typeof this.code==undefined||this.code.length<1){
                this.$toast('请输入短信验证码！');
                return false;
            };
            if (this.code.length != 6) {
                this.$toast('请输入正确的验证码！');
                return false;
            };
            this.$toast('可以进行下一步操作了');
        },
        querySendCode(){
            const beseUrl=this.$store.state.config.iweb_uri;
            this.$http(
                {
                    url:beseUrl+ 'user/getMsgVerCunGuanCode.do',
                    params:{
                        userId: "407af93c6ce842d384b51505609b27e7",
                        phonenumber: "18696203792",
                        srvTxCode: "passwordResetPlus"
                    },
                    method: 'JSONP'
                }
            ).then(function(res){
                if(res.data.code === '0000'){
                    this.$toast('发送成功，请注意查收！');
                }else{
                    this.$toast(res.data.message);
                }
            },function(res){
                this.$toast(res.data.message);
                this.sendCodeNum=0;
            });
        }
    },
    data() {
        return {
            phone: 15927216320,
            code: '',
            sendCodeNum: 0,
            sendCodeText:'发送验证码'
        }
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

