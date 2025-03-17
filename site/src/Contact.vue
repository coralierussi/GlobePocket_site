<template>
    <main id="contact">
      <HeaderSite/>
      
      <FooterSite/>
    </main>
  </template>
  
  <script>
  import HeaderSite from './components/HeaderSite.vue';
  import FooterSite from './components/FooterSite.vue';
  
  export default {
    name: 'App',
    components: { HeaderSite, FooterSite},
    data(){
      return {
  
      }
    },
  }
  </script>
  
  <style sccs scoped>
  
  *{
      margin: 0%;
      padding: 0%;
  
  }
  a{
      text-decoration: none;
  }
  
  </style>
  