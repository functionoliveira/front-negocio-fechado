<template>
  <v-container>
    <p>
      O contrato a seguir foi construído sobre a proposta {{ title }},
      doravante denominada {{ contractorFullName }} e, cujo CPF sob o 
      n° {{ contractorCPF }}, doravante denominada {{ hiredFullName }}, cujo 
      CPF sob o n° {{ hiredCPF }}, tem entre si justo e contratado 
      o que abaixo se segue:
    </p>
    <p>
      {{ description }}
    </p>
  </v-container>
</template>

<script>
export default {
  name: 'contract-header',
  props: { 
    title: String,
    contractorFullName: String,
    contractorCPF: String,
    hiredFullName: String,
    hiredCPF: String,
    description: String
  }
};
</script>
