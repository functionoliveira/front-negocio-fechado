<template>
  <v-fade-transition mode="in-out">
    <v-container style="max-width: 600px">
      <v-row>
        <v-col>
          <v-btn color="error" @click="$emit('back')" class="mb-2" text shrink-on-scroll>
            <v-icon small left>mdi-keyboard-backspace</v-icon> Voltar
          </v-btn>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-form :status="loading" ref="form" lazy-validation>
        <v-img
          ref="image"
          :src="render"
          aspect-ratio="1"
          class="grey lighten-2 mx-auto"
          max-width="250"
        >
        </v-img>
        <v-file-input
          :rules="[value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',]"
          :show-size="1000"
          accept="image/png, image/jpeg, image/bmp"
          hint="Esta foto representará você na plataforma."
          v-model="photo"
          prepend-icon="mdi-camera"
          label="Escolha uma foto"
        ></v-file-input>

        <v-text-field
          :loading="loading"
          :disabled="loading"
          :counter="48"
          :rules="[v => !!v || 'Nome é necessário.']"
          v-model="name"
          label="Nome"
          required
        ></v-text-field>

        <v-text-field
          :loading="loading"
          :disabled="loading"
          :counter="48"
          :rules="[v => !!v || 'Sobrenome é necessário.']"
          v-model="lastName"
          label="Sobrenome"
          required
        ></v-text-field>

        <v-text-field
          :loading="loading"
          :disabled="loading"
          :counter="48"
          :rules="[v => !!v || 'CPF é necessário.']"
          v-model="cpf"
          label="CPF"
          v-mask="'###.###.###-##'"
          required
        ></v-text-field>

        <v-text-field
          :loading="loading"
          :disabled="loading"
          :counter="48"
          :rules="[v => !!v || 'E-mail é necessário.', v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido.']"
          v-model="email"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          :loading="loading"
          :disabled="loading"
          :counter="48"
          :rules="[v => !!v || 'Telefone é necessário.']"
          v-model="phone"
          label="Telefone"
          v-mask="'(##) #####-####'"
          required
        ></v-text-field>

        <v-text-field
          :loading="loading"
          :disabled="loading"
          :counter="48"
          :rules="[v => !!v || 'Endereço é necessário.']"
          v-model="address"
          label="Endereço"
          required
        ></v-text-field>
        
        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[v => !!v || 'Senha é necessário.']"
          :type="show ? 'text' : 'password'"
          :counter="12"
          label="Senha"
          hint="Senha deve possuir no mínimo 12 caracteres."
          @click:append="show=!show"
        ></v-text-field>

        <v-text-field
          :loading="loading"
          :disabled="loading"
          :counter="48"
          :rules="[v => !!v || 'É preciso confirmar senha.', v => password === confirmPassword || 'As senhas não são as mesmas.']"
          type="password"
          v-model="confirmPassword"
          label="Confirmar Senha"
          required
        ></v-text-field>

        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :rules="[v => !!v || 'Data de nascimento é necessário.']"
              v-model="date"
              label="Data de Nascimento"
              prepend-icon="mdi-calendar"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal=false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>

        <v-select
          :items="[{ key: 'WORKER', label: 'Prestador de serviço' }, { key: 'CONSUMER', label: 'Consumidor' }]"
          :rules="[v => !!v || 'Selecione uma opção.']"
          item-text="label"
          item-value="key"
          v-model="type"
          label="Você usará o app como?"
        ></v-select>
        
        <v-row>
          <v-spacer></v-spacer>
          <v-btn
            @click="register"
            large
            color="primary"
          >Cadastrar</v-btn>
          <v-spacer></v-spacer>
        </v-row>
      </v-form>
    </v-container>
  </v-fade-transition>
</template>

<script>
import { mask } from 'vue-the-mask';
import { instanceUserAPI } from '../../api/index';
import { FEEDBACK_MESSAGES } from 'Helpers/helpers';

export default {
  name: 'form-register',
  components: { },
  directives: { mask },
  data() {
    return {
      loading: false,
      render: '',
      photo: null,
      name: '',
      lastName: '',
      cpf: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirmPassword: '',
      type: '',
      modal: null,
      date: '',
      show: false
    }
  },
  methods: {
    formData() {
      let form = new FormData();
      form.append('photo', this.photo);
      form.append('first_name', this.name);
      form.append('last_name', this.lastName);
      form.append('email', this.email);
      form.append('cpf', this.cpf);
      form.append('phone', this.phone);
      form.append('address', this.address);
      form.append('password', this.password);
      form.append('birth_date', this.date);
      form.append('type', this.type);
      return form;
    },
    register() {
      if (this.$refs.form.validate()) {
        instanceUserAPI
          .post(this.formData())
          .then(response => {
            console.log(response);
            this.$store.dispatch('showSuccessMessage', FEEDBACK_MESSAGES.REGISTER_OK);
          })
          .catch(err => {
            this.$store.dispatch('showErrorMessage', {
              code: "TDR#1",
              title: FEEDBACK_MESSAGES.REGISTER_FAIL,
              description: err.response.data
            });
            console.log(err);
          });
      }
    }
  },
  watch: {
    photo(val) {
      if(val) {
        var reader = new FileReader();
        var imgtag = this.$refs.image;
        imgtag.title = val.name;
        reader.onload = (event) => {
          this.render = event.target.result;
        };
        reader.readAsDataURL(val);
      }else{
        this.render = '';
      }
    }
  }
};
</script>
