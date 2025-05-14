<template>
    <main id="indexSite">
        <HeaderSite/>
        
        <div class="img-presentation">
            <img class="img-montagne" src="../assets/Photos site/header.jpeg" alt="Image montagne" >
            <div class="text-presentation">
                <h1>
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

        <div class="service">
            <h3>Ce qu'on vous propose</h3>
            <div class="serviceDetails d-flex">
                <div class="bonsPlan">
                    <!-- <img class="" src="" alt=""> -->
                    <p class="title"> Les meilleurs bons plans </p>
                    <p class="description"> Des bons plans exclusifs, adaptés à vous pas juste à votre destination</p>
                </div>
                <div class="communaute">
                    <!-- <img class="" src="" alt=""> -->
                    <p class="title"> Une communauté engagée </p>
                    <p class="description"> Des retours concrets, des récits vécus, des échanges utiles</p>
                </div>
                <div class="conseil">
                    <!-- <img class="" src="" alt=""> -->
                    <p class="title"> Des conseillers au plus près </p>
                    <p class="description"> On vous parle, on vous comprends, on vous guide - pour de vrai</p>
                </div>
            </div>
        </div>

        <div class="resultat">
            <div class="en-tete">
                <img class="img-logo-mono" src="../assets/Logo/mono original@4x.png" alt="">
                <p class="title-resultat">On fait toujours le maximum <br> pour vous offrir le meilleur.</p>
                <p class="sous-titre-resultat">Votre satisfaction est notre principale priorité</p>
            </div>
            <div class="carte">
                <div class="voyage">
                    <img class="img-voyage" src="" alt="">
                    <span class="number">2 500</span>
                    <p class="text">voyage en une année</p>
                </div>
                <div class="voyage">
                    <img class="img-voyage" src="" alt="">
                    <span class="number">+ 5K</span>
                    <p class="text">voyageurs</p>
                </div>
                <div class="voyage">
                    <img class="img-voyage" src="" alt="">
                    <span class="number">650+</span>
                    <p class="text">lieux secrets</p>
                </div>
                <div class="voyage">
                    <img class="img-voyage" src="" alt="">
                    <span class="number">87%</span>
                    <p class="text">de nos voyageurs nous font confiance</p>
                </div>
            </div>
        </div>

        <div class="destinations">
            <span class="title-destinations">Les destinations préférées de NOTRE communauté</span>
            <div class="destination-details d-flex">
                <img class="img-carte" src="" alt="">
                <div class="lieux">
                    <div class="carte-lieux d-flex">
                        <img class="img-carte-lieux" src="" alt="">
                        <p class="nom-lieux">Thaïlande</p>
                        <p class="details-lieux">+ de 20 activités à ne pas manquer</p>
                        <a href="/activiteThailande">
                            <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                        </a>
                    </div>
                    <div class="carte-lieux d-flex">
                        <img class="img-carte-lieux" src="" alt="">
                        <p class="nom-lieux">Indonésie</p>
                        <p class="details-lieux">10 activités inoubliables</p>
                        <a href="/activiteIndonesie">
                            <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                        </a>
                    </div>
                    <div class="carte-lieux d-flex">
                        <img class="img-carte-lieux" src="" alt="">
                        <p class="nom-lieux">Nouvelle Zélande</p>
                        <p class="details-lieux">20+ Spots 3D & 2N</p>
                        <a href="/activiteNouvelleZelande">
                            <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="offre-coup-coeur">
            <span class="title-offre">Nos offres coups de coeurs du moment !</span>
            <div class="tag d-flex">
                <div class="bonPlan">
                    <p class="text-bon-plan">Bons plans</p>
                </div>
                <div class="pays">
                    <p class="text-bon-plan">France</p>
                </div>
                <div class="pays">
                    <p class="text-bon-plan">Asie du sud</p>
                </div>
                <div class="pays">
                    <p class="text-bon-plan">Océanie</p>
                </div>
                <div class="pays">
                    <p class="text-bon-plan">Europe</p>
                </div>
                <div class="pays">
                    <p class="text-bon-plan">Afrique</p>
                </div>
            </div>
            <div class="details-coups-coeur">
                <div class="carte-coups-coeurs">
                    <img class="img-act-coeur" src="" alt="">
                    <div class="temps-prix d-flex">
                        <p class="temps">3 jours, 2 nuits</p>
                        <p class="prix">500€ / personne</p>
                    </div>
                    <!-- <div class="description-coups-coeurs"> -->
                        <p class="text-description-coup-coeur">Explorez la beauté de l'île pendant 3 jours et 2 nuits avec notre agence de voyage</p>
                    <!-- </div> -->
                     <div class="pays-details d-flex">
                        <div class="pays-name">
                            <!-- Search img (elements graphique) ou icon -->
                             <p class="name-pays">Indonésie</p>
                        </div>
                        <div class="lien-offre">
                            <a href="/offreIndonésie">
                                <p class="text-lien-offre">En voir plus</p>
                            </a>
                        </div>
                     </div>
                </div>
            </div>
        </div>

        <FooterSite/>
    </main>
  </template>
  
  <script>
  import HeaderSite from './HeaderSite.vue';
  import FooterSite from './FooterSite.vue';
  
  export default {
    name: 'IndexSite',
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

/* .service{

} */

.resultat{
    .en-tete{
        .img-logo-mono{
            width: 90px;
        }
    }
}

/* .destinations{

} */
  
  </style>