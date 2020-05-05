<template>
  <v-container>
    <h1>Minhas necessidades.</h1>

    <v-row>
      <my-needs-card
        v-for="i in 6"
        :key="i"
      ></my-needs-card>
    </v-row>
  </v-container>
</template>

<script>
import MyNeedsCard from '../components/MyNeedsCard';

export default {
  name: 'App',
  components: {
    MyNeedsCard
  },
};
</script>
