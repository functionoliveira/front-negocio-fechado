<template>
  <v-container>
    <h1>Propostas</h1>

    <v-row>
      <tender-card
        v-for="item in listTendersFromUser"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :price="item.price"
      ></tender-card>
    </v-row>
  </v-container>
</template>

<script>
import TenderCard from '../components/TenderCard';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'tender-list',
  components: {
    TenderCard
  },
  data() {
    return { }
  },
  mounted() {
    this.loadData(this.$store.getters.getUserId);
  },
  computed: {
    ...mapGetters([
      'listTendersFromUser',
    ])
  },
  methods: {
    ...mapActions({
      loadData: 'loadTendersFromUser'
    })
  }
};
</script>
