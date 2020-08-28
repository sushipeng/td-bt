<template>
    <div class="containner">
        <div class="panel">
            <div class="form-title">
                <span>登录</span>
            </div>
            <van-form @submit="onSubmit" @failed="onFailed" :label-width="50" label-align="left" show-error class="form-wrap">
                <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="请输入用户名"
                    clearable
                    :rules="[{ required: true, message: '' }]"
                />
                
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="请输入密码"
                     clearable
                    :rules="[{ required: true, message: '' }]"
                />
                <div class="btn">
                    <van-button round block type="info" native-type="submit">提交</van-button>
                </div>
            </van-form>
        </div>
        <overlay :show="showOverlay"/>
    </div>
</template>

<script>
    import Storage from '@/utils/storage'
    import overlay from '@/components/overlay'

    export default {
        name: 'login',
        components: { overlay },
        data() {
            return {
                username: 'admin',
                password: 'admin',
                showOverlay: false,
            }
        },
        methods: {
            onSubmit(values) {
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    if (values.password && values.username) {
                        Storage.setItem('token', 'td-bt', { expires: 1/(24*60)*30 })
                        this.$router.push({ path: '/' })
                    }
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
    .panel {
        position: absolute;
        width: 320px;
        height: 280px;
        background: #fff;
        box-shadow: 0 0.27vw 2.4vw 0 rgba(9,38,61,.2);
        border-radius: 4.27vw;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        .form-title {
            text-align: center;
            margin: 15px 0 20px 0;
        }

        .form-wrap {
            .btn {
                margin: 20px 16px 0 16px;
            }
        }
  
        ::v-deep {
            .van-cell:first-child {
                margin-bottom: 15px;
            }
        }
    }
</style>