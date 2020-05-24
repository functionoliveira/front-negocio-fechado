<template>
  <v-bottom-sheet v-model="sheet" persistent>
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" color="primary lighten-2">
        <v-icon small left>mdi-eye</v-icon> Ver
      </v-btn>
    </template>
    <v-sheet class="px-3" color="grey lighten-3" height="90vh">
      <v-btn color="error" text @click="sheet = !sheet" shrink-on-scroll>
        <v-icon small left>mdi-keyboard-backspace</v-icon> Voltar
      </v-btn>

      <v-btn v-if="render==='view'" color="primary" text @click="render='create'">
          <v-icon small left>mdi-offer</v-icon> Fazer Proposta
      </v-btn>
      <v-btn v-else color="primary" text @click="render='view'">
          <v-icon small left>mdi-eye</v-icon> Visualizar
      </v-btn>
      <v-divider></v-divider>
      <v-container
        style="height: 80vh"
        class="overflow-y-auto"
      >
        <slot v-if="render==='view'" class="py-3" name="view"></slot>
        <slot v-else name="tender"></slot>
      </v-container>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: 'sheet',
  components: { },
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
