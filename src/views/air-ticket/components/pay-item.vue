<template>
    <div class="containner">
        <div  class="form-content">
            <h3 class="title">支付系统</h3>
            <div class="msg-centent">
                本支付系统接受CDEP（央行数字货币），微信和支付宝。如果用微信和支付宝支付，现金会被转换成等值CDEP。用户的本次支付不会直接付给卖方。而是会被质押在智能合约里，只有交易成功后，且被买方与天地互联核实后，智能合约才会自动把钱转到卖方钱包地址。
            </div>
             <div class="btn-wrap">
                <van-button hairline round size="small" type="primary" @click="onSubmit">微 信</van-button>
                <van-button hairline round size="small" type="info" @click="onSubmit">支付宝</van-button>
                <van-button hairline round size="small" type="info" color="yellow" @click="onSubmit">CDEP</van-button>
            </div>
        </div>
        <overlay :show="showOverlay"/>
    </div>
</template>

<script>
    import overlay from '@/components/overlay'
    export default {
        name: 'payItem',
        components: { overlay },
        data() {
            return {
                showOverlay: false,
            }
        },
        methods: {
            onSubmit() {
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    this.$router.push({ path: '/task' })
                }, 300)
            },
            onFailed(errorInfo) {
                this.$toast({
                    message: '表单填写错误！',
                    duration: 1500
                })
            },
   
        }
    }
</script>
<style lang='scss' scoped>
    .containner {
        margin-top: 18%;
    }
    .form-content {
        padding-bottom: 15px;
        .title {
            font-size: 18px;
            height: 38px;
            line-height: 38px;
            font-weight: 600;
            text-align: center;
        }
        .msg-centent {
            margin-top: 15px;
            padding: 0 15px;
            font-size: 16px;
            line-height: 24px;
        }
        .btn-wrap {
            display: block;
            width: 231px;
            margin: 16px auto 0;
            position: relative;
            ::v-deep {
                .van-button {
                    margin-right: 25px;
                    width: 60px;
                    &:last-child {
                        margin-right: 0;
                        color: #000 !important;
                    }
                }
            }
        }
    }
</style>