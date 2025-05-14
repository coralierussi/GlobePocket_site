<template>
  <v-app>
    <main id="connectionSite">
      <HeaderSite/>
      <p class="title">Connexion</p>
      <FooterSite/>
    </main>
  </v-app>
</template>
  
  <script>
  import HeaderSite from './HeaderSite.vue';
  import FooterSite from './FooterSite.vue';
  
  export default {
    name: 'ConnectionSite',
    components: { HeaderSite, FooterSite},
    data(){
      return {
       
      }
    },
  }
  </script>
  
  <style sccs scoped>  
  </style>
  