<template>
  <v-container>
    <h1>O que você está procurando ?</h1>

    <v-row>
      <offer-card
        v-for="item in results"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :worker="item.worker"
      ></offer-card>
    </v-row>
  </v-container>
</template>

<script>
import OfferCard from '../components/OfferCard';
import { instanceOfferAPI } from '../api/index';

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
  methods: {
    loadData() {
      instanceOfferAPI
        .list()
        .then(response => {
          this.count = response.data.count;
          this.results = response.data.results;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
