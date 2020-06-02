<template>
  <v-form :status="loading" v-model="form.valid" ref="form" lazy-validation>
    <h1>Fazer Proposta</h1>
    <v-text-field
      :counter="10"
      :loading="loading"
      :disabled="loading"
      :rules="form.rules.title"
      v-model="title"
      label="Título"
      required
    ></v-text-field>
    <v-text-field
      :counter="10"
      :loading="loading"
      :disabled="loading"
      :rules="form.rules.price"
      v-model="price"
      label="Valor"
      hint="R$ valor/hora ou R$ valor total."
      required
    ></v-text-field>
    <v-textarea
      :loading="loading"
      :disabled="loading"
      :rules="form.rules.description"
      v-model="description"
      label="Descrição"
      required
    ></v-textarea>
    <v-file-input 
      :loading="loading"
      :disabled="loading"
      show-size 
      small-chips 
      counter 
      multiple 
      label="Anexos"
    ></v-file-input>
    <v-row>
      <v-col>
        <div class="my-2">
          <v-btn 
            @click="validate"
            :disabled="!form.valid"
            color="primary"
          >Fazer proposta</v-btn>
        </div>
      </v-col>  
    </v-row>
  </v-form>

</template>

<script>
import { instanceTenderAPI } from '../../api/index';
import { FEEDBACK_MESSAGES } from 'Helpers/helpers';

export default {
  name: 'create-needs',
  components: {},
  props: {
    offer: { type: Number, default: null },
    needs: { type: Number, default: null },
  },
  data() {
    return {
      loading: false,
      title: '',
      price: '',
      description: '',
      files: null,
      form: {
        valid: true,
        rules: {
          title: [v => !!v || "É necessário informar o título."],
          price: [v => !!v || "É necessário informar o título."],
          description: [v => !!v || "É necessário informar o título."]
        },
      },
    }
  },
  computed: { },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.mountBody();
      }
    },
    mountBody() {
      let body = {
        title: this.title,
        price: this.price,
        description: this.description,
        offer: this.offer,
        needs: this.needs,
        proposer: this.$store.getters.getUserId,
        files: this.files,
        state: 1
      }

      this.create(body)
    },
    create(body) {
      this.loading = true;
      instanceTenderAPI
        .post(body)
        .then(response => {
          this.loading = false;
          if(response.status === 201) {
            this.$store.dispatch('addTender', response.data);
            this.$store.dispatch('showSuccessMessage', FEEDBACK_MESSAGES.CREATE_TENDER_OK);
          }
        })
        .catch(error => {
          this.$store.dispatch('showErrorMessage', {
            code: "TDR#1",
            title: FEEDBACK_MESSAGES.CREATE_TENDER_FAIL,
            description: error.response.data
          });
          this.loading = false;
        });
    }
  }
};
</script>
