<template>
  <v-container>
    <h1>O que as pessoas precisam.</h1>

    <v-row>
      <needs-card
        v-for="i in 6"
        :key="i"
      ></needs-card>
    </v-row>
  </v-container>
</template>

<script>
import NeedsCard from '../components/NeedsCard';

export default {
  name: 'App',
  components: {
    NeedsCard
  },
};
</script>
