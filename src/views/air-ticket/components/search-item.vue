<template>
    <div class="containner">
        <div  class="form-content">
            <van-form @submit="onSubmit" @failed="onFailed" label-width="50px">
                <van-field
                    readonly
                    clearable
                    :value="departure"
                    name="departure"
                    label="出发地"
                    placeholder="请选择出发地"
                    right-icon="arrow-down"
                    @click="handleShowPicker('departure')"
                    :rules="[{ required: true, message: '' }]"/>
                <van-field
                    readonly
                    clearable
                    :value="destination"
                    name="destination"
                    label="目的地"
                    placeholder="请选择目的地"
                    right-icon="arrow-down"
                    @click="handleShowPicker('destination')"
                    :rules="[{ required: true, message: '' }]"/>
                <van-field
                    readonly
                    clickable
                    name="calendar"
                    :value="dateVal"
                    label="日期"
                    placeholder="请选择日期"
                    right-icon="arrow-down"
                    @click="handleShowCalendar"
                    :rules="[{ required: true, message: '' }]"/>

                <div class="checked-content">
                    <van-checkbox v-model="checked" icon-size="14px">商务/头等舱</van-checkbox>
                </div>
                <div class="level"> 
                    <van-stepper v-model="levelVal" button-size="20" disable-input />
                    <!-- <van-field v-model="levelVal" readonly input-align="center"/>
                    <div class="icon-content">
                         <span class="iconfont">&#xe666;</span>
                         <span class="iconfont">&#xe665;</span>
                    </div> -->
                </div> 
                
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">Search</van-button>
                </div>
                
            </van-form>
        </div>

        <van-popup v-model="showPicker" position="bottom" round>
            <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirmPicker"
                @cancel="showPicker = false"
            />
        </van-popup> 

        <van-calendar
            v-model="showCalendar"
            title="日历"
            :show-title="false"
            :show-mark="false"
            color="#1989fa"
            row-height="32"
            @confirm="onConfirmCalendar" />

        <overlay :show="showOverlay"/>
        
    </div>
</template>

<script>
    import overlay from '@/components/overlay'
    export default {
        name: 'searchItem',
        components: { overlay },
        data() {
            return {
                showPicker: false,
                showCalendar: false,
                checked: false,
                showOverlay: false,
                columns: ['北京', '广州', '青岛', '深圳', '上海'],
                type: '',
                departure: '',
                destination: '',
                dateVal: '',
                levelVal: 3,
            }
        },
        methods: {
            onSubmit(values) {
                console.log('submit', values)
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    this.$emit('handleSuccess', 'selectItem')
                }, 500)
            },
            onFailed(errorInfo) {
                this.$toast({
                    message: '表单填写错误！',
                    duration: 1500
                })
            },
            handleShowPicker(type) {
                this.type = type
                this.showPicker = true
            },
            handleShowCalendar() {
                this.showCalendar = true
            },
            onConfirmPicker(value) {
                if (this.type === 'departure') {
                    this.departure = value
                } else if (this.type === 'destination') {
                    this.destination = value
                }
                this.showPicker = false
                console.log(value)
            },
            onConfirmCalendar(date) {
                console.log(date)
                this.dateVal = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
                this.showCalendar = false;
            },
   
        }
    }
</script>
<style lang='scss' scoped>
    .containner {
        margin-top: 18%;
    }
    ::v-deep {
        .van-calendar__selected-day {
            width: 22px;
            height: 22px;
        }
    }
    .checked-content {
        display: flex;
        padding: 15px 15px 0 15px;
        font-size: 15px;
        color: #646566;
        align-items: center;
        // justify-content: start;
    }
    .level {
        display: flex;
        margin-left: 15px;
        margin-top: 15px;
        // border: 2px solid #ccc;
        // width: 60px;
        ::v-deep {
            .van-cell {
                width: 40px;
                padding: 0;
                border: 2px solid #ccc;
                text-align: center;
                border-right: 2px solid #ccc;
            }
        }
        .icon-content {
            border: 2px solid #ccc;
            border-left: none;
            position: relative;
            width: 25px;
            span {
                position: absolute;
                right: 0;
                font-size: 20px;
                color: #000;
                &:first-child {
                   top: -6px;
                }
                &:last-child {
                   bottom: -6px;
                }
            }
        }
    }

</style>