<template>
    <div class="containner">
        <div  class="form-content">
            <div class="item">
                <h3 class="title">选择合约期限</h3>
                <van-calendar
                    class="calendar"
                    title="日历"
                    :poppable="false"
                    :show-title="false"
                    :show-confirm="false"
                    :show-mark="false"
                    color="#1989fa"
                    row-height="24"
                    />
            </div>
            <div class="item">
                <h3 class="title">选择合约最低折扣</h3>
                <van-field 
                    class="field"
                    v-model="discountVal" 
                    placeholder="请选择"
                    readonly  
                    right-icon="arrow-down"
                    @click="handleClickField"/>
            </div>

            <div style="margin: 16px;">
                <van-button round block type="info" @click="onSubmit">Submit</van-button>
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
        name: 'submitItem',
        components: { overlay },
        data() {
            return {
                showPicker: false,
                showOverlay: false,
                discountVal: '70%',
                columns: [],
                defaultIndex: -1,
            }
        },
        mounted() {
            this.columns = []
            for(let i = 50; i<=70; i++) {
                this.columns = [...this.columns, `${i}%`]
            }
            this.defaultIndex = this.columns.length &&  this.columns.length - 1
        },
        methods: {
            onSubmit() {
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    this.$emit('handleSuccess', 'payItem')
                }, 300)
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
                this.discountVal = val
                this.showPicker = false
            }
        }
    }
</script>
<style lang='scss' scoped>
    .containner {
        margin-top: 5%;
    }
    .form-content {
        ::v-deep {
            .van-calendar__day {
                font-size: 14px;
            }
            .van-calendar__selected-day {
                width: 22px;
                height: 22px;
            }
            .van-calendar__header-subtitle {
                height: 28px;
                line-height: 28px;
            }
        }
        .item {
            margin-bottom: 15px;
            padding: 0 10px;

            .calendar {
                height: 200px;
            }
            .field {
                width: 60%;
                margin:  0 auto;
                border: 1px solid #ccc;
                border-radius: 6px;
                line-height: 15px;
            }
  
            .title {
                font-size: 16px;
                height: 38px;
                line-height: 38px;
                text-align: center;
            }
        }
    }

 
</style>