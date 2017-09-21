<template>
    <div class="opc">
        <Back>运营商认证</Back>
        <div class="cantainer">
            <div class="hd">提示验证失败/姓名验证错误怎么办？</div>
            <div class="bd">
                <dl>
                    <dt></dt>
                    <dd>服务密码</dd>
                    <dd>
                        <label>步骤一：</label>
                        <p>确认服务密码为本手机号的独立服务密码</p>
                    </dd>
                    <dd>
                        <label>步骤二：</label>
                        <p>准确输入服务密码</p>
                    </dd>
                </dl>
                <dl>
                    <dt class="phone-icon"></dt>
                    <dd>手机号码</dd>
                    <dd>
                        <label>步骤一：</label>
                        <p>确认手机号已在运营商处完成本人实名认证</p>
                    </dd>
                    <dd>
                        <label>步骤二：</label>
                        <p>确认基本信息的姓名与身份证好吗与本人在运营商处登记一致</p>
                    </dd>
                    <dd>
                        <label>步骤三：</label>
                        <p>准备输入手机号码</p>
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
    }
    
}
</script>


<style lang="less" scoped>
@import 'main.less';
</style>

