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
      <p>Posso pagar R${{ price }}</p>
      <div>{{ description }}</div>
      <div class="my-4 subtitle-1">
        Propostas {{ tenders.qtd }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <needs-sheet
        :id="id"
        :title="title"
        :description="description"
        :price="price"
      ></needs-sheet>
    </v-card-actions>
  </v-card>
</template>

<script>
import NeedsSheet from './sheet/NeedsSheet';

export default {
  name: 'needs-card',
  components: { NeedsSheet },
  props: {
    id: Number,
    title: String,
    description: String,
    price: String
  },
  data() {
    return {
      image: "../assets/dev-image.jpeg",
      tenders: {
        qtd: 3,
        items: ["Proposta 1", "Proposta 2", "Proposta 3"]
      }
    }
  }
};
</script>
