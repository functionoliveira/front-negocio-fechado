<template>
  <v-card
    :loading="loading"
    class="mx-auto my-8"
    max-width="350"
  >
    <v-img
      height="250"
      :src="image"
    ></v-img>

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">{{ stars }} ({{ votes }})</div>
      </v-row>

      <div>{{ description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Ver Oferta
      </v-btn>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Conhecer Profissional
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'offer-card',
  components: {},
  data() {
    return {
      rating: 5,
      stars: 5, 
      votes: 1100,
      title: "Chef de cozinha para eventos",
      description: "Chef de cozinha experiente disponível para comandar equipes em eventos...",
      image: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
    }
  }
};
</script>
