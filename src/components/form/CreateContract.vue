<template>
  <v-form :status="loading" ref="form" lazy-validation>
    <p>
    O contrato a seguir foi construído sobre a proposta {{ title }},
    doravante denominada {{ contractor.full_name }} e, cujo CPF sob o 
    n° {{ contractor.cpf }}, doravante denominada {{ hired.full_name }}, cujo 
    CPF sob o n° {{ hired.cpf }}, tem entre si justo e contratado 
    o que abaixo se segue:
    </p>
    <rule-field 
      v-for="i in rules.length" 
      :key="i" 
      :rulesQtd="i"
      :title="rules[i-1].title"
      :articles="rules[i-1].articles"
      @title="$evt => { rules[i-1].title = $evt }"
    ></rule-field>
    <v-col class="text-right">
      Adicionar regra.
      <v-btn @click="addRule" class="mx-2" fab dark color="primary">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-col>
    <v-row>
      <v-col>
        <div class="my-2">
          <v-btn @click="create" color="primary">Criar Contrato</v-btn>
        </div>
      </v-col>  
    </v-row>
  </v-form>

</template>

<script>
  import { instanceContractAPI } from '../../api/index';
  import RuleField from '../field/RuleField';

export default {
  name: 'create-needs',
  components: { RuleField },
  props: {
    id: Number,
    title: String,
    proposer: Object
  },
  data() {
    return {
      rules: [],
      loading: false,
    }
  },
  computed: {
    contractor: {
      get() {
        if(this.proposer.type === 'CONSUMER') {
          return this.proposer;
        }else{
          return this.$store.getUser;
        }
      }
    },
    hired: {
      get() {
        if(this.proposer.type === 'WORKER') {
          return this.proposer;
        }else{
          return this.$store.getters.getUser;
        }
      }
    } 
  },
  methods: {
    addRule() {
      let rule = {
        title: '',
        articles: []
      }
      this.rules.push(rule);
    },
    create() {
      let body = {
        tender: this.id,
        contractor: this.contractor.id,
        hired: this.hired.id,
        rules: JSON.stringify(this.rules),
        state: 1
      };

      instanceContractAPI
        .post(body)
        .then(response => {
          console.log(response);
        })    
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
