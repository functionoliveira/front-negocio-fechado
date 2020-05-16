<template>
  <v-bottom-sheet v-model="sheet" persistent>
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" color="primary lighten-2">
        <v-icon small left>mdi-eye</v-icon> Ver
      </v-btn>
    </template>
    <v-sheet class="px-3" color="grey lighten-3" height="100vh">
      <v-btn color="error" text @click="sheet = !sheet" shrink-on-scroll>
        <v-icon small left>mdi-keyboard-backspace</v-icon> Voltar
      </v-btn>
      <v-divider></v-divider>
      <v-container
        style="max-height: 80vh"
        class="overflow-y-auto"
      >
        <contract-header
          :title="tender.title"
          :contractorFullName="contractor.full_name"
          :contractorCPF="contractor.cpf"
          :hiredFullName="hired.full_name"
          :hiredCPF="hired.cpf"
          :description="tender.description"
        ></contract-header>
        <sign-contract
          v-if="exhibition() && !signed"
          :contractID="id"
          @state="signed=$event"
        ></sign-contract>
        <v-container v-else>
          <p class="success--text">Contrato assinado!</p>
        </v-container>
      </v-container>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import ContractHeader from '../contract/ContractHeader';
import SignContract from '../contract/SignContract';

export default {
  name: 'contract-sheet',
  components: { ContractHeader, SignContract },
  props: { 
    id: Number,
    tender: Object,
    contractor: Object,
    hired: Object,
    rules: String,
    state: Number,
  },
  mounted() {
    
  },
  data() {
    return {
      signed: false,
      sheet: false,
    }
  },
  methods: {
    exhibition() {
      console.log(this.$store.getters.isConsumer);
      console.log(this.state);
      if(this.state === 5) {
        return false;
      }

      if(this.$store.getters.isWorker && this.state === 4) {
        return false;
      }

      if(this.$store.getters.isConsumer && this.state === 3) {
        return false;
      }

      return true;
    }
  }
};
</script>
