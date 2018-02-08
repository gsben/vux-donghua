import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


//vuex
const state = {
   items:[],
   mg:'1',
   flag:'2' 
}

const getters = {
   mg(state){
      return state.mg;
   }
}

const mutations = {
   increment(state,list){
        state.mg = list;
     },
   
   add(state,dat){
        state.flag = dat;
   }
}

const actions = {

}

/*export default new Vuex.Store({
   state,
   mutations
})*/

const store = new Vuex.Store({
   state,
   getters,
   mutations,
   actions
})

export default store

// export default {store}



