<template>
    <div class="containner">
        <div class="dialogue-content">
            <p>Mr. MO, welcome!</p>
            <p>Client ID: x12321</p>
        </div>
        <div  class="form-content">
            <h3 class="title">选择合约</h3>
            <div class="main-content">
                <van-field 
                class="field"
                v-model="userId" 
                placeholder="请选择"
                readonly
                label="合约号"
                right-icon="arrow-down"
                @click="handleClickField"/>

                <div class="flightInfo clear">
                    <span class="left">航班信息：</span>
                    <div class="lists left" >
                        <div class="list" v-for="(el, index) of items.address" :key="index"> 
                            <div class="departure">
                                <span>{{el.departure}}</span>
                                <span>{{el.depTime}}</span>
                            </div>
                            <div class="line">
                                <img src="../../images/air.png" alt="">
                            </div>
                            <div class="destination">
                                <span>{{el.destination}}</span>
                                <span>{{el.desTime}}</span>
                            </div>
                        </div>
                    </div>
                </div>

               <div class="content" v-for="(el, index) of items.flightInfo" :key="index">
                    <div class="row"> 航空公司：{{items.name}}</div>
                    <div class="row level">用户评级：<span @click="showDialog(el)">{{items.level}}</span></div>
                    <div class="row">用户ID：{{el.userId}}</div>
                    <div class="row">用户销售单数：{{items.ticket}}</div>
                    <div class="row">最高客单价：{{items.price}}</div>
                    <div class="btn-wrap">
                        <van-button block round size="small" type="primary" @click="onSubmit">Accept</van-button>
                    </div>
               </div>
            </div>
        </div>
        <van-dialog v-model="visible" :showConfirmButton="false">
            <div class="dialog-content">
                <van-icon name="cross" class="cross" @click="closeDiolog"/>
                <div class="body-content">
                    <p><span>Client ID: </span>{{dialogContent.userId}}</p>
                    <p><span>乘客评级: </span>{{dialogContent.level}}</p>
                    <p class="clear">
                        <span class="left">评语: </span>
                        <span class="remark left">{{items.remark }}</span>
                    </p>
            
                </div>
            </div>
        </van-dialog>

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
    import json from './json'

    export default {
        name: 'contract',
        components: { overlay },
        data() {
            return {
                visible: false,
                showPicker: false,
                showOverlay: false,
                // clientId: 'x12321',
                columns: [],
                lists: json,
                items: json[0],
                userId: json[0].id,
                defaultIndex: 0,
                dialogContent: {}
            }
        },
        mounted() {
            this.columns = []
            this.lists.forEach(item => {
                this.columns = [...this.columns, item.id]
            })
            console.log('items', this.items)
            // this.defaultIndex = this.columns.length &&  this.columns.length - 1
        },
        methods: {
            onSubmit() {
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    this.$router.push({ path: '/person' })
                }, 500)
            },
            onFailed(errorInfo) {
                this.$toast({
                    message: '表单填写错误！',
                    duration: 1500
                })
            },
            showDialog(item) {
                this.dialogContent = item
                this.visible = true
                console.log(item, 56)
            },
           closeDiolog() {
               this.visible = false
            },
            handleClickField() {
                this.showPicker = true
            },
            onConfirmPicker(val) {
                this.userId = val
                this.lists.forEach(item => {
                    if(item.id === val) {
                        this.items = item
                    }
                })
                this.showPicker = false
                console.log(this.items)
            }
        }
    }
</script>
<style lang='scss' scoped>
    .form-content {
        margin: 15px auto;
        padding-bottom: 15px;
        background: #f5f5f5;
        .title {
            font-size: 18px;
            height: 38px;
            line-height: 38px;
            font-weight: 600;
            text-align: center;
        }
        .field {
            margin-bottom: 15px;
        }
        .main-content {
            margin-top: 5px;
            padding: 0 15px;
            font-size: 14px;
            line-height: 28px;
            .flightInfo {
                background: #fff;
                margin-bottom: 5px;
                padding: 5px 10px;
                .lists {
                    width: 200px;
                    .list {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 5px;
                        .line {
                            position: relative;
                            border-top: 1px dashed #d1d1d1;
                            flex:  0 0 60px;
                            img {
                                width: 15px;
                                position: absolute;
                                top: -8px;
                                left: 50%;
                                margin-left: -8px;
                            }
                        }
                        .destination, .departure {
                            // flex:  0 0 50px;
                            text-align: center;
                            span {
                                // display: block;
                                font-size: 14px;
                                &:last-child {
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
            }
            .content {
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                background: #fff;
                margin-bottom: 10px;
                padding: 10px;
                border-radius: 6px;
                .row {
                    // margin-bottom: 4px;
                }
                .level {
                    span {
                        color: #1989fa;
                        border-bottom: 1px solid #1989fa;
                    }
                }
            }
        }
        .btn-wrap {
            margin: 10px auto 0;
        }
    }
    .dialog-content {
        position: relative;
        padding: 15px;
        .cross {
            position: absolute;
            right: 2px;
            top: 0px;
            font-size: 20px;
            padding: 4px;
            cursor: pointer;
        }
        .body-content {
            font-size: 16px;
            line-height: 28px;
            p {
                span {
                    margin-right: 5px;
                }
                .remark {
                  width: 255px;
                }
            }
            
        }
    }
</style>