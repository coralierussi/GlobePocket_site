<template>
    <main id="activitesPage">
        <HeaderSite/>
        
        <div class="img-presentation">
            <img class="img-activites" src="../assets/PhotosSite/principale-activite.jpeg" alt="Image page activités" >
            <div class="text-presentation">
                <h1>Découvrez les meilleurs activités à faire pendant ton voyage !</h1>
                <p>Culture, nature, sensations fortes ou détente : choisis ce qui te fais envie</p>
            </div>
        </div>

        <FooterSite/>
    </main>
  </template>
  
  <script>
  import HeaderSite from './HeaderSite.vue';
  import FooterSite from './FooterSite.vue';
  
  export default {
    name: 'ActivitesPage',
    components: { HeaderSite, FooterSite},
    data(){
      return {
      }
    },
    methods: {
    }
  }
</script>
  
<style sccs scoped>
  
*{
    margin: 0%;
    padding: 0%;

}

a{
    text-decoration: none;
    color: black;
}

.img-presentation {
    position: relative;
    top: 0;
    margin-top: -100px;
    width: 100%;
    height: 100vh;
    z-index: -1;
    .img-activites {
        position: relative;
        width: 100%;
        height: 70%;
        object-fit: cover; 
        object-position: center; 
        display: block;
        z-index: -10000;
        opacity: 0.9;
    }
    .text-presentation {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%); 
        color: white;
        text-align: center;
        width: 75%;
        z-index: 10; 
        h1 {
          font-size: 40px;
          font-weight: 700;
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        p{
            margin-top: 10px;
            font-size: 20px;
            font-weight: 500;
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
        }
    }
}

</style>