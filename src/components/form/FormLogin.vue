<template>
  <v-container style="max-width: 600px">
    <v-img
      src="../../assets/logo.png"
      aspect-ratio="1"
      class="grey lighten-2 mx-auto"
      max-width="250"
    >
    </v-img>
    <v-form :status="loading" ref="form" lazy-validation>
      <v-text-field
        :loading="loading"
        :disabled="loading"
        :counter="48"
        v-model="cpf"
        label="CPF"
        v-mask="'###.###.###-##'"
        required
      ></v-text-field>
      <v-text-field
        :loading="loading"
        :disabled="loading"
        type="password"
        v-model="password"
        label="Senha"
        required
      ></v-text-field>
      <v-row style="align-content: center; align-items: center;">
        <v-col cols="5">
          <v-checkbox label="Lembre-me"></v-checkbox>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="$emit('register')">Cadastre-se</v-btn>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn
          @click="login"
          large
          color="primary"
        >Entrar</v-btn>
        <v-spacer></v-spacer>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'form-login',
  components: { },
  directives: { mask },
  data() {
    return {
      loading: false,
      cpf: '',
      password: ''
    }
  },
  methods: {
    login() {
        if (this.$refs.form.validate()) {
          this.$emit('on-login', { cpf: this.cpf, password: this.password })
        }
    }
  }
};
</script>
