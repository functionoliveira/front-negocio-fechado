<template>
  <v-card
    max-width="400"
    class="mx-auto my-8"
  >
    <v-list-item>
      <a href="">
        <v-list-item-avatar color="grey">
          <v-img
            src="../assets/avatar-2.jpeg"
          ></v-img>
        </v-list-item-avatar>
      </a>
      <a href="">
        <v-list-item-avatar color="grey">
          <v-img
            src="../assets/avatar.png"
          ></v-img>
        </v-list-item-avatar>
      </a>
      <v-list-item-content>
        <v-list-item-title class="headline">Título do contrato.</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="../assets/mestre-de-obras.jpeg"
      height="194"
    ></v-img>

    <v-card-text>
      Uma breve descrição do contrato atual...
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Ver Contrato
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'contract-card',

  components: {},
};
</script>
