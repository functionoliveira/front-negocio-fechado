<template>
  <v-app>
    <v-content>
      <auth></auth>
    </v-content>
  </v-app>
</template>

<script>
import Auth from './pages/Auth';

export default {
  name: 'App',

  components: {
    Auth,
  },

  data: () => ({ }),
};
</script>
