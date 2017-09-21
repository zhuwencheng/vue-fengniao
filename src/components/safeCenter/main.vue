<template>
    <div class="safeCenter">
        <Back>安全中心</Back>
        <div class="cantainer">
            <mt-cell title="登录密码" to="//github.com" is-link>修改</mt-cell>
            <mt-cell title="交易密码" to="//github.com" is-link>！未设置</mt-cell>
            {{userId||2}}{{count}}
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
        tabChange(item) {

            if (item.isShow == undefined) { this.$set(item, 'isShow', true) } else { item.isShow = !item.isShow; }

        }
    },
    data() {
        return {
            faqData: [
                { title: '审核放款时间是多久？', bd: '一般情况下，审核需要大概1-7天左右，请及时关注app或短信提醒哦', isShow: true },
                { title: '审核放款时间是多久2？', bd: '一般情况下，审核需要大概1-7天左右，请及时关注app或短信提醒哦' },
                { title: '审核放款时间是多久3？', bd: '一般情况下，审核需要大概1-7天左右，请及时关注app或短信提醒哦' },
                { title: '审核放款时间是多久4？', bd: '一般情况下，审核需要大概1-7天左右，请及时关注app或短信提醒哦' }
            ],
            userId:null
        }
    },
    computed: {
            count () {
                this.userId=this.$store.state.userInfo;
                return this.$store.state.userInfo;
            }
    },
    created(){
        
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

