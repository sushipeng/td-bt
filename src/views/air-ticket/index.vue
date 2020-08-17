<template>
    <div class="containner">
        <div class="dialogue-content">
            <p>Mr. Traveler, welcome to TD Link traveler community!</p>
            <p>Client ID: x12221</p>
        </div>

        <search-item @handleSuccess="handleSuccess" v-if="current === 'searchItem'"/>
        <select-item  @handleSuccess="handleSuccess" v-if="current === 'selectItem'"/>
        <submit-item  @handleSuccess="handleSuccess" v-if="current === 'submitItem'"/>
        <pay-item  @handleSuccess="handleSuccess" v-if="current === 'payItem'"/>

    </div>
</template>

<script>
    import searchItem from './components/search-item'
    import selectItem from './components/select-item'
    import submitItem from './components/submit-item'
    import payItem from './components/pay-item'

    export default {
        name: 'airTicket',
        components: {
            searchItem,
            selectItem,
            submitItem,
            payItem
        },
        data() {
            return {
                current: 'searchItem'
            }
        },
        methods: {
            handleSuccess(val) {
                this.current = val
            }
        }
    }
</script>
<style lang='scss'>

</style>