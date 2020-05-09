<template>
  <v-app>
    <v-content>
      <consumer-home></consumer-home>
      <!-- <worker-home></worker-home> -->
    </v-content>
  </v-app>
</template>

<script>
import ConsumerHome from './layout/ConsumerHome';
// import WorkerHome from './layout/WorkerHome';

export default {
  name: 'App',

  components: {
    ConsumerHome,
    // WorkerHome
  },

  data: () => ({
    //
  }),
};
</script>
