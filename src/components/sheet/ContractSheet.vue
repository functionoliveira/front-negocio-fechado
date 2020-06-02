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
        <v-tabs
          v-model="tab"
          color="basil"
          background-color="transparent"
          grow
          centered
        >
          <v-tabs-items v-model="tab">
            <v-tab-item :key="1">
              <contract-header
                :title="tender.title"
                :contractorFullName="contractor.full_name"
                :contractorCPF="contractor.cpf"
                :hiredFullName="hired.full_name"
                :hiredCPF="hired.cpf"
                :description="tender.description"
              ></contract-header>
              <sign-contract
                v-show="exhibition() && !signed"
                :contractID="id"
                @state="state=$event"
              ></sign-contract>
              <v-container>
                <h3 class="success--text" v-show="signedByWorker">Contrato assinado por {{ hired.full_name }}!</h3>
                <h3 class="success--text" v-show="signedByConsumer">Contrato assinado por {{ contractor.full_name }}!</h3>
                <h3 class="success--text" v-show="state===7">O contrato atual foi dado como finalizado por seu contratante!</h3>
                <v-btn color="primary" text v-show="paidOut" @click="tab=1">
                  <v-icon small left>mdi-credit-card</v-icon> Efetuar Pagamento
                </v-btn>
                <v-btn color="primary" text v-show="ended" @click="state=7">
                  <v-icon small left>mdi-text-box-check-outline</v-icon> Serviço Prestado
                </v-btn>
              </v-container>
            </v-tab-item>
            <v-tab-item :key="2">
              <form-payment :price="6000.99" @pay="state=6; tab=2"></form-payment>
              <v-btn color="primary" text @click="tab=0">
                Ver contrato
              </v-btn>
            </v-tab-item>
            <v-tab-item :key="3">
              Recibo
              <v-btn color="primary" text @click="tab=0">
                Ver contrato
              </v-btn>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-container>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
import ContractHeader from '../contract/ContractHeader';
import SignContract from '../contract/SignContract';
import FormPayment from '../form/FormPayment';

export default {
  name: 'contract-sheet',
  components: { ContractHeader, SignContract, FormPayment },
  props: { 
    id: Number,
    tender: Object,
    contractor: Object,
    hired: Object,
    rules: String,
    state: Number,
  },
  mounted() { },
  data() {
    return {
      signed: false,
      sheet: false,
      tab: 0
    }
  },
  computed: {
    signedByWorker: {
      get() {
        if(this.state >= 5 || this.state === 4) {
          return true;
        }else{
          return false;
        }
      }
    },
    signedByConsumer: {
      get() {
        if(this.state >= 5 || this.state === 3) {
          return true;
        }else{
          return false;
        }
      }
    },
    paidOut: {
      get() {
        if(this.state === 5) {
          return true;
        }else{
          return false;
        }
      }
    },
    ended: {
      get() {
        if(this.state === 6) {
          return true;
        }else{
          return false;
        }
      }  
    } 
  },
  methods: {
    exhibition() {
      if(this.state >= 5) {
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
