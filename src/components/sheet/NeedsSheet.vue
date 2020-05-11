<template>
  <sheet>
    <template v-slot:view>
      <div>Visualização da oferta</div>
    </template>
    <template v-slot:tender>
      <create-tender :needs="id"></create-tender>
    </template>
  </sheet>
</template>

<script>
import Sheet from './Sheet';
import CreateTender from '../form/CreateTender';

export default {
  name: 'offer-sheet',
  components: { CreateTender, Sheet },
  props: {
    id: Number,
    title: String,
    description: String,
    price: String,
    worker: Number
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
