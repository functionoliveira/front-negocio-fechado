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

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <div>{{ description }}</div>
      <div class="my-4 subtitle-1">
        Propostas {{ tenders.qtd }}
      </div>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip v-for="i in tenders.items" :key="i">{{ i }}</v-chip>
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
      >
        Deletar
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
      loading: false,
      image: "../assets/dev-image.jpeg",
      title: "Desenvolvedor Freelancer.",
      description: "Preciso de um desenvolvedor experiênte que faça um site de vendas...",
      tenders: {
        qtd: 3,
        items: ["Proposta 1", "Proposta 2", "Proposta 3"]
      }
    }
  }
};
</script>
