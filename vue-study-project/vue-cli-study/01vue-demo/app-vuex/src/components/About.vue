<template>
<div>
    <h2>About</h2>
    <div>
        <button @click="ins(10)">+10</button>
        <button @click="ins(100)">+100</button>
        <button @click="ins(1000)">+1000</button>
        <button @click="ins(10000)">+10000</button>
        <button @click="ins(100000)">+100000</button>
        <div>
            加数：<input v-model="count">

            获取count：{{ getCountC }}
        </div>
    </div>
    <div>
        <!-- <p>{{ $store.getters.getThanAge(10) }}</p>
        <p>{{ $store.getters.getThanAge(20) }}</p>
        <p>{{ $store.getters.getThanAge(30) }}</p>
        <p>{{ $store.getters.getThanAge(40) }}</p>
        <p>{{ $store.getters.getThanAge(50) }}</p> -->
        
        <input v-model="personAge">
        <p>
            {{ getThanAge }}
        </p>
    </div>
        
</div>
</template>

<script>
import {GETCOUNT, CHANGECOUNT, GETTHANAGE} from '../store/mutation-type'

export default {
    name: 'About',
    data() {
        return {
            personAge: 0,
            count: 0
        }
    },
    computed: {
        getCountC() {
            this.getCount()
            return this.$store.state.count
        },
        getThanAge(){
            return this.$store.getters.getThanAge(this.personAge)
        }
    },
    methods: {
        getCount(){
            this.$store.commit(CHANGECOUNT, Number(this.count))
        },
        ins(num) {
            this.$store.commit(CHANGECOUNT, {
                state: '提交',
                num
            })
        }
    },
}
</script>
