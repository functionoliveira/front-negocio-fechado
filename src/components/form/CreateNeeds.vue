<template>
  <v-form :status="loading" v-model="form.valid" ref="form" lazy-validation>
    <v-text-field
      :rules="form.rules.title"
      :loading="loading"
      :disabled="loading"
      :counter="48"
      v-model="title"
      label="Título"
      required
    ></v-text-field>
    <v-text-field
      :rules="form.rules.price"
      :loading="loading"
      :disabled="loading"
      :counter="20"
      v-model="price"
      label="Valor"
      hint="O valor usa a moeda real, ex.: 0,00."
      required
    ></v-text-field>
    <v-textarea
      :loading="loading"
      :disabled="loading"
      label="Descrição"
      v-model="description"
      :rules="form.rules.description"
      required
    ></v-textarea>
    <v-file-input 
      :loading="loading"
      :disabled="loading"
      show-size 
      small-chips 
      counter 
      v-model="files"
      label="Anexos"
    ></v-file-input>
    <v-row>
      <v-col>
        <div class="my-2">
          <v-btn
            :disabled="!form.valid"
            @click="validate" 
            color="primary"
          >Cadastrar</v-btn>
        </div>
      </v-col>  
    </v-row>
  </v-form>

</template>

<script>
import { instanceNeedsAPI } from '../../api/index';
import { FEEDBACK_MESSAGES } from 'Helpers/helpers';

export default {
  name: 'create-needs',
  components: {},
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
          price: [v => !!v || "É necessário informar o valor.", v => !v.match(/[^0-9,]/g) || "Valor inválido."],
          description: [v => !!v || "É necessário informar a descrição."]
        },
      },
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.formDate();
      }
    },
    formDate() {
      let form = new FormData();
      form.append('title', this.title);
      form.append('price', this.price);
      form.append('description', this.description);
      form.append('consumer', this.$store.getters.getUserId);
      form.append('files', this.files ? this.files : '');
      form.append('state', 1);
      this.create(form);
    },
    create(body) {
      this.loading = true;
      instanceNeedsAPI
        .post(body)
        .then(response => {
          this.loading = false;
          this.$store.dispatch('addNeeds', response.data);
          this.$store.dispatch('showSuccessMessage', FEEDBACK_MESSAGES.CREATE_NEEDS_OK);
        })
        .catch(error => {
          this.$store.dispatch('showErrorMessage', {
            code: "CON#1",
            title: FEEDBACK_MESSAGES.CREATE_NEEDS_FAIL,
            description: error.response.data
          });
          this.loading = false;
        });
    }
  }
};
</script>
