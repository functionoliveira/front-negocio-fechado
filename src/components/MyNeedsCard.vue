<template>
  <v-card
    class="mx-auto my-8"
    max-width="350"
  >
    <v-img
      height="250"
      src="../assets/dev-image.jpeg"
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <div>{{ description }}</div>
      <div class="my-4 subtitle-1">
        Propostas {{ tenders.length }}
      </div>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="tender in tenders" :key="tender.id">{{ tender.title }}</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Editar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="del"
      >
        Deletar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { instanceNeedsAPI } from '../api/index';

export default {
  name: 'tender-card',
  components: {},
  props: {
    id: Number,
    title: String,
    description: String,
  },
  data() {
    return {
      image: "../assets/dev-image.jpeg",
      tenders: []
    }
  },
  mounted() {
    this.loadTenders();
  },
  methods: {
    loadTenders() {
      instanceNeedsAPI
        .listTenders(this.id)
        .then(response => {
          this.tenders = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    del() {
      instanceNeedsAPI
        .delete(this.id)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
