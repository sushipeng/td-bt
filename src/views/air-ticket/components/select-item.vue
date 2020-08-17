<template>
    <div class="containner">
        <div  class="form-content">
            <van-radio-group v-model="radioVal" @change="changeRadio">
                <van-collapse v-model="activeNames" @change="changeCollapse">
                    <van-collapse-item 
                        v-for="(item, index) of collapseList" 
                        :key="index"
                        :name="index"
                        >
                        <template #title>
                          <div class="title-contnt">
                             <div class="info">
                                <span>{{item.name}}</span>
                                <span class="price">¥{{item.price}}</span>
                             </div>
                             <div class="radio">
                                <van-radio :name="item.radVal" icon-size="15px" @click.native.stop="handleClickRadio"/>
                            </div>
                          </div>
                        </template>
                        <!-- <template #right-icon>
                            <span>&nbsp;</span>
                        </template> -->
                        <div class="lists">
                            <div class="list"  v-for="(el, index) of item.address" :key="index"> 
                                <div class="departure">
                                    <span>{{el.departure}}</span>
                                    <span>{{el.depTime}}</span>
                                </div>
                                <div class="line">
                                    <img src="../../../images/air.png" alt="">
                                </div>
                                <div class="destination">
                                    <span>{{el.destination}}</span>
                                    <span>{{el.desTime}}</span>
                                </div>
                            </div>
                        </div>
                    </van-collapse-item>
                </van-collapse>
            </van-radio-group>
            <div style="margin: 16px;">
                <van-button round block type="info" @click="onSubmit">Select</van-button>
            </div>
        </div>
        
        <overlay :show="showOverlay"/>
    </div>
</template>

<script>
    import overlay from '@/components/overlay'

    export default {
        name: 'selectItem',
        components: { overlay },
        data() {
            return {
                showOverlay: false,
                radioVal: 1,
                activeNames: [0],
                collapseList: [
                    { 
                        name: '青岛航空',
                        price: 800,
                        radVal: 1,
                        address: [
                            { departure: '广州', destination: '青岛', depTime: '12:00', desTime: '14:00'},
                            { departure: '青岛', destination: '广州', depTime: '18:00', desTime: '20:00'}
                        ]
                    },
                    { 
                        name: '国际航空',
                        price: 1200,
                        radVal: 2,
                        address: [
                            { departure: '广州', destination: '青岛', depTime: '12:00', desTime: '14:00'},
                            { departure: '青岛', destination: '广州', depTime: '18:00', desTime: '20:00'}
                        ]
                    },
                    { 
                        name: '东方航空',
                        price: 1300,
                        radVal: 3,
                        address: [
                            { departure: '广州', destination: '青岛', depTime: '12:00', desTime: '14:00'},
                            { departure: '青岛', destination: '广州', depTime: '18:00', desTime: '20:00'}
                        ]
                    },
                    { 
                        name: '上海航空',
                        price: 1400,
                        radVal: 4,
                        address: [
                            { departure: '广州', destination: '青岛', depTime: '12:00', desTime: '14:00'},
                            { departure: '青岛', destination: '广州', depTime: '18:00', desTime: '20:00'}
                        ]
                    }
                ]
            }
        },
        methods: {
            onSubmit() {
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    this.$emit('handleSuccess', 'submitItem')
                }, 500)
            },
            onFailed(errorInfo) {
                this.$toast({
                    message: '表单填写错误！',
                    duration: 1500
                })
            },
            changeRadio(val) {
                console.log(val)
            },
            changeCollapse(val) {
                console.log(val)
            },
            handleClickRadio(val) {
                console.log(val, 555)
            }
        }
    }
</script>
<style lang='scss' scoped>
    .containner {
        margin-top: 18%;
    }
    .form-content {
        overflow: auto;
    }

    .title-contnt {
       display: flex;
       justify-content: space-between;
       align-items: center;
       .info {
            .price {
                margin-left: 20px;
                color: #f56c6c;
            }
       }
        .radio {
            margin-right: 5px;
        }
    }
    .lists {
      padding: 0 10px;
      .list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        .line {
            position: relative;
            border-top: 1px dashed #d1d1d1;
            flex:  0 0 100px;
            img {
                width: 18px;
                position: absolute;
                top: -10px;
                left: 50%;
                margin-left: -8.5px;
            }
        }
        .destination, .departure {
            flex:  0 0 100px;
            text-align: center;
            span {
                display: block;
                font-size: 14px;
                &:last-child {
                    font-size: 12px;
                }
            }
        }
      }
    }
</style>