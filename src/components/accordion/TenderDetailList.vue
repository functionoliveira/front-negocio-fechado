<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(tender,i) in tenders"
      :key="i"
    >
      <v-expansion-panel-header>{{ tender.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <tender-detail
          :description="tender.description"
          :files="null"
          :price="tender.price"
        ></tender-detail>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import TenderDetail from '../detail/TenderDetail';

export default {
  name: 'tender-detail-list',
  components: { TenderDetail },
  props: {
    tenders: Array
  },
};
</script>