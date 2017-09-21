<template>
    <div class="transctionDetails">
        <Back>交易明细</Back>
        <div class="cantainer">
            <div class="empty" v-if="detailsData.length==0">
                <span></span>
                <p>暂无记录</p>
            </div>
            <mt-loadmore :top-method="loadTop" ref="loadmore" v-if="detailsData.length!=0">
                <dl class="detail-item" v-for="item in detailsData">
                    <dt>
                        <span :class="{pos:item.txTpye=='还款',neg:item.txTpye=='借款'}">{{item.txAmount}}</span>元</dt>
                    <dd>{{item.txTpye}}</dd>
                    <dd class="time">{{item.txTime}}</dd>
                </dl>
            </mt-loadmore>
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
        loadTop() {
            this.queryList(this.$refs.loadmore.onTopLoaded)
        },
        queryList(callBack) {
            const _this = this;
            const beseUrl = this.$store.state.config.hjd_url;
            if (_this.$store.state.userInfo == undefined) {
                return;
            };
            const { userId, tokenId, appKey, account } = _this.$store.state.userInfo;
            _this.$store.commit('refeshIsLoading', true);
            const params = { mobile: account };
            if (userId == undefined) {
                xjd.goLogin();
                return false;
            }
            this.$http(
                {
                    url: beseUrl + 'api/anon/h5/jsonpDispather.jsonp',
                    method: 'JSONP',
                    jsonp: '_callback',
                    params: encodeParams(params, userId, tokenId, appKey, beseUrl + "/api/pay/getTransactionRecord")
                }
            ).then(function (res) {
                //alert(JSON.stringify(res.data))
                if (res.data.code === 'SUCCESS' && res.data.data) {
                    _this.detailsData = res.data.data;
                } else {
                    _this.$toast(res.data.msg);
                }
                callBack && callBack();
                _this.$store.commit('refeshIsLoading', false);
            }, function (res) {
                this.$toast(res.data.msg);
                _this.$store.commit('refeshIsLoading', false);
            });
        },
    },
    data() {
        return {
            detailsData: [
                // { txAmount: '+100,000.00', txTime: '2017.03.06', txTpye: "还款" }
            ]
        }
    },
    created() {
        const _this = this;
        _this.queryList();
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

