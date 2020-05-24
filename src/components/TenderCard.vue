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
      <v-row
        align="center"
        class="mx-0"
      >
        <v-avatar>
          <img
            src="../assets/avatar-2.jpeg"
            alt="Morty Jr."
          >
        </v-avatar>
        <div class="mx-4 my-4 subtitle-1">Morty Jr.</div>
      </v-row>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="tender.worker.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ml-4">{{ tender.worker.rating }} ({{ tender.worker.votes }})</div>
      </v-row>

      <div>{{ description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <div class="mx-4 my-4 subtitle-1">{{ price }}</div>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="del"
      >
        Retirar Proposta
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { instanceTenderAPI } from '../api/index';

export default {
  name: 'tender-card',
  components: {},
  props: {
    id: Number,
    title: String,
    description: String,
    price: String
  },
  data() {
    return {
      tender: {
        title: "",
        description: "Desenvolvo seu site no prazo de 3-4 semanas...",
        price: "R$ 120/hora",
        worker: {
          image: "",
          rating: 4.9,
          votes: 300 
        }
      },
      needs: {
        image: "",
        title: "Desenvolvedor Freelancer."
      }
    } 
  },
  methods: {
    del() {
      instanceTenderAPI
        .delete(this.id)
        .then(response => {
          if(response.status === 204) {
            this.$store.dispatch('delTender', this.id);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
