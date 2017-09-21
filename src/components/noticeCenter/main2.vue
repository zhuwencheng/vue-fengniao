<template>
    <div class="mesCenter">
        <Back>消息</Back>
        <div class="cantainer">
            <div class="tabNav">
                <dl>
                    <router-link :to="'noticeCenter'">
                        <dd href="#">公告</dd>
                    </router-link>
                    <dd href="#" class="active">通知
                        <em v-if="messageNum>0">{{messageNum}}</em>
                    </dd>
                </dl>
            </div>
            <div class="list-wrapper">
                <div class="empty" v-if="listDatas.length==0">
                    <span></span>
                    <p>暂无通知~</p>
                </div>
                <mt-loadmore :top-method="loadTop" ref="loadmore" v-if="listDatas.length>0">
                    <dl :class="{'list-item':true, disabled:item.viewStatus}" v-for="item in listDatas" @click="toDetail(item)">
                        <dt>
                            <span class="fr">{{item.notifyTime.split(' ')[0]}}</span>
                            <span class="type">{{item.title}}</span>
                        </dt>
                        <dt>{{item.content}}</dt>
                        <dd>查看详情</dd>
                    </dl>
                </mt-loadmore>
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
        loadTop() {
             this.queryList(this.$refs.loadmore.onTopLoaded);
        },
        queryList(callBack){
            const _this=this;
            const beseUrl=this.$store.state.config.hjd_url;
            const params={};
            if(_this.$store.state.userInfo==undefined){
                return;
            };
            const {userId,tokenId,appKey}=_this.$store.state.userInfo;
            if(userId==undefined){
                xjd.goLogin();
                return false;
            }
            this.$http(
                {
                    url:beseUrl+ 'api/anon/h5/jsonpDispather.jsonp',
                    method: 'JSONP',
                    jsonp: '_callback',
                    params:encodeParams(params,userId,tokenId,appKey,beseUrl+"/api/cust/getMsg")
                }
            ).then(function(res){
                if(res.data.code === 'SUCCESS'){
                    _this.listDatas=res.data.data;
                }else{
                    _this.$toast(res.data.msg);
                }
                callBack&&callBack();
            },function(res){
                this.$toast(res.data.msg);
                this.sendCodeNum=0;
            });
        },
        queryUnRead(){
            const _this=this;
            const beseUrl=_this.$store.state.config.hjd_url;
            const params={}
            if(_this.$store.state.userInfo==undefined){
                return;
            };
            const {userId,tokenId,appKey}=_this.$store.state.userInfo;
            userId&&this.$http(
                {
                    url:beseUrl+ 'api/anon/h5/jsonpDispather.jsonp',
                    method: 'JSONP',
                    jsonp: '_callback',
                    params:encodeParams(params,userId,tokenId,appKey,beseUrl+"api/cust/countUnReadMsg")
                }
            ).then(function(res){
                if(res.data.code === 'SUCCESS'){
                    _this.messageNum=res.data.data;
                }else{
                    _this.$toast(res.data.msg);
                }
            },function(res){
                _this.messageNum=0;
            });
        },
        toDetail(item){
            this.$store.commit('setNotice',item);
            this.$router.push({ path: 'noticeDetail/'+0, query: { type: 'notice' }});
        }
    },
     data() {
        return {
            listDatas: [],
            messageNum:0
        }
    },
    created(){
        this.queryList();
        this.queryUnRead();
    }

}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

