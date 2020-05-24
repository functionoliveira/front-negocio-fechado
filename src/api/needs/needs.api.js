export default class NeedsAPI {
    constructor(instance) {
        this.instance = instance;
    }

    list() {
        const call = this.instance.get('/necessidade/');
        return call;
    }

    listTenders(id) {
        const call = this.instance.get(`/necessidade/${id}/propostas/`);
        return call;
    }

    get(id) {
        const call = this.instance.get(`/necessidade/${id}`);
        return call;
    }

    post(body) {
        const call = this.instance.post('/necessidade/', body, {headers: {'Content-Type' : 'multipart/form-data'}});
        return call;
    }

    put(id, body) {
        const call = this.instance.put(`/necessidade/${id}`, body);
        return call;
    }

    delete(id) {
        const call = this.instance.delete(`/necessidade/${id}`);
        return call;
    }
}