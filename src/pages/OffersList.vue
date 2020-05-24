<template>
  <v-container>
    <h1>O que você está procurando ?</h1>

    <v-row>
      <offer-card
        v-for="offer in listOffers.results"
        :key="offer.id"
        :id="offer.id"
        :title="offer.title"
        :description="offer.description"
        :price="offer.price"
        :worker="offer.worker"
        :files="offer.files"
      ></offer-card>
    </v-row>
  </v-container>
</template>

<script>
import OfferCard from '../components/OfferCard';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    OfferCard
  },
  data() {
    return { 
      count: null,
      next: null,
      previous: null,
      results: []
    }
  },
  mounted() {
    this.loadData();
  },
  computed: {
    ...mapGetters([
      'listOffers',
    ])
  },
  methods: {
    ...mapActions({
      loadData: 'loadOffers'
    })
  }
};
</script>
