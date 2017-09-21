<template>
    <div class="opc">
        <Back>运营商认证</Back>
        <div class="cantainer">
            <div class="hd">服务密码是什么？</div>
            <div class="bd">
                <p>服务密码是移动、联通、电信提供的身份凭证，如忘记可参考下面是的方法找回</p>    
            </div>
            <div class="hd">忘记服务密码怎么办？</div>
            <div class="bd">
                <dl>
                    <dt></dt>
                    <dd>移动用户</dd>
                    <dd>
                        <label>方法一：</label>
                        <p>手机拨打10086，转“人工客服”</p>
                    </dd>
                    <dd>
                        <label>方法二：</label>
                        <p>手机登录<a href="http://www.10086.cn">http://www.10086.cn</a> 选择身份－登录－忘记密码</p>
                    </dd>
                </dl>
                <dl>
                    <dt class="phone-icon"></dt>
                    <dd>联通用户</dd>
                    <dd>
                        <label>方法一：</label>
                        <p>手机拨打10010，转“人工客服”</p>
                    </dd>
                    <dd>
                        <label>方法二：</label>
                        <p>手机登录<a href="http://www.10010.com">http://www.10010.com</a> 登录－忘记密码</p>
                    </dd>
                </dl>
                <dl>
                    <dt class="phone-icon"></dt>
                    <dd>中国电信</dd>
                    <dd>
                        <label>方法一：</label>
                        <p>手机拨打10000，转“人工客服”</p>
                    </dd>
                    <dd>
                        <label>方法二：</label>
                        <p>手机登录<a href="http://wapzt.189.cn">http://wapzt.189.cn</a> 登录－忘记密码</p>
                    </dd>
                </dl>
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
        
    }
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

