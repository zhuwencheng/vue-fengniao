<template>
    <div class="notFound">
        <Back>404！</Back>
        <div class="cantainer">
            <div class="notFound-box">
                <span class="img-wrapper"><img src="../../images/404.png"></span>
                <p>找不到你访问的页面！</p>
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

