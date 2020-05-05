<template>
  <v-container>
    <h1>Contratos abertos</h1>


    <v-row>
      <contract-card
        v-for="i in 6"
        :key="i"
      ></contract-card>
    </v-row>
  </v-container>
</template>

<script>
import ContractCard from '../components/ContractCard';

export default {
  name: 'App',

  components: {
    ContractCard
  },
};
</script>
