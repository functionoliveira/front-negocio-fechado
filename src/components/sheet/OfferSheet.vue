<template>
    <v-bottom-sheet v-model="sheet" persistent>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary lighten-2"
          text
          v-on="on"
        >
          Ver Oferta
        </v-btn>
      </template>
      <v-sheet class="px-3" color="grey lighten-3" height="100vh">
        <v-btn 
          class="mt-6"
          color="error"
          flat
          text
          shrink-on-scroll
          @click="sheet = !sheet"
        >Voltar</v-btn>
        <v-container
          style="max-height: 400px"
          class="overflow-y-auto"
        >
          <div v-if="render==='view'" class="py-3">Visualização da oferta</div>
          <create-tender v-else
            :offer="id"
          ></create-tender>
          <v-divider></v-divider>
          <v-btn v-if="render==='view'" color="primary" text @click="render='create'">Fazer Proposta</v-btn>
          <v-btn v-else color="primary" text @click="render='view'">Visualizar</v-btn>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
</template>

<script>
import CreateTender from '../form/CreateTender';

export default {
  name: 'offer-sheet',
  components: { CreateTender },
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
