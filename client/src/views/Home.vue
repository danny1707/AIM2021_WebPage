<template>
<div>
  <iniuno />
  <inidos />
  <initres />
  <inicuatro />
</div>
</template>

<script>
import iniuno from './ini_1.vue' //presentacion con logo
import inidos from './ini_2.vue' //carousel
import initres from './ini_3.vue' //Ven y unete a nuestra comunidad
import inicuatro from './ini_4.vue'

export default 
{
  components: { iniuno, inidos, initres, inicuatro},
}
</script>

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    drawer: null
  })
})