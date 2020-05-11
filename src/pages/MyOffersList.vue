<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <h1>Minhas Ofertas.</h1>
      </v-col>
      <v-col v-if="IS_LIST" class="text-right" cols="12" sm="6">
        Adicionar oferta.
        <v-btn @click="onCreate" class="mx-2" fab dark color="primary">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col v-if="IS_CREATE" class="text-right" cols="12" sm="6">
        Listar ofertas.
        <v-btn @click="onList" class="mx-2" fab dark color="primary">
          <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-container>
      <v-row>
        <my-offer-card
          v-show="IS_LIST"
          v-for="item in results"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :description="item.description"
        ></my-offer-card>
      </v-row>
      <create-offer v-show="IS_CREATE"></create-offer>
    </v-container>
  </v-container>
</template>

<script>
import { instanceUserAPI } from '../api/index';
import MyOfferCard from '../components/MyOfferCard';
import CreateOffer from '../components/form/CreateOffer';

export default {
  name: 'my-offers-list',
  components: {
    MyOfferCard,
    CreateOffer
  },
  data() {
    return {
      state: 'list',
      count: null,
      next: null,
      previous: null,
      results: []
    }
  },
  mounted() {
    this.loadData();
  },
  computed: {
    IS_LIST() {
      return this.state === 'list';
    },
    IS_CREATE() {
      return this.state === 'create';
    }
  },
  methods: {
    onCreate() {
      this.state = 'create';
    },
    onList() {
      this.state = 'list';
    },
    loadData() {
      instanceUserAPI
        .listOffers(this.$store.getters.getUserId)
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
