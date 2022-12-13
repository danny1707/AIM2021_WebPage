<template>
    
    <v-toolbar
      app
      color="#000000"
      dark
      height="107"
      padless
    >
      <router-link :to="{name: 'Home'}">
        <v-img
          alt="Vuetify Logo"
          class="shrink ml-5"
          contain
          v-bind:src="'../public/src/img/aim_logo.png'"
          transition="scale-transition"
          width="90"
        >
        </v-img>
      </router-link>
    
      <v-btn
        elevation="0"
        plain
        text
        class="ml-15"
      >
        <router-link tag="_" :to="{name: 'Home'}">Home</router-link>
      </v-btn>

      <v-btn
        elevation="0"
        plain
        text
        class="ml-8"
      >
        <router-link tag="_" :to="{name: 'Notfound'}">Nosotros</router-link>
      </v-btn>

      <v-btn
        elevation="0"
        plain
        text
        class="ml-8"
      >
        <router-link tag="_" :to="{name: 'Notfound'}">Comunidades</router-link>
      </v-btn>

      <v-btn
        elevation="0"
        plain
        text
        class="ml-8"
      >
        <router-link tag="_" :to="{name: 'Notfound'}">Eventos</router-link>
      </v-btn>

  <!-- SEPARADOR -- SEPARADOR -- SEPARADOR -- SEPARADOR -- SEPARADOR -->
  <!-- SEPARADOR -- SEPARADOR -- SEPARADOR -- SEPARADOR -- SEPARADOR -->

  <v-spacer></v-spacer>
  <div class="ml-10">
    <v-btn
      elevation="2"
      large
      outlined
      plain
      rounded
      tile
    >
      <router-link tag="_" :to="{name: 'Notfound'}">Iniciar sesión</router-link>
    </v-btn>
  </div>
    </v-toolbar>
</template>