<template>
  <v-app>

    <aheader/>


    <v-main>
      <router-view>
      </router-view>
    </v-main>

    <afoother/>
  
  </v-app>
</template>

<script>
import aheader from './app_h.vue';
import afoother from './app_f.vue';
//import Header from './app_h.vue'

export default {
  name: 'App',

  components: { afoother, aheader},

  data: () => ({
    //
  }),
};
</script>
