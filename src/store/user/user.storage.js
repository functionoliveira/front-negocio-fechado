/**
 * Auth Module
 */
const state = {
    _id: 1,
    _email: '',
    _fullName: '',
    _photo: '',
    _birthDate: '',
    _address: '',
    _cpf: '',
    _type: 'CONSUMER'
}

// getters
const getters = { 
    getUser: state => {
        return {
            id: state.user._id,
            full_name: state.user._fullName,
            cpf: state.user._cpf,
            type: state.user._type
        };
    },
    getUserId: state => {
        return state.user._id;
    },
    getUserName: state => {
        return state.user._fullName;
    },
    getUserPhoto: state => {
        return state.user._photo;
    },
    isWorker: state => {
        return state.user._type === 'WORKER';
    },
    isConsumer: state => {
        return state.user._type === 'CONSUMER';
    }
}

// actions
const actions = {   
    
}

// mutations
const mutations = {
    saveUser(state, user) {
        state.user._id = user.user_id;
        state.user._email = user.email;
        state.user._fullName = user.full_name;
        state.user._birthDate = user.birth_date;
        state.user._photo = user.photo;
        state.user._cpf = user.cpf;
        state.user._address = user.address;
        state.user._type = user.type;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
