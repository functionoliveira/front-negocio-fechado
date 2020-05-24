<template>
  <v-container>
    <h1>O que as pessoas precisam.</h1>

    <v-row>
      <needs-card
        v-for="item in listNeeds.results"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :price="item.price"
      ></needs-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NeedsCard from '../components/NeedsCard';

export default {
  name: 'App',
  components: {
    NeedsCard
  },
  mounted() {
    this.loadData();
  },
  data() {
    return { }
  },
  computed: {
    ...mapGetters([
      'listNeeds',
    ])
  },
  methods: {
    ...mapActions({
      loadData: 'loadOffers'
    })
  }
};
</script>
