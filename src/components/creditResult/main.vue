<template>
    <div class="creditresult">
        <!-- <Back>芝麻信用</Back> -->
        <div class="cantainer">
            <div class="t-box">
                <div class="f-img">
                    <img src="../../images/zmxy_bj_f.png" />
                </div>
                <div class="fail" v-if="isSuccess!='true'">
                    <span class="img-b">
                        <img src="../../images/zmxy-logo.png" />
                    </span>
                    <p>授权失败，请核实原因后再试</p>
                </div>
                <div class="success" v-if="isSuccess=='true'">
                    <div class="img-b">
                        <div class="num">
                            <p><span>{{creditNum}}</span> 分</p>
                            <p>{{creditDes}}</p>
                        </div>
                        <img src="../../images/zmxy-h.png" />
                    </div>
                    <p>评估时间：{{creditTime}}</p>
                </div>
                <div class="des">
                    芝麻信用是合法独立的信用评估及信用管理机构，除法律法规另有规定或经您授权的情况下，我们不会向他人透露您的信用相关的隐私信息。
                    <span></span>
                </div>
            </div>
            <div class="btn-wrapper">
                <mt-button type="primary" size="large" @click="goBack">确定</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import Back from '../toolcomponents/back';
export default {
    name: 'helpCenter',
    components: {
        Back
    },
    methods: {
        queryCreditDetail() {
            const _this=this;
            const beseUrl=this.$store.state.config.hjd_url;
            const params={source:3};
            if(_this.$store.state.userInfo==undefined){
                _this.rotation();
                return;
            }
            const {userId,tokenId,appKey}=_this.$store.state.userInfo;
            // const userId="fdf35d9bb37d4102bdcae7c09121602a";
            // const tokenId="9b72fc158ea44a2ab0315bc288ec3771";
            // const appKey="0688153717";
            if(userId==undefined){
                xjd.goLogin();
                return false;
            };
            this.$http(
                {
                    url:beseUrl+ 'api/anon/h5/jsonpDispather.jsonp',
                    method: 'JSONP',
                    jsonp: '_callback',
                    params:encodeParams(params,userId,tokenId,appKey,beseUrl+"/api/third/refreshSesameCreditStatus")
                }
            ).then(function(res){
                if(res.data.code === 'SUCCESS'){
                    //console.log(res.data.data)
                    _this.creditNum=parseFloat(res.data.data.zmScore);
                    _this.creditTime=res.data.data.queryDate||'2017-07-17';
                }
            },function(res){
                console.log(res);
            });
        },
        goBack(){
            if(typeof xjd!='undefined'&&this.$route.path==this.$store.state.enterUrl){
                xjd.goBack();
                return false;
            }else{
                this.$router.go(-1);
            }
        },
        rotation(){
            const _this=this;
            if (typeof xjd != 'undefined'&&xjd.getLoginInfo != undefined) {
                try {
                    const loginInfoString=xjd.getLoginInfo();
                    _this.$store.commit('setUserInfo', JSON.parse(loginInfoString));
                    _this.queryCreditDetail();
            　　} catch(err) {
                    _this.$store.commit('setUserInfo', {});
            　　}
            }else{
                window.setTimeout(_this.rotation,200);
            };
        }
        
    },
    data() {
        return {
            open_id: this.$route.query.open_id,
            isSuccess: this.$route.query.success,
            errorcode: this.$route.query.success,
            error_message: this.$route.query.error_message,
            creditNum:'查询中',
            creditTime:''
        }
    },
    mounted() {
        document.title="芝麻信用认证";
        this.queryCreditDetail();
    },
    computed:{
        creditDes(){
            if(this.creditNum<550){
                return '信用较差';
            }else if(this.creditNum<600||this.creditNum=='查询中'){
                return '信用中等';
            }else if(this.creditNum<600){
                return '信用良好';
            }else if(this.creditNum<600){
                return '信用优秀';
            }else{
                return '信用极好';
            }
        }
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

