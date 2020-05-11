<template>
  <v-container>
    <h1>O que as pessoas precisam.</h1>

    <v-row>
      <needs-card
        v-for="item in results"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :price="item.price"
      ></needs-card>
    </v-row>
  </v-container>
</template>

<script>
import { instanceNeedsAPI } from '../api/index';
import NeedsCard from '../components/NeedsCard';

export default {
  name: 'App',
  components: {
    NeedsCard
  },
  mounted() {
    this.loadData();
  },
  data() {
    return {
      count: null,
      results: []
    }
  },
  methods: {
    loadData() {
      instanceNeedsAPI
        .list()
        .then(response => {
          console.log(response);
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
