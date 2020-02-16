<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>
    <p :mongo='ls'>
      {{ ls.length }}
    </p>
    <table>
      <tr :mongo="ls" v-for="mon in ls" v-if="mon.age < 20">
        <td :mon="mon" v-for="m in mon">
          {{ m }}
        </td>
      </tr>
    </table>
    <button @click="fasong">发送get</button>
    <button @click="fasongPost">发送post</button>

    <router-view/>
  </div>
</template>

<script>

import axios from 'axios'
import Qs from 'qs'

var data = ({"name":"xiaaaaa","age":"5"});

export default {
  name: 'app',
  data(){
    return {
      ls: '',
      mongos: '123'
    }
  },
  methods: {
    fasong() {
      axios.get('http://localhost:30003/jieshou', {
        params: {"code":"1234","name":"yyyy"}
      }).then(function(res) {
              console.log('发送get数据...')
              console.log(res)
      }).catch(err => console.log(err))
    },
    fasongPost() {
      axios.post('http://localhost:30003/post', Qs.stringify(data), {
        // 'Content-Type':'application/x-www-form-urlencoded',
        // headers: {
        //   "Access-Control-Allow-Origin": "*"
        // }
      }).then(function(res) {
              console.log('发送post数据...')
              console.log(res)
      }).catch(err => console.log(err))
    }
  },
  beforeMount() {
    let that = this
      axios.get('http://localhost:30003/mongo').then(function(res) {
          let datas = res.data
          console.log('datas: ', datas)
          that.ls = datas
          return datas
      }).catch(err => console.log(err))
  },
  
}
</script>

<style>

td {
  border: 1px solid green;

}

</style>
