<template>
  <v-card class="mx-auto my-8" max-width="350">
    <v-img height="250" :src="image"></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <div>{{ description }}</div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <tender-sheet :tendersQtd="tenders.length" :offerId="id" :tenders="tenders"></tender-sheet>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="primary lighten-2" text>
        <v-icon small left>mdi-pencil</v-icon> Editar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="error lighten-2" text @click="del">
        <v-icon small left>mdi-delete</v-icon> Retirar Oferta
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { instanceOfferAPI } from '../api/index'; 
import TenderSheet from '../components/sheet/TenderSheet';

export default {
  name: 'offer-card',
  components: { TenderSheet },
  props: {
    id: Number,
    title: String,
    description: String
  },
  data() {
    return {
      tenders: [],
      rating: 5,
      stars: 5, 
      votes: 1100,
      image: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
    }
  },
  mounted() {
    this.loadTenders();
  },
  methods: {
    loadTenders() {
      instanceOfferAPI
        .listOffers(this.id)
        .then(response => {
          console.log(response);
          this.tenders = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    del() {
      // instanceNeedsAPI
      //   .delete(this.id)
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  }
};
</script>
