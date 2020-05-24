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
      <v-row>
        <my-needs-card
          v-show="IS_LIST"
          v-for="item in listNeedsFromUser"
          :key="item.id"
          :id="item.id"
          :title="item.title"
          :description="item.description"
        ></my-needs-card>
      </v-row>
      <create-needs v-show="IS_CREATE"></create-needs>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
    this.loadData(this.$store.getters.getUserId);
  },
  computed: {
    IS_LIST() {
      return this.state === 'list';
    },
    IS_CREATE() {
      return this.state === 'create';
    },
    ...mapGetters([
      'listNeedsFromUser',
    ])
  },
  methods: {
    ...mapActions({
      loadData: 'loadNeedsFromUser'
    }),
    onCreate() {
      this.state = 'create';
    },
    onList() {
      this.state = 'list';
    },
  }
};
</script>
