<template>
  <v-container>
    <h1>Propostas</h1>

    <v-row>
      <tender-card
        v-for="i in 6"
        :key="i"
      ></tender-card>
    </v-row>
  </v-container>
</template>

<script>
import TenderCard from '../components/TenderCard';

export default {
  name: 'App',

  components: {
    TenderCard
  },
};
</script>
