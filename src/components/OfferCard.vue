<template>
  <v-card
    class="mx-auto my-8"
    max-width="350"
  >
    <v-img
      height="250"
      :src="image"
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">{{ stars }} ({{ votes }})</div>
      </v-row>

      <div>{{ description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <offer-sheet
        :id="id"
        :title="title"
        :description="description"
        :price="price"
        :worker="worker"
        :files="files"
      ></offer-sheet>
    </v-card-actions>
  </v-card>
</template>

<script>
import OfferSheet from './sheet/OfferSheet';

export default {
  name: 'offer-card',
  components: { OfferSheet },
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
