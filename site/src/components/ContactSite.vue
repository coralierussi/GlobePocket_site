<template>
    <main id="contactSite">
      <HeaderSite/>
      <h1>
        TEST
      </h1>
      <FooterSite/>
    </main>
  </template>
  
  <script>
  import HeaderSite from './HeaderSite.vue';
  import FooterSite from './FooterSite.vue';
  
  export default {
    name: 'ContactSite',
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
  