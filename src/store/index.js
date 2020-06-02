import Vue from 'vue'
import Vuex from 'vuex'

// modules
import Auth from './auth/auth.storage';
import Offer from './offer/offer.store';
import Needs from './needs/needs.store';
import Tender from './tender/tender.store';
import Alert from './alert/alert.store';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        Auth,
        Offer,
        Needs,
        Tender,
        Alert
    }
})