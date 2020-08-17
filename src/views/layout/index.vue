<template>
    <div class="app-containner">
        <div class='tabbed'>
			 <ul>
                <li  v-for="(item, index) of activeList" :key="index" :class="{'active': item.value === active}" @click="handleClick(item)">
                   {{item.label}}
                </li>
			</ul>
		</div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data() {
            return {
                active: 'airTicket',
                activeList: [
                    {value: 'airTicket', label: '机票', link: 'air-ticket'},
                    {value: 'task', label: '任务', link: 'task'},
                    {value: 'contract', label: '合约', link: 'contract'},
                    {value: 'person', label: '个人', link: 'person'},
                    {value: 'account', label: '账户', link: 'account'}
                ]
            }
        },
        watch: {
            '$route': {
                immediate: true,
                handler(to, from) { 
                    this.active = to.name
                }
            }
        },
        methods: {
            handleClick(item) {
                // this.active = item.value
                if (item.link !== this.$route.name) {
                    this.$router.push({ path: `/${item.link}` })
                }
               
            }
        }
    }
</script>
<style lang='scss' scoped>
    .app-containner {
       width: 100vw;
       height: 100vh;
       overflow-y: auto;
    }
    .tabbed {
        padding: 0 15px;
        border-bottom: 2px solid #fff;
    } 
    .tabbed ul {
        display: flex;
        margin: 0px;
        padding: 0px;
        list-style-type: none;
    }

    .tabbed ul li {
        width: 100px;
        height: 35px;
        line-height: 35px;
        margin-right: 6px;
        text-align: center;
        background-color: #FFF;
        position: relative;
        cursor: pointer;
        color: #000;
        font-size: 16px;
        &:last-child {
            margin-right: 0;
        }
    }

    .tabbed ul li:before {
        display: block;
        content: "";
        position: absolute;
        top: 0;
        right: -8px;
        width: 0;
        height: 0;
        border-width: 0 8px 35px;
        border-style: solid;
        border-color: transparent transparent #fff;
    }
    .tabbed ul li.active {
        background-color: #333;
        color: #fff;
        z-index: 3;
    }
    .tabbed ul li.active:before {
         border-color: transparent transparent #333;
    }
</style>
<style>
    .dialogue-content {
        padding: 10px 15px;
        font-size: 16px;
        color: #fff;
    }
    .dialogue-content p {
        margin-bottom: 10px;
    }
    .form-content {
        padding: 5px 0;
        width: 340px;
        height: auto;
        margin: 0 auto;
        background: #fff;
        box-shadow: 5px 5px 20px 20px rgba(170, 147, 147, 0.3);
        border-radius: 6px;
    }
</style>
