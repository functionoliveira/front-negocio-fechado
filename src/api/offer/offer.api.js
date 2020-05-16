export default class OfferAPI {
    constructor(instance) {
        this.instance = instance;
    }

    list() {
        const call = this.instance.get('/oferta/');
        return call;
    }

    listOffers(id) {
        const call = this.instance.get(`/oferta/${id}/propostas/`);
        return call;
    }

    get(id) {
        const call = this.instance.get(`/oferta/${id}`);
        return call;
    }

    post(body) {
        const call = this.instance.post('/oferta/', body);
        return call;
    }

    put(id, body) {
        const call = this.instance.put(`/oferta/${id}`, body);
        return call;
    }

    acceptTender(offer_id, tender_id) {
        const call = this.instance.put(`/oferta/${offer_id}/proposta/${tender_id}/aceitar/`);
        return call; 
    }

    delete(id) {
        const call = this.instance.delete(`/oferta/${id}`);
        return call;
    }
}