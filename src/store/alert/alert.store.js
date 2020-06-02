const state = {
    success: {
        show: false,
        message: ''
    },
    error: {
        show: false,
        code: '',
        title: '',
        message: ''
    }
}

// getters
const getters = {
    // Getters de Sucesso 
    getSuccessShow: state => state.success.show,
    getSuccessMessage: state => state.success.message,
    // Getters de Erro
    getErrorShow: state => state.error.show,
    getErrorCode: state => state.error.code,
    getErrorTitle: state => state.error.title,
    getErrorMessage: state => state.error.message,
}

// actions
const actions = {
    // Actions de Sucesso
    showSuccessMessage(context, message) {
        context.commit('showSuccessMessage', message);
    },
    closeSuccessMessage(context) {
        context.commit('closeSuccessMessage');
    },
    // Actions de Erro
    showErrorMessage(context, error) {
        console.log(error)
        context.commit('showErrorMessage', error);
    },
    closeErrorMessage(context) {
        context.commit('closeErrorMessage');
    },
}

// mutations
const mutations = {
    // Mutations de Sucesso
    showSuccessMessage(state, message) {
        state.success.message = message;
        state.success.show = true;
    },
	closeSuccessMessage(state) {
        state.success.show = false;
        state.success.message = '';
    },
    // Mutations de Erro
    showErrorMessage(state, { code, title, description }) {
        state.error.code = code;
        state.error.title = title;
        state.error.message = description;
        state.error.show = true;
    },
	closeErrorMessage(state) {
        state.error.show = false;
        state.error.message = '';
    },
}

export default {
	state,
	getters,
	actions,
	mutations
}
