<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <h1>Minhas necessidades.</h1>
      </v-col>
      <v-col v-if="IS_LIST" class="text-right" cols="12" sm="6">
        Adicionar necessidade.
        <v-btn @click="onCreate" class="mx-2" fab dark color="primary">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>


      <v-col v-if="IS_CREATE" class="text-right" cols="12" sm="6">
        Listar necessidades.
        <v-btn @click="onList" class="mx-2" fab dark color="primary">
          <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-container>
      <my-needs-card
        v-show="IS_LIST"
        v-for="item in results"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
      ></my-needs-card>

      <create-needs v-show="IS_CREATE"></create-needs>
    </v-container>
  </v-container>
</template>

<script>
import { instanceUserAPI } from '../api/index';
import MyNeedsCard from '../components/MyNeedsCard';
import CreateNeeds from '../components/form/CreateNeeds';

export default {
  name: 'App',
  components: {
    MyNeedsCard,
    CreateNeeds
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
        .listNeeds(this.$store.getters.getUserId)
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
