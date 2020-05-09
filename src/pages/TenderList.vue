<template>
  <v-container>
    <h1>Propostas</h1>

    <v-row>
      <tender-card
        v-for="item in results"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :price="item.price"
      ></tender-card>
    </v-row>
  </v-container>
</template>

<script>
import TenderCard from '../components/TenderCard';
import { instanceUserAPI } from '../api/index';

export default {
  name: 'tender-list',
  components: {
    TenderCard
  },
  data() {
    return {
      results: []
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      instanceUserAPI
        .listTenders(this.$store.getters.getUserId)
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  }
};
</script>
