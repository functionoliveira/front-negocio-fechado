<template>
    <v-tabs
      v-model="changeTab"
      background-color="transparent"
      color="basil"
      grow
      centered
      icons-and-text
    >
      <v-tab :key="1">
        <v-icon>mdi-home</v-icon>  
      </v-tab>
      <v-tab :key="2">
        <v-icon>mdi-certificate</v-icon>  
      </v-tab>
      <v-tab :key="3">
        <v-icon>mdi-gavel</v-icon>
      </v-tab>
      <v-tab :key="4">
        <v-icon>mdi-offer</v-icon>
      </v-tab>

      <slot name="tab-item"></slot>
    </v-tabs>
</template>

<script>
  export default {
    name: 'main-tab',
    components: { },
    props: {
        tab: Number
    },
    computed: {
        changeTab: {
            get() {
                return this.tab;
            },
            set(val) {
                this.$emit('tab', val);
            }
        }
    }
  }
</script>
