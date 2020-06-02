<template>
  <div>
    <success-alert></success-alert>
    <error-alert></error-alert>
    <form-login v-show="!logged && !register" @on-login="login($event)" @register="register=true"></form-login>
    <form-register v-show="register" @back="register=false"></form-register>
    <consumer-home v-show="logged && $store.getters.isConsumer"></consumer-home>
    <worker-home v-show="logged && $store.getters.isWorker"></worker-home>
  </div>
</template>

<script>
import SuccessAlert from 'Components/alert/SuccessAlert';
import ErrorAlert from 'Components/alert/ErrorAlert';
import FormLogin from 'Components/form/FormLogin';
import FormRegister from 'Components/form/FormRegister';
import ConsumerHome from 'Layout/ConsumerHome';
import WorkerHome from 'Layout/WorkerHome';

export default {
  name: 'auth',
  components: {
    FormLogin,
    FormRegister,
    ConsumerHome,
    WorkerHome,
    SuccessAlert,
    ErrorAlert
  },
  data: () => ({
    logged: false,
    register: false,
    loading: false
  }),
  mounted() {
    this.$store
      .dispatch('loadToken')
      .then(response => {
        if(response.ok) {
          this.logged = true;
        }
      });
  },
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
