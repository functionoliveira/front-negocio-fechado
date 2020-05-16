<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(tender,i) in tenders"
      :key="i"
    >
      <v-expansion-panel-header>{{ tender.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <tender-detail
          :id="tender.id"
          :offerId="offerId"
          :title="tender.title"
          :description="tender.description"
          :price="tender.price"
          :proposer="tender.proposer"
          :state="tender.state"
          :files="null"
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
    offerId: Number,
    tenders: Array
  },
};
</script>