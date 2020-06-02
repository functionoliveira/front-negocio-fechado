<template>
  <v-container style="max-width: 600px">
    <v-form :status="loading" ref="form" lazy-validation>
      <v-select
        v-model="cardName"
        :loading="loading"
        :disabled="loading"
        :items="cards"
        :rules="[v => !!v || 'É necessário informar a bandeira do cartão de crédito.']"
        menu-props="auto"
        label="Bandeira"
      ></v-select>
      <v-select
        v-model="cardInstallments"
        :loading="loading"
        :disabled="loading"
        :items="installments"
        :rules="[v => !!v || 'É necessário informar as parcelas do pagamento.']"
        item-text="text"
        item-value="value"
        label="Parcelas"
      ></v-select>
      <v-text-field
        :loading="loading"
        :disabled="loading"
        :rules="[v => !!v || 'É necessário informar o número do cartão de crédito.']"
        v-model="cardNumber"
        label="Cartão de crédito"
        v-mask="'####.####.####.####'"
        required
      ></v-text-field>
      <v-text-field
        :loading="loading"
        :disabled="loading"
        :rules="[v => !!v || 'É necessário informar a validade do cartão de crédito.']"
        v-model="cardDate"
        label="Validade do Cartão"
        v-mask="'##/####'"
        required
      ></v-text-field>
      <v-text-field
        :loading="loading"
        :disabled="loading"
        :rules="[v => !!v || 'É necessário informar o código de segurança do cartão de crédito.']"
        v-model="cardCod"
        label="Código de verificação"
        v-mask="'###'"
        required
      ></v-text-field>
      
      <v-row>
        <v-spacer></v-spacer>
        <v-btn
          @click="pay"
          color="primary"
          :disabled="loading"
          large
        >Pagar</v-btn>
        <v-spacer></v-spacer>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mask } from 'vue-the-mask';
import { FEEDBACK_MESSAGES } from 'Helpers/helpers';

export default {
  name: 'form-login',
  components: { },
  directives: { mask },
  props: {
    price: Number
  },
  data() {
    return {
      loading: false,
      cards: ['Mastercard', 'Visa'],
      installments: [
        { value: 1, text: this.installmentsText(1)},
        { value: 2, text: this.installmentsText(2)},
        { value: 3, text: this.installmentsText(3)},
        { value: 4, text: this.installmentsText(4)},
        { value: 5, text: this.installmentsText(5)},
        { value: 6, text: this.installmentsText(6)}
      ],
      cardName: '',
      cardNumber: '',
      cardDate: '',
      cardCod: '',
      cardInstallments: ''
    }
  },
  methods: {
    installmentsText(val) {
      let inst = val+'x';
      let instValue = this.price / val;
      return inst + ' - R$ ' + instValue.toFixed(2).replace('.', ',');
    },
    pay() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          this.$emit('pay');
          this.loading = true;
          this.$store.dispatch('showSuccessMessage', FEEDBACK_MESSAGES.PAYMENT_OK);
        }, 1000);
      }
    }
  }
};
</script>
