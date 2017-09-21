<template>
    <div class="mesCenter">
        <Back>消息</Back>
        <div class="cantainer">
            <div class="tabNav">
                <dl>
                    <dd href="#" class="active">公告
                    </dd>
                    <router-link :to="'noticeCentertwo'">
                        <dd href="#">通知
                            <em v-if="messageNum>0">{{messageNum}}</em>
                        </dd>
                    </router-link>
                </dl>
            </div>
            <div class="list-wrapper">
                <div class="empty" v-if="listDatas.length==0">
                    <span></span>
                    <p>暂无公告~</p>
                </div>
                <mt-loadmore :top-method="loadTop" ref="loadmore" v-if="listDatas.length>0">
                    <dl class="list-item" v-for="item in listDatas" @click="toDetail(item.id)">
                        <dt>
                            <span class="fr">{{item.notifyTime.split(' ')[0]}}</span>
                            <span class="type">{{item.title}}</span>
                        </dt>
                        <dt>{{item.synopsis}}</dt>
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
    data() {
        return {
            listDatas: [],
            messageNum: 0
        }
    },
    methods: {
        queryList(callBack) {
            const _this = this;
            const beseUrl = this.$store.state.config.hjd_url;
            this.$http(
                {
                    url: beseUrl + 'api/anon/basic/getNotifications' + '.jsonp',
                    method: 'JSONP'
                }
            ).then(function (res) {
                if (res.data.code === 'SUCCESS'&&res.data.data.notificationList) {
                    _this.listDatas = res.data.data.notificationList;
                } else {
                    _this.$toast(res.data.msg);
                }
                callBack && callBack();
            }, function (res) {
                this.$toast(res.data.msg);
                this.sendCodeNum = 0;
            });
        },
        queryUnRead() {
            const _this = this;
            const beseUrl = _this.$store.state.config.hjd_url;
            const params = {}
            if (_this.$store.state.userInfo == undefined) {
                return;
            };
            const { userId, tokenId, appKey } = _this.$store.state.userInfo;
            this.$http(
                {
                    url: beseUrl + 'api/anon/h5/jsonpDispather.jsonp',
                    method: 'JSONP',
                    jsonp: '_callback',
                    params: encodeParams(params, userId, tokenId, appKey, beseUrl + "api/cust/countUnReadMsg")
                }
            ).then(function (res) {
                if (res.data.code === 'SUCCESS') {
                    _this.messageNum = res.data.data;
                } else {
                    _this.$toast(res.data.msg);
                }
            }, function (res) {
                console.log(res);
            });
        },
        loadTop() {
            this.queryList(this.$refs.loadmore.onTopLoaded)
        },
        toDetail(id) {
            this.$router.push({ path: 'noticeDetail/' + id, query: { type: 'announcement' } });
        }
    },
    created() {
        this.queryList();
        if (this.$store.state.userInfo != undefined) {
            const { userId } = this.$store.state.userInfo;
            this.queryUnRead();
        };
    }

}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

