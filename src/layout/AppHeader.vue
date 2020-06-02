<template>
  <header>
      <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $store.getters.getUserName }}</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="logout"
          >
            <v-list-item-title>Deslogar</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    methods: {
      logout() {
        sessionStorage.clear();
        window.location.href = '/';
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>