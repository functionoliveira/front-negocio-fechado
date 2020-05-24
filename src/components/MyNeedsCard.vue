<template>
  <v-card
    class="mx-auto my-8"
    max-width="350"
  >
    <v-img
      height="250"
      src="../assets/dev-image.jpeg"
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <div>{{ description }}</div>
    </v-card-text>

    <tender-sheet :tendersQtd="tenders.length" :offerId="id" :tenders="tenders"></tender-sheet>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="primary lighten-2" text>
        <v-icon small left>mdi-pencil</v-icon> Editar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="error lighten-2" text @click="del">
        <v-icon small left>mdi-delete</v-icon> Retirar Necessidade
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { instanceNeedsAPI } from '../api/index';
import TenderSheet from '../components/sheet/TenderSheet';

export default {
  name: 'tender-card',
  components: { TenderSheet },
  props: {
    id: Number,
    title: String,
    description: String,
  },
  data() {
    return {
      image: "../assets/dev-image.jpeg",
      tenders: []
    }
  },
  mounted() {
    this.loadTenders();
  },
  methods: {
    loadTenders() {
      instanceNeedsAPI
        .listTenders(this.id)
        .then(response => {
          this.tenders = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    del() {
      instanceNeedsAPI
        .delete(this.id)
        .then(response => {
          if(response.status === 204) {
            this.$store.dispatch('delNeeds', this.id);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
