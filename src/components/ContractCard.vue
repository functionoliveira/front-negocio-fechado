<template>
  <v-card
    max-width="350"
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
        <v-list-item-title class="headline">{{ tender.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="../assets/mestre-de-obras.jpeg"
      height="194"
    ></v-img>

    <v-card-text>
      {{ tender.description }}
    </v-card-text>

    <v-card-actions>
      <contract-sheet
        :id="id"
        :tender="tender"
        :contractor="contractor"
        :hired="hired"
        :rules="rules"
        :state="state"
      ></contract-sheet>
    </v-card-actions>
  </v-card>
</template>

<script>
import ContractSheet from './sheet/ContractSheet';

export default {
  name: 'contract-card',
  components: { ContractSheet },
  props: {
    id: Number,
    tender: Object,
    contractor: Object,
    hired: Object,
    state: Number, 
    rules: String
  },
  mounted() { }
};
</script>
