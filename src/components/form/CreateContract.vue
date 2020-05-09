<template>
  <v-form :status="loading" ref="form" lazy-validation>
    <p>
    O contrato a seguir foi construído sobre a proposta {{ tender }},
    doravante denominada {{contractor}} e, 
    com moradia em  Belo Horizonte/ MG, na Rua A
    cujo CPF sob o n° XXX.XXX.XXX-XX, doravante 
    denominada {{ hired }},
    tem entre si justo e contratado o que abaixo se segue:
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
  import RuleField from '../field/RuleField';

export default {
  name: 'create-needs',
  components: { RuleField },
  data() {
    return {
      tender: '#123456',
      contractor: 'CONTRATANTE',
      hired: 'CONTRATADO',
      rules: [],
      loading: false,
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
      console.log(this.tender);
      console.log(this.contractor);
      console.log(this.hired);
      console.log(this.rules);
      console.log('Criar contrato.')
    }
  }
};
</script>
