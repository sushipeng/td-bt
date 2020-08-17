<template>
    <div class="containner">
        <div class="dialogue-content">
            <p>Mr. MO, welcome!</p>
            <p>Client ID: {{clientId}}</p>
        </div>
        <div  class="form-content">
            <h3 class="title">选择任务</h3>
            <div class="main-content">
               <div class="content" v-for="(item, index) of lists" :key="index">
                    <div class="row"> 航空公司：{{item.name}}</div>
                    <div class="row flightInfo clear">
                        <span class="left">航空信息：</span>
                            <div class="lists left" >
                                <div class="list"  v-for="(el, index) of item.address" :key="index"> 
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
                    <div class="row level">乘客评级：<span @click="showDialog(item)">{{item.level}}</span></div>
                    <div class="row">乘客购票单数：{{item.ticket}}</div>
                    <div class="row">最高客单价：{{item.price}}</div>
                    <div class="row">里程数需要的：{{item.distance}}</div>
                    <div class="row">状态：{{item.state}}</div>
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
                    <p><span>用户 ID: </span>{{dialogContent.clientId}}</p>
                    <p><span>乘客评级: </span>{{dialogContent.level}}</p>
                    <p class="clear">
                        <span class="left">评语: </span>
                        <span class="remark left">{{dialogContent.remark }}</span>
                    </p>
            
                </div>
            </div>
        </van-dialog>
        <overlay :show="showOverlay"/>
    </div>
</template>

<script>
    import overlay from '@/components/overlay'
    import json from './json'

    export default {
        name: 'task',
        components: { overlay },
        data() {
            return {
                visible: false,
                showOverlay: false,
                clientId: 'x12321',
                lists: json,
                dialogContent: {}
            }
        },
        methods: {
            onSubmit() {
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                    this.$router.push({ path: '/contract' })
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
            },
           closeDiolog() {
               this.visible = false
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
        .main-content {
            margin-top: 5px;
            padding: 0 15px;
            font-size: 14px;
            line-height: 28px;
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
                .flightInfo {
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