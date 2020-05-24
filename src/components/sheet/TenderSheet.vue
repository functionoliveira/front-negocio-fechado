<template>
  <v-bottom-sheet v-model="sheet" persistent>
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" color="primary lighten-2">
        <v-icon small left>mdi-eye</v-icon> {{ 
        tendersQtd > 0 ?
          tendersQtd == 1 ?
            `${tendersQtd} proposta feita.` :
            `${tendersQtd} propostas feitas.`
          : `Não existe nenhuma proposta.`
        }}
      </v-btn>
    </template>
    <v-sheet class="px-3" color="grey lighten-3" height="100vh">
      <v-btn color="error" text @click="sheet = !sheet" shrink-on-scroll>
        <v-icon small left>mdi-keyboard-backspace</v-icon> Voltar
      </v-btn>
      <v-divider></v-divider>
      <v-container
        style="max-height: 400px"
        class="overflow-y-auto"
      >
        <tender-detail-list :offerId="offerId" :tenders="tenders"></tender-detail-list>
      </v-container>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import TenderDetailList from '../accordion/TenderDetailList';

export default {
  name: 'tender-sheet',
  components: { TenderDetailList },
  props: {
    offerId: Number,
    tendersQtd: Number,
    tenders: Array
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
