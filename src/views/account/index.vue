<template>
    <div class="containner">
        <div class="dialogue-content">
            <p>Mr. MO, welcome!</p>
            <p>Client ID:  x12321</p>
        </div>
        <div class="tip-wrap">
            <p>由于用户钱包是去中心化的，这里的明细只是显示用户交的押金的数额。</p>
        </div>
          

        <div  class="form-content">
            <h3 class="title">我的账户</h3>
             <div class="row">
                <div class="link" @click="handleAccount">从区块链获取个人账户明细</div>
                <van-field
                    class="textarea"
                    v-model="accountMsg"
                    rows="3"
                    autosize
                    label=""
                    type="textarea"
                    placeholder="这里会显示账户有多少CDEP"
                />
            </div>

            <div class="row">
                 <div class="tip">选择合约号，可以从区块链上提取交易信息。</div>
                  <van-field 
                    readonly
                    class="field"
                    v-model="userId" 
                    placeholder="请选择"
                    label="合约号"
                    right-icon="arrow-down"
                    @click="handleClickField"/>
                  <van-button block size="small" type="primary" @click="handleExtract">提取</van-button>
            </div>

            <div class="row">
                <van-field
                    class="textarea"
                    v-model="tradeMsg"
                    rows="3"
                    autosize
                    label=""
                    type="textarea"
                    placeholder="这里会显示交易信息"
                    
                />
                  <!-- <van-button block size="small" type="primary" @click="handleCochain">上链</van-button> -->
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
        name: 'account',
        components: { overlay },
        data() {
            return {
                showPicker: false,
                showOverlay: false,
                userId: '',
                accountMsg: '',
                tradeMsg: '',
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
                this.userId = val
                this.showPicker = false
            },
            handleAccount() {
                this.showOverlay = true
                setTimeout(_ => {
                    this.showOverlay = false
                     this.$toast('获取成功！');
                     this.accountMsg = `transaction hash  call0x13a08ddcd940b8602f147ff228f4c08720456aa30xf3e6d766b3dbb2da5dcc3ccd3acb1ce3868fbc350xa035b1fe
 from  0x13a08ddcd940b8602f147ff228f4c08720456aa3
 to  account.price() 0xf3e6d766b3dbb2da5dcc3ccd3acb1ce3868fbc35
 hash  call0x13a08ddcd940b8602f147ff228f4c08720456aa30xf3e6d766b3dbb2da5dcc3ccd3acb1ce3868fbc350xa035b1fe
 input  0xa03...5b1fe
 decoded input  {}
 decoded output  {
 "0": "uint256: 1000000000000000000"
}
 logs  []
                     `
                }, 300)
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
                     this.tradeMsg = `transaction hash  call0x13a08ddcd940b8602f147ff228f4c08720456aa30xc7a36398395e393236fd506afb9df9f16f235cef0x474da79a0000000000000000000000000000000000000000000000000000000000002711
 from  0x13a08ddcd940b8602f147ff228f4c08720456aa3
 to  Escrow.contracts(uint256) 0xc7a36398395e393236fd506afb9df9f16f235cef
 hash  call0x13a08ddcd940b8602f147ff228f4c08720456aa30xc7a36398395e393236fd506afb9df9f16f235cef0x474da79a0000000000000000000000000000000000000000000000000000000000002711
 input  0x474...02711
 decoded input  {
 "uint256 ": "10001"
}
 decoded output  {
 "0": "uint256: value 1000000000000000000",
 "1": "address: seller 0xd7d90BBB0Fe833d482315c97bE4E527B550Fb37B",
 "2": "address: buyer 0x13A08dDcD940b8602f147FF228f4c08720456aA3",
 "3": "uint8: state 2"
}
 logs  []
                     `
                }, 300)
            }
        }
    }
</script>
<style lang='scss' scoped>

    .containner {
    }
    .tip-wrap {
        font-size: 14px;
        padding-left: 18px;
        width: 90%;
    }
    .form-content {
        margin-top: 4%;
        padding-bottom: 5px;
        .title {
            font-size: 18px;
            padding: 5px 0;
            // height: 38px;
            // line-height: 38px;
            font-weight: 600;
            text-align: center;
            // margin-bottom: 5px;
        }
        .row {
            padding: 0 15px;
            margin-bottom: 8px;
            .link {
                display: inline-block;
                font-size: 14px;
                cursor: pointer;
                color: #1989fa;
                border-bottom: 1px solid #1989fa;
                margin-bottom: 8px;
            }
            .tip {
                font-size: 14px;
                line-height: 32px;
                color: #999;
            }
            .field, .textarea {
                margin-bottom: 8px;
                border: 1px solid #ccc;
                border-radius: 3px;
            }
            .textarea {
                padding: 5px 8px;
                height: 110px;
                overflow-y: auto;
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