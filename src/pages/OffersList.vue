<template>
  <v-container>
    <h1>O que você está procurando ?</h1>

    <v-row>
      <offer-card
        v-for="i in 6"
        :key="i"
      ></offer-card>
    </v-row>
  </v-container>
</template>

<script>
import OfferCard from '../components/OfferCard';

export default {
  name: 'App',

  components: {
    OfferCard
  },
};
</script>
