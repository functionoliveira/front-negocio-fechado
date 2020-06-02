<template>
  <div>
    <v-dialog persistent v-model="show" max-width="500">
      <v-alert border="top" colored-border type="error" class="mb-0">
        <v-row align="center" class="mx-0 my-0">
          <v-col class="grow px-0 py-0">
            <h3>{{code}}:{{title}}</h3>
            <small>{{message}}</small>
          </v-col>
          <v-col class="shrink">
            <v-btn @click="close" color="primary">Fechar</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'alerta-erro-global',
  computed: {
    ...mapGetters({
      show: 'getErrorShow',
      code: 'getErrorCode',
      title: 'getErrorTitle',
      message: 'getErrorMessage'
    })
  },
  methods: {
    ...mapActions({
      close: 'closeErrorMessage'
    })
  },
};
</script>
