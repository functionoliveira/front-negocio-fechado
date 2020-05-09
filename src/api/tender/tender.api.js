export default class TenderAPI {
    constructor(instance) {
        this.instance = instance;
    }

    list() {
        const call = this.instance.get('/proposta/');
        return call;
    }

    get(id) {
        const call = this.instance.get(`/proposta/${id}`);
        return call;
    }

    post(body) {
        const call = this.instance.post('/proposta/', body);
        return call;
    }

    put(id, body) {
        const call = this.instance.put(`/proposta/${id}`, body);
        return call;
    }

    delete(id) {
        const call = this.instance.delete(`/proposta/${id}`);
        return call;
    }
}