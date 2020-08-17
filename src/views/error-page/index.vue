<template>
    <div class="containner">
        <div class="err-num">404</div>
        <div class="error">ERROR</div>
    </div>
</template>

<script>
    //	import 《组件名称》 from 《组件路径》

    export default {
        name: '',
        components: {},
        data() {
            return {
            }
        },
        filters: {},
        created() {
        },
        mounted() {
        },
        beforeCreate() {}, //	生命周期 - 创建之前
        beforeMount() {}, //	生命周期 - 挂载之前
        beforeUpdate() {}, //	生命周期 - 更新之前
        updated() {}, //	生命周期 - 更新之后
        beforeDestroy() {}, //	生命周期 - 销毁之前
        destroyed() {}, //	生命周期 - 销毁完成
        activated() {}, //	如果页面有keep-alive缓存功能，这个函数会触发
        computed: {},
        watch: {},
        methods: {}
    }
</script>
<style lang='scss' scoped>
    .containner {
        color: #fff;
        text-align: center;
        overflow: hidden;
    }
    .err-num {
        font-size: 78px;
        font-weight: 700;
        text-shadow: 0px 3px 0px #7f8c8d;
        margin-top: 50%;
    }
    .error {
        font-size: 58px;
        text-shadow: 0px 3px 0px #7f8c8d;
        font-weight: 100;
    }
</style>