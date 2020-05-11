export default class AuthAPI {
    constructor(instance) {
        this.instance = instance;
    }

    credentials(user) {
        const call = this.instance.post('/auth/credentials/', user);
        return call;
    }
}