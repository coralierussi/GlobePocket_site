<template>
  <v-app>
    <main id="valiseSite">
      <HeaderSite/>
      <p class="title">ValiseSite</p>
      <FooterSite/>
    </main>
  </v-app>
</template>
  
  <script>
  import HeaderSite from './HeaderSite.vue';
  import FooterSite from './FooterSite.vue';
  
  export default {
    name: 'ValiseSite',
    components: { HeaderSite, FooterSite},
    data(){
      return {
       
      }
    },
  }
  </script>
  
  <style sccs scoped>  
  </style>
  