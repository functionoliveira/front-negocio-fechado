<template>
    <v-container>
      <v-img
        height="250"
        :src="image"
      ></v-img>
      <h1>{{ title }}</h1>
      <h2>R$ {{ price }}</h2>
      <h3>Oferta disponibilizada pelo prestador {{ worker.full_name }}.</h3>
      <p>{{ description }}</p>
      <span>
        <v-icon medium left>mdi-folder-download</v-icon>
        <a :href="files" download>
          Clique aqui para baixar o conteúdo extra desta oferta.
        </a>
      </span>
    </v-container>
</template>

<script>
import { instanceUserAPI } from '../../api/index';
export default {
  name: 'offer-detail',
  components: { },
  props: {
    id: Number,
    title: String,
    description: String,
    price: String,
    workerID: Number,
    image: String,
    files: String
  },
  data() {
    return {
      worker: { }
    }
  },
  mounted() {
    instanceUserAPI
      .get(this.workerID)
      .then(resp => {
        this.worker = resp.data;
      })
      .catch(err => {
        console.log(err);
      })
  }
};
</script>
