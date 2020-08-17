<template>
    <div class="containner">
        <div class="dialogue-content" v-if="current!== 'tranItem'">
            <p>Mr. MO, welcome!</p>
            <p>Client ID: x12221</p>
        </div>
        <div class="dialogue-content" v-else>
            <p>TD Link 客服 x00001 号, welcome! </p>
        </div>

        <task-item @handleSuccess="handleSuccess" v-if="current === 'taskItem'"/>
        <contract-item  @handleSuccess="handleSuccess" v-if="current === 'contractItem'"/>
        <tran-item  @handleSuccess="handleSuccess" v-if="current === 'tranItem'"/>
        
    </div>
</template>

<script>
    import taskItem from './components/task-item'
    import contractItem from './components/contract-item'
    import tranItem from './components/tran-item'

    export default {
        name: 'person',
        components: {
            taskItem,
            contractItem,
            tranItem
        },
        data() {
            return {
                current: 'taskItem'
            }
        },
        methods: {
            handleSuccess(val) {
                this.current = val
            }
        }
    }
</script>
<style lang='scss' scoped>
     .containner {

    }
</style>