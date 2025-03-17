<template>
    <main id="contact">
      <HeaderSite/>
      <div>
        TEST
      </div>
      <FooterSite/>
    </main>
  </template>
  
  <script>
  import HeaderSite from './components/HeaderSite.vue';
  import FooterSite from './components/FooterSite.vue';
  
  export default {
    name: 'Contact',
    components: { HeaderSite, FooterSite},
    data(){
      return {
  
      }
    },
  }
  </script>
  
  <style sccs scoped>
  
  a{
      text-decoration: none;
  }
  
  </style>
  