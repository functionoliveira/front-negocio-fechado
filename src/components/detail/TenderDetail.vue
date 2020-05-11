<template>
  <div>
    <create-contract v-show="go"></create-contract>
    <v-container v-show="!go">
      <label>Valor R$ {{ price }}</label>
      <label>Descrição</label>
      <p>{{ description }}</p>
      <label>Anexos</label>
      <p>{{ 
        files ?
        files :
        "Não há arquivos extras."  
      }}</p>
      <v-row>
        <v-btn @click="accept()" color="success" text>
          <v-icon small left>mdi-thumb-up</v-icon> Aceitar
        </v-btn>  
        <v-spacer></v-spacer>
        <v-btn color="error" text>
          <v-icon small left>mdi-thumb-down</v-icon> Recusar
        </v-btn>  
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CreateContract from '../form/CreateContract';

export default {
  name: 'tender-detail',
  components: { CreateContract },
  props: {
    price: String,
    description: String,
    files: String
  },
  data() {
    return {
      go: false
    }
  },
  methods: {
    accept() {
      this.go = true;
    },
    reject() {

    }
  }
};
</script>