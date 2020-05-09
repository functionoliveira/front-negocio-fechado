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
      hint="R$ valor/hora ou R$ valor total."
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
      multiple
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
import { instanceOfferAPI } from '../../api/index';

export default {
  name: 'create-offer',
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
          price: [v => !!v || "É necessário informar o título."],
          description: [v => !!v || "É necessário informar o título."]
        },
      },
    }
  },
  methods: {
    validate() {
      console.log('Validar formulário.');
      if (this.$refs.form.validate()) {
        this.mountBody();
      }
    },
    mountBody() {
      console.log('Montando body.');
      let body = {
        title: this.title,
        price: this.price,
        description: this.description,
        worker: this.$store.getters.getUserId,
        files: this.files,
        state: 1
      }

      this.create(body)
    },
    create(body) {
      console.log('Cadastrar oferta.');
      this.loading = true;
      instanceOfferAPI
        .post(body)
        .then(response => {
          console.log(response);
          setTimeout(() => {
            this.loading = false;
          }, 1000)
        })
        .catch(error => {
          console.log(error);
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
    }
  }
};
</script>
