<template>
  <sheet>
      <template v-slot:view>
        <offer-detail
          :id="id"
          :title="title"
          :description="description"
          :price="price"
          :workerID="worker"
          :image="image"
          :files="files"
        ></offer-detail>
      </template>
      <template v-slot:tender>
        <create-tender :offer="id"></create-tender>
      </template>
    </sheet>
</template>

<script>
import Sheet from './Sheet';
import CreateTender from '../form/CreateTender';
import OfferDetail from '../detail/OfferDetail';

export default {
  name: 'offer-sheet',
  components: { CreateTender, Sheet, OfferDetail },
  props: {
    id: Number,
    title: String,
    description: String,
    price: String,
    worker: Number,
    files: String
  },
  data() {
    return {
      sheet: false,
      rating: 5,
      stars: 5, 
      votes: 1100,
      image: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
      render: 'view'
    }
  }
};
</script>
