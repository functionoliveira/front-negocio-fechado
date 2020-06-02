<template>
  <v-container>
    <v-form :status="loading" v-model="valid" ref="form" lazy-validation>
      <v-checkbox
        v-model="acceptTerms"
        :rules="[v => !!v || 'Você deve aceitar para continuar!']"
        label="Li e aceito os termos de uso da plataforma negócio fechado e me comprometo a seguí-los sob penas judiciais."
        required
      ></v-checkbox>
      <v-checkbox
        v-model="acceptContract"
        :rules="[v => !!v || 'Você deve aceitar para continuar!']"
        label="Li e aceito os termos do contrato, assim como todas as cláusulas, e me comprometo a compri-las sob penas judiciais."
        required
      ></v-checkbox>
      <v-btn color="warning" text @click="sign">
        <v-icon small left>mdi-draw</v-icon> Assinar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import { instanceContractAPI } from '../../api/index';

export default {
  name: 'contract-header',
  props: {
    contractID: Number
  },
  data() {
    return {
      loading: false,
      valid: true,
      acceptTerms: false,
      acceptContract: false   
    }
  },
  methods: {
    sign() {
      if (this.$refs.form.validate()) {
        if(this.$store.getters.isWorker) {
          instanceContractAPI
            .hiredAccept(this.contractID, this.$store.getters.getUserId)
            .then(response => {
              this.$emit('state', response.data);
            })
            .catch(err => {
              console.log(err);
            });
        }
        if(this.$store.getters.isConsumer) {
          instanceContractAPI
            .contractorAccept(this.contractID, this.$store.getters.getUserId)
            .then(response => {
              this.$emit('state', response.data);
            })
            .catch(err => {
              console.log(err);
            });
        }

        console.log('assinar');
      }
    }
  }
};
</script>
