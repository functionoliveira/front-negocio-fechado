<template>
  <div>
    <v-dialog persistent v-model="show" max-width="500">
      <v-alert border="top" colored-border type="success" class="mb-0">
        <v-row align="center" class="mx-0 my-0">
          <v-col class="grow px-0 py-0">{{ message }}</v-col>
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
  name: 'alertar-sucesso',
  computed: {
    ...mapGetters({
      show: 'getSuccessShow',
      message: 'getSuccessMessage'
    })
  },
  methods: {
    ...mapActions({
      close: 'closeSuccessMessage'
    })
  },
};
</script>
