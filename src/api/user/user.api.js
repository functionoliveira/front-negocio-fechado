export default class UserAPI {
    constructor(instance) {
        this.instance = instance;
    }

    list() {
        const call = this.instance.get('/usuario/');
        return call;
    }

    listNeeds(id) {
        const call = this.instance.get(`/usuario/${id}/necessidades/`);
        return call;
    }

    listOffers(id) {
        const call = this.instance.get(`/usuario/${id}/ofertas/`);
        return call;
    }

    listContracts(id) {
        const call = this.instance.get(`/usuario/${id}/contratos/`);
        return call;
    }

    listTenders(id) {
        const call = this.instance.get(`/usuario/${id}/propostas/`);
        return call;
    }

    get(id) {
        const call = this.instance.get(`/usuario/${id}/`);
        return call;
    }

    post(body) {
        const call = this.instance.post('/usuario/', body);
        return call;
    }

    put(id, body) {
        const call = this.instance.put(`/usuario/${id}/`, body);
        return call;
    }

    delete(id) {
        const call = this.instance.delete(`/usuario/${id}/`);
        return call;
    }
}