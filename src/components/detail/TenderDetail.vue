<template>
  <div>
    <create-contract 
      v-show="isAccept"
      :id="id"
      :title="title"
      :proposer="proposer"
    ></create-contract>
    <v-container v-show="!isAccept">
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
import { instanceOfferAPI } from '../../api/index';
import CreateContract from '../form/CreateContract';

export default {
  name: 'tender-detail',
  components: { CreateContract },
  props: {
    id: Number,
    offerId: Number,
    title: String,
    description: String,
    price: String,
    proposer: Object,
    state: Number,
    files: String,
    go: Boolean
  },
  computed: {
    isAccept: {
      get() {
        return this.state === 2 || this.go;
      },
      set(val) {
        this.go = val;
      }
    }
  },
  methods: {
    accept() {
      instanceOfferAPI
        .acceptTender(this.offerId, this.id)
        .then(response => {
          this.isAccept = true;
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    reject() {

    }
  }
};
</script>