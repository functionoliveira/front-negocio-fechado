export default class ContractAPI {
    constructor(instance) {
        this.instance = instance;
    }

    list() {
        const call = this.instance.get('/contrato/');
        return call;
    }

    get(id) {
        const call = this.instance.get(`/contrato/${id}/`);
        return call;
    }

    post(body) {
        const call = this.instance.post('/contrato/', body);
        return call;
    }

    put(id, body) {
        const call = this.instance.put(`/contrato/${id}/`, body);
        return call;
    }

    contractorAccept(contractID, userID) {
        const call = this.instance.put(`/contrato/${contractID}/contratante/${userID}/aceitar/`);
        return call;
    }

    hiredAccept(contractID, userID) {
        const call = this.instance.put(`/contrato/${contractID}/contratado/${userID}/aceitar/`);
        return call;
    }

    delete(id) {
        const call = this.instance.delete(`/contrato/${id}/`);
        return call;
    }
}