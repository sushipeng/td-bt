<template>
    <div>
        <van-overlay :show="showOverlay">
            <div class="wrapper">
                <van-loading type="spinner" size="34px" />
            </div>
        </van-overlay>
    </div>
</template>

<script>
    export default {
        name: 'overlay',
        props: ['show'],
        data() {
            return {
                showOverlay: false
            }
        },
        watch: {
            show: {
                immediate: true,
                handler(val) {
                    this.showOverlay = val
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
