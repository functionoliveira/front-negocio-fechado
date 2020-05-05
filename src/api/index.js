import axios from 'axios';
import OfferAPI from './offer/offer.api';

const instanceNegocioFechadoAPI = axios.create({
    baseURL: 'http://localhost:9000',
    headers: { 
        'Content-Type' : 'application/json',
    }
});

const instanceOfferAPI = new OfferAPI(instanceNegocioFechadoAPI);

export {
    instanceOfferAPI
};