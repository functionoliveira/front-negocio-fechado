<template>
  <div>
    <app-header></app-header>
    <v-row>
      <v-col>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="basil"
          grow
        >
          <v-tab :key="1">Início</v-tab>
          <v-tab :key="2">Contratos</v-tab>
          <v-tab :key="3">Ofertas</v-tab>
          <v-tab :key="4">Propostas</v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item :key="1">
              <needs-list></needs-list>
            </v-tab-item>
            <v-tab-item :key="2">
              <contract-list></contract-list>
            </v-tab-item>
            <v-tab-item :key="3">
              <my-offers-list></my-offers-list>
            </v-tab-item>
            <v-tab-item :key="4">
              <tender-list></tender-list>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import AppHeader from './AppHeader';
  import MyOffersList from '../pages/MyOffersList';
  import ContractList from '../pages/ContractList';
  import TenderList from '../pages/TenderList';
  import NeedsList from '../pages/NeedsList';

  export default {
    name: 'consumer-home',
    components: {
      AppHeader,
      MyOffersList,
      ContractList,
      TenderList,
      NeedsList
    },
    data() {
      return {
        tab: 0
      }
    }
  }
</script>
