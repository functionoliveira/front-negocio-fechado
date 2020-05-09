import Vue from 'vue'
import Vuex from 'vuex'

// modules
import Auth from './auth/auth.storage';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        Auth
    }
})