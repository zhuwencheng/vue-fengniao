<template>
    <div class="mesDetail">
        <Back>消息详情</Back>
        <div class="cantainer">
            <div class="hd" v-if="detailData">
                <h3>{{detailData.title}}</h3>
                <p>{{detailData.notifyTime}}</p>
            </div>
            <div class="bd" v-html="detailData.content" v-if="detailData"></div>
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
        queryDetail(id){
            const _this=this;
            const beseUrl=_this.$store.state.config.hjd_url;
            this.$http(
                {
                    url:beseUrl+ 'api/anon/basic/getNotificationDetail'+'.jsonp',
                    method: 'JSONP',
                    params:{
                        notificationId:_this.detailId
                    }
                }
            ).then(function(res){
                if(res.data.code === 'SUCCESS'){
                    _this.detailData=res.data.data;
                }else{
                    _this.$toast(res.data.msg);
                }
            },function(res){
                this.$toast(res.data.msg);
                // this.sendCodeNum=0;
            });
        },//查询公告详情
        setDetail(){
            this.detailData=this.$store.state.noticeDetailData;
            this.setReaded();
        },//从本地取消息详情，坑比的接口设计
        setReaded(){
            const _this=this;
            if(_this.detailData.viewStatus!=1){
                const beseUrl=_this.$store.state.config.hjd_url;
                const params={
                    msgId:_this.detailData.msgId,
                    viewSource:3
                }
                const {userId,tokenId,appKey}=_this.$store.state.userInfo;
                this.$http({
                        url:beseUrl+ 'api/anon/h5/jsonpDispather.jsonp',
                        method: 'JSONP',
                        jsonp: '_callback',
                        params:encodeParams(params,userId,tokenId,appKey,beseUrl+"api/cust/readMsg")
                    });
            }
        }//将消息设置为已读状态
    },
    data() {
        return {
            detailId:this.$route.params.id,
            type:this.$route.query.type,
            detailData:null
        }
    },
    created(){
        if(this.type==='announcement'){
            this.queryDetail(this.detailId);
        }else{
            this.setDetail();
        }
        
    }


}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

