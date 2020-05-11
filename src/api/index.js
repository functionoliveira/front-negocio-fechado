import axios from 'axios';
import OfferAPI from './offer/offer.api';
import NeedsAPI from './needs/needs.api';
import TenderAPI from './tender/tender.api';
import UserAPI from './user/user.api';
import AuthAPI from './auth/auth.api';

const instanceNegocioFechadoAPI = axios.create({
    baseURL: 'http://localhost:9000',
    headers: { 
        'Content-Type' : 'application/json',
    }
});

const instanceOfferAPI = new OfferAPI(instanceNegocioFechadoAPI);
const instanceNeedsAPI = new NeedsAPI(instanceNegocioFechadoAPI);
const instanceTenderAPI = new TenderAPI(instanceNegocioFechadoAPI);
const instanceUserAPI = new UserAPI(instanceNegocioFechadoAPI);
const instanceAuthAPI = new AuthAPI(instanceNegocioFechadoAPI);

export {
    instanceOfferAPI,
    instanceNeedsAPI,
    instanceTenderAPI,
    instanceUserAPI,
    instanceAuthAPI
};