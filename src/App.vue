<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      outlined
    >
      <v-app-bar-nav-icon>
        <v-icon
        color="primary"
        x-large
        >
        mdi-image-filter-drama
        </v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title><b>BG remover</b></v-toolbar-title>

      
    </v-app-bar>

    <v-main>
      <DashBoard />
    </v-main>
  </v-app>
</template>

<script>
import DashBoard from './components/DashBoard.vue';
export default {
  name: 'App',

  components: {
    DashBoard
},

  data: () => ({
    //
  }),
};
</script>
