<template>
  <div>
    <form-login v-show="!logged" @on-login="login($event)"></form-login>
    <consumer-home v-show="logged && $store.getters.isConsumer"></consumer-home>
    <worker-home v-show="logged && $store.getters.isWorker"></worker-home>
  </div>
</template>

<script>
import FormLogin from '../components/form/FormLogin';
import ConsumerHome from '../layout/ConsumerHome';
import WorkerHome from '../layout/WorkerHome';

export default {
  name: 'auth',

  components: {
    FormLogin,
    ConsumerHome,
    WorkerHome
  },

  data: () => ({
    logged: false,
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
