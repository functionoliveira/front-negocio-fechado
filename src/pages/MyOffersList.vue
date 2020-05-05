<template>
  <v-container>
    <h1>Minhas Ofertas</h1>

    <v-row>
      <my-offer-card
        v-for="i in 6"
        :key="i"
      ></my-offer-card>
    </v-row>
  </v-container>
</template>

<script>
import MyOfferCard from '../components/MyOfferCard';

export default {
  name: 'App',

  components: {
    MyOfferCard
  },
};
</script>
