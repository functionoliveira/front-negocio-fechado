<template>
  <div>
    <app-header></app-header>
    <main-tab :tab="tab" @tab="tab=$event">
      <template v-slot:tab-item>
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
      </template>
    </main-tab>
  </div>
</template>

<script>
  import AppHeader from './AppHeader';
  import MainTab from '../components/tab/MainTab';
  import OffersList from '../pages/OffersList';
  import ContractList from '../pages/ContractList';
  import TenderList from '../pages/TenderList';
  import MyNeedsList from '../pages/MyNeedsList';

  export default {
    name: 'consumer-home',
    components: {
      AppHeader,
      MainTab,
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
