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
          <v-btn @click="validate" color="primary">Cadastrar</v-btn>
        </div>
      </v-col>  
    </v-row>
  </v-form>
</template>

<script>
import { mask } from 'vue-the-mask';
import { instanceOfferAPI } from '../../api/index';

export default {
  name: 'create-offer',
  components: {},
  directives: { mask },
  data() {
    return {
      loading: false,
      title: '',
      price: 'R$ 0,00',
      description: '',
      files: null,
      form: {
        valid: true,
        rules: {
          title: [v => !!v || "É necessário informar o título."],
          price: [v => !!v || "É necessário informar o valor.", v => !v.match(/[^0-9,]/g) || "Valor inválido."],
          description: [v => !!v || "É necessário informar o descrição."]
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
      form.append('worker', this.$store.getters.getUserId);
      form.append('files', this.files ? this.files : '');
      form.append('state', 1);
      this.create(form);
    },
    create(body) {
      this.loading = true;
      instanceOfferAPI
        .post(body)
        .then(response => {
          this.$store.dispatch('addOffer', response.data);
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
  }
};
</script>
