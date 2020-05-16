<template>
  <v-container>
    <h1>Contratos abertos</h1>

    <v-row>
      <contract-card
        v-for="item in results"
        :key="item.id"
        :id="item.id"
        :tender="item.tender"
        :contractor="item.contractor"
        :hired="item.hired"
        :rules="item.rules"
        :state="item.state"
      ></contract-card>
    </v-row>
  </v-container>
</template>

<script>
import { instanceUserAPI } from '../api/index';
import ContractCard from '../components/ContractCard';

export default {
  name: 'App',
  components: {
    ContractCard
  },
  data() {
    return {
      count: null,
      results: []
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      instanceUserAPI
        .listContracts(this.$store.getters.getUserId)
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
