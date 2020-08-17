<template>
    <div class="containner">
        <div  class="form-content">
            <h3 class="title">我的任务</h3>
            <div class="msg-centent">
                请在机票购买完成，且确认航空公司出票后，请上传电子机票作为购买证明，完成合同如果无法履行合约可以按无法完成。10%的手续费会被扣除。
            </div>
            <div class="info-wrap">
                <div class="list">航空公司：青岛航空</div>
                <div class="list flightInfo clear">
                    <span class="left">航班信息：</span>
                    <div class="lists left" >
                        <div class="list" v-for="(el, index) of address" :key="index"> 
                            <div class="departure">
                                <span>广州</span>
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
                </div>
                <div class="list">合约单价： 560</div>
                <div class="list">
                    上传机票购买证明： 
                    <van-uploader v-model="fileList" multiple :after-read="afterRead"/>
                    <!-- <van-uploader>
                        <van-button size="small" icon="plus" plain type="info">上传</van-button>
                    </van-uploader> -->
                     <!-- <van-field 
                        class="field"
                        v-model="discountVal" 
                        placeholder="上传机票购买证明"
                        readonly  
                        right-icon="arrow-down"
                        @click="handleClickField"/> -->
                </div>
                <div class="btn-wrap">
                    <van-button round size="small" type="danger" @click="onSubmit">无法完成</van-button>
                    <van-button round size="small" type="primary" @click="onSubmit">完 成</van-button>
                </div>
            </div>
            
        </div>
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
                showOverlay: false,
                 fileList: [
                    // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
                    // Uploader 根据文件后缀来判断是否为图片文件
                    // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                    // { url: 'https://cloud-image', isImage: true },
                ],
                address: [
                    { departure: '广州', destination: '青岛', depTime: '12:00', desTime: '14:00'},
                    { departure: '青岛', destination: '广州', depTime: '18:00', desTime: '20:00'}
                ]
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
            afterRead(file) {
                file.status = 'uploading';
                file.message = '上传中...';
                setTimeout(() => {
                    // file.status = 'failed'
                    file.status = 'success'
                    file.message = ''
                }, 400);
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
        background: #f5f5f5;
        .title {
            font-size: 18px;
            height: 38px;
            line-height: 38px;
            font-weight: 600;
            text-align: center;
        }
        .msg-centent {
            margin-top: 15px;
            padding: 8px 15px;
            font-size: 16px;
            line-height: 24px;
            background: #fff;
            width: 320px;
            margin: 0 auto 10px;
            border-radius: 6px;
        }
        .info-wrap {
            width: 320px;
            font-size: 16px;
            margin: 0 auto;
            padding: 5px 10px;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            background: #fff;
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 6px;
            .list {
                line-height: 28px;
                &:nth-child(4) {
                    margin-top: 15px;
                }
            }
            .flightInfo {
                background: #fff;
                margin-bottom: 5px;
                // padding: 5px 10px;
                .lists {
                    width: 210px;
                    // background: #000;
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
                                    // font-size: 12px;
                                }
                            }
                        }
                    }
                }
            }
            .field {
                width: 200px;
                margin:  0 auto;
                border: 1px solid #ccc;
                border-radius: 3px;
                line-height: 14px;
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