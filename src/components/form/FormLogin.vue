<template>
  <v-form :status="loading" ref="form" lazy-validation>
    <v-text-field
      :loading="loading"
      :disabled="loading"
      :counter="48"
      v-model="cpf"
      label="CPF"
      required
    ></v-text-field>
    <v-text-field
      :loading="loading"
      :disabled="loading"
      :counter="48"
      v-model="password"
      label="Senha"
      required
    ></v-text-field>
    <v-checkbox label="Lembre-se"></v-checkbox>
    <v-btn
      @click="login"
      color="primary"
    >Entrar</v-btn>
    <a href="javascript:void()">Cadastre-se</a>
  </v-form>
</template>

<script>
export default {
  name: 'form-login',
  components: { },
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
