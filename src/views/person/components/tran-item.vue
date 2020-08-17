<template>
    <div class="containner">
        <div  class="form-content">
            <h3 class="title">等待确认交易</h3>
            <div class="row">
                 <div class="tip">选择合约号，可以提取交易信息。</div>
                  <van-field 
                    class="field"
                    v-model="userId" 
                    placeholder="请选择"
                    readonly
                    label="合约号"
                    right-icon="arrow-down"
                    @click="handleClickField"/>

                  <van-button block size="small" type="primary" @click="handleExtract">提取</van-button>
            </div>

            <div class="row">
                <van-field
                    class="textarea"
                    v-model="message"
                    rows="3"
                    autosize
                    label=""
                    type="textarea"
                    placeholder="这里会显示交易信息及电子机票截图。确认出票无误后按上链，把信息上链。"
                    readonly
                />

                  <van-button block size="small" type="primary" @click="handleCochain">上链</van-button>
            </div>
            
        </div>

        <van-popup v-model="showPicker" position="bottom" round>
            <van-picker
                show-toolbar
                :columns="columns"
                :default-index="defaultIndex"
                @confirm="onConfirmPicker"
                @cancel="showPicker = false"
            />
        </van-popup> 

        <overlay :show="showOverlay"/>
    </div>
</template>

<script>
    import overlay from '@/components/overlay'
    export default {
        name: 'taskItem',
        components: { overlay },
        data() {
            return {
                showPicker: false,
                showOverlay: false,
                userId: '',
                message: '',
                columns: [10001,1002,1003,1004],
                defaultIndex: 0,
            }
        },
        methods: {
            onSubmit() {
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    this.$emit('handleSuccess', 'contractItem')
                }, 500)
            },
            onFailed(errorInfo) {
                this.$toast({
                    message: '表单填写错误！',
                    duration: 1500
                })
            },
            handleClickField() {
                this.showPicker = true
            },
             onConfirmPicker(val) {
                this.userId = val
                this.showPicker = false
            },
            handleExtract() {
                if(!this.userId) {
                    this.$toast('请选择合约号');
                    return
                }
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                     this.$toast('提取成功！');
                     this.message = '交易信息成功'
                }, 500)
            },
            handleCochain() {
                if(!this.userId) {
                    this.$toast('请选择合约号')
                    return
                }
                if(!this.message) {
                    this.$toast('请先提取！')
                    return
                }
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    this.$toast('上链成功！')
                    this.$router.push({ path: '/account' })
                }, 500)
            }
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
            margin-bottom: 5px;
        }
        .row {
            padding: 0 15px;
            margin-bottom: 15px;
            .tip {
                font-size: 14px;
                line-height: 32px;
                color: #999;
            }
            .field, .textarea {
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
        }
    }

    .btn-wrap {
        margin-top: 15px;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ::v-deep {
            .van-button {
                width: 90px;
            }
        }
    }

</style>