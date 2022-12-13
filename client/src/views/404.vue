<template>
  <div>
    <v-parallax
      dark
      v-bind:src="'http://aimoficial.com/images/iniback2.png'"
      
      height="720"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class=""
          cols="11"
        >
          <p style="font-size:140px;" class="text-center">
            4<img width="110" height="110" v-bind:src="'http://aimoficial.com/images/aim_logobn.png'" />4
          </p>
          <h1 class="text-center display-1 font-weight-thin mb-4 white--text">
            PAGINA NO ENCONTRADA O EN MANTENIMIENTO
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    drawer: null
  })
})