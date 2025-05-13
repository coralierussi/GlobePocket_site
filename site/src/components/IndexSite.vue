<template>
    <main id="indexSite">
        <HeaderSite/>
        
        <div class="img-presentation">
            <img class="img-montagne" src="../assets/Photos site/header.jpeg" alt="Image montagne" >
            <div class="text-presentation">
                <h1>
                    <!-- <img src="" alt=""> -->
                    Le combo parfait :
                </h1>
                <h1>bons plans, vrais gens, vrais conseils</h1>
            </div>
            <div class="video-presentation d-flex">
                <div class="lien-video">
                    <span>1 minute de vidéo</span>
                    <a href="">
                        <p>pour TOUT comprendre</p>
                    </a>
                </div>
                <div class="fleche">
                    <v-icon class="fleche-icon">mdi-redo</v-icon>
                </div>
            </div>
        </div>

        <FooterSite/>
    </main>
  </template>
  
  <script>
//   import CoupCoeurs from './CoupCoeurs.vue';
  import HeaderSite from './HeaderSite.vue';
//   import ActiviteNouveaute from './ActiviteNouveaute.vue';
  import FooterSite from './FooterSite.vue';
//   import OrganisationVoyage from './OrganisationVoyage.vue';
  
  export default {
    name: 'IndexSite',
    components: { HeaderSite, FooterSite},
    data(){
      return {
        // showOrgaVoyage: false,
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
}
.img-presentation {
    position: relative;
    width: 100%;
    height: 100vh;
    .img-montagne {
      width: 100%;
      height: 100%;
      object-fit: cover; 
      object-position: center; 
      display: block;
    }
    .text-presentation {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%); 
        color: white;
        text-align: center;
        width: 100%;
        z-index: 10; 
        h1 {
          font-size: 50px;
          font-weight: 700;
        }
    }
    .video-presentation {
        position: absolute;
        bottom: 90px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        text-align: center;
        

        .lien-video {
          background-color: #c55230;
          padding: 10px 20px;
          border-radius: 10px;

          p {
            margin: 0;
            font-size: 1.2rem;

          }
          span{
            font-size: 1.2rem;
            font-weight: bold;
          }

          a {
            color: #fff;
            text-decoration: underline;
          }
        }
        .fleche {
           position: absolute;
            bottom: 30px;
            left: 120%;
            transform: translateX(-50%);
            z-index: 10;

          .fleche-icon {
            transform: rotate(140deg);
            color: #c55230;
            width: 70px;
            font-size: 70px; 
          }
        }
    }
}
  
  </style>