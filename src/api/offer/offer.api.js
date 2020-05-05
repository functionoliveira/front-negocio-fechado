export default class OfferAPI {
    constructor(instance) {
        this.instance = instance;
    }

    list() {
        const call = this.instance.get('/oferta/');
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

    delete(id) {
        const call = this.instance.delete(`/oferta/${id}`);
        return call;
    }
}