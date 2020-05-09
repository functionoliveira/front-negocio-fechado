<template>
  <div>
    <app-header></app-header>
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
      centered
      icons-and-text
    >
      <v-tab :key="1">
        <v-icon>mdi-phone</v-icon>  
      </v-tab>
      <v-tab :key="2">
        <v-icon>mdi-phone</v-icon>  
      </v-tab>
      <v-tab :key="3">
        <v-icon>mdi-phone</v-icon>
      </v-tab>
      <v-tab :key="4">
        <v-icon>mdi-phone</v-icon>
      </v-tab>

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
