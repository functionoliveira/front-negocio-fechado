<template>
  <div>
    <app-header></app-header>
    <main-tab :tab="tab" @tab="tab=$event">
      <template v-slot:tab-item>
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
      </template>
    </main-tab>
  </div>
</template>

<script>
  import AppHeader from './AppHeader';
  import MainTab from '../components/tab/MainTab';
  import MyOffersList from '../pages/MyOffersList';
  import ContractList from '../pages/ContractList';
  import TenderList from '../pages/TenderList';
  import NeedsList from '../pages/NeedsList';

  export default {
    name: 'consumer-home',
    components: {
      AppHeader,
      MainTab,
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
