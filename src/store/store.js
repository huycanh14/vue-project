import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'
import menu from '../modules/menu'
import orders from '../modules/orders'
import users from '../modules/users'

Vue.use(Vuex);

export const store = new Vuex.Store({
    /*state: {},
    getters,
    mutations,*/
    /* actions: {
        Option 1: setUser(context, user) {
            context.commit('userStatus', user);
            
        },
        //Option 2
    }*/
    //actions
    modules: {
        menu,
        orders,
        users
    }
})