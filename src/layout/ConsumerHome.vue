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
          <v-tab :key="3">Procura</v-tab>
          <v-tab :key="4">Propostas</v-tab>

          <v-tabs-items v-model="tab">
            <v-tab-item :key="1">
              <offers-list></offers-list>
            </v-tab-item>
            <v-tab-item :key="2">
              <contract-list></contract-list>
            </v-tab-item>
            <v-tab-item :key="3">
              <my-needs-list></my-needs-list>
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
  import OffersList from '../pages/OffersList';
  import ContractList from '../pages/ContractList';
  import TenderList from '../pages/TenderList';
  import MyNeedsList from '../pages/MyNeedsList';

  export default {
    name: 'consumer-home',
    components: {
      AppHeader,
      OffersList,
      ContractList,
      TenderList,
      MyNeedsList
    },
    data() {
      return {
        tab: 0
      }
    }
  }
</script>
