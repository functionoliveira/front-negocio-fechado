<template>
  <div>
    <form-login v-show="!logged && !register" @on-login="login($event)" @register="register=true"></form-login>
    <form-register v-show="register" @back="register=false"></form-register>
    <consumer-home v-show="logged && $store.getters.isConsumer"></consumer-home>
    <worker-home v-show="logged && $store.getters.isWorker"></worker-home>
  </div>
</template>

<script>
import FormLogin from '../components/form/FormLogin';
import FormRegister from '../components/form/FormRegister';
import ConsumerHome from '../layout/ConsumerHome';
import WorkerHome from '../layout/WorkerHome';

export default {
  name: 'auth',

  components: {
    FormLogin,
    FormRegister,
    ConsumerHome,
    WorkerHome
  },

  data: () => ({
    logged: false,
    register: false,
    loading: false
  }),
  methods: {
    login(user) {
      this.$store
        .dispatch('login', user)
        .then(response => {
          if(response.ok) {
            this.logged = true;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
