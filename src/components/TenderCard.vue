<template>
  <v-card
    :loading="loading"
    class="mx-auto my-8"
    max-width="350"
  >
    <v-img
      height="250"
      src="../assets/dev-image.jpeg"
    ></v-img>

    <v-card-title>{{ needs.title }}</v-card-title>
  

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-avatar>
          <img
            src="../assets/avatar-2.jpeg"
            alt="Morty Jr."
          >
        </v-avatar>
        <div class="mx-4 my-4 subtitle-1">Morty Jr.</div>
      </v-row>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="tender.worker.rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
        <div class="grey--text ml-4">{{ tender.worker.rating }} ({{ tender.worker.votes }})</div>
      </v-row>

      <div>{{ tender.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <div class="mx-4 my-4 subtitle-1">{{ tender.price }}</div>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Aceitar
      </v-btn>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Recusar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Ver
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'tender-card',
  components: {},
  data() {
    return {
      tender: {
        title: "",
        description: "Desenvolvo seu site no prazo de 3-4 semanas...",
        price: "R$ 120/hora",
        worker: {
          image: "",
          rating: 4.9,
          votes: 300 
        }
      },
      needs: {
        image: "",
        title: "Desenvolvedor Freelancer."
      }
    } 
  }
};
</script>
