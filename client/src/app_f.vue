<template>
  <div>
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <a tag="_" :href="'//' + icon.title" target="_blank">
          <v-icon size="24px" color="blue" disabled>
            {{ icon.icon }}
          </v-icon>
        </a>
        </v-btn>
      </v-card-text>

      <!--
      <v-card-text class="white--text pt-0">
      Prototipo de footer pensado en los colores que componen a la organizacion siguiendo el esquema de trabajo visto el día miercoles 23, y replanteado por el equipo de desarrollo el día 26. Este prototipo no es la version final de foooter y header del sitio pero es una vista rapida a los conceptos en cuenta.
      </v-card-text>
      -->
      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>Asociación de Ingenieros Mecatrónicos</strong> 
       <br>© {{ new Date().getFullYear() }} — Todos los derechos reservados
      </v-card-text>
      
    </v-card>
    
  </v-footer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      shet: false,
      icons: [
        { icon: 'fab fa-facebook-f', title: 'www.facebook.com/AsoIngMec' },
        { icon: 'fab fa-whatsapp', title: '#' },
        { icon: 'fab fa-linkedin-in', title: 'www.linkedin.com/company/asociacion-de-ingenieros-mecatronicos' },
        { icon: 'fab fa-instagram', title: 'www.instagram.com/asoingmec?igshid=tmr7tmhu6c8r' },
      ],
    }),
  }
</script>