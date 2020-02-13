import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {GETCOUNT, CHANGECOUNT, GETTHANAGE} from '../store/mutation-type'


Vue.use(Vuex)



const store = new Vuex.Store({
    state: {
        count: 200,
        person: [
            {id: 1, name: 'aig', age: 12},
            {id: 2, name: 'ls', age: 21},
            {id: 3, name: 'ioiy', age: 43},
            {id: 4, name: 'gia', age: 34},
            {id: 5, name: 'yyu', age: 59}
        ],
    },
    getters: {
        getCount(state) {
            return state.count
        },
        getThanAge(state) {
            return function (age) { 
                console.log("ss", state.person)
                
                return state.person.filter(function(person) {
                    return person.age > age
                })
            }
        },
    },
    mutations: {
        [CHANGECOUNT](state, num) {
            if (typeof num === 'object') {
                state.count += num.num
                return;
            }
            state.count += num
        },
        
    },
    actions: {

    }
})

export default store