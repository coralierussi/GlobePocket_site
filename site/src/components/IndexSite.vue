<template>
    <main id="indexSite">
        <HeaderSite/>
        
        <div class="img-presentation">
            <img class="img-montagne" src="../assets/PhotosSite/header.jpeg" alt="Image montagne" >
            <div class="text-presentation">
                <h1>
                    Bons plans, itinéraires, communauté : votre voyage prêt en quelques minutes.
                </h1>
            </div>
        </div>

        <div class="service">
            <p class="titre-service">Ce qu'on vous propose chez Globe Pocket</p>
            <div class="serviceDetails d-flex">
                <div class="bons-conseils">
                    <img class="picto-service" src="../assets/Pictos/boussole@4x.png">
                    <p class="title"> Les meilleurs bons plans </p>
                    <p class="description"> Des bons plans exclusifs, adaptés à vous pas juste à votre destination</p>
                </div>
                <div class="communaute">
                    <img class="picto-service" src="../assets/Pictos/discussion@4x.png">
                    <p class="title"> Une communauté engagée </p>
                    <p class="description"> Des retours concrets, des récits vécus, des échanges utiles</p>
                </div>
                <div class="bons-conseils">
                    <img class="picto-service" src="../assets/Pictos/panneaux@4x.png">
                    <p class="title"> Des conseillers au plus près </p>
                    <p class="description"> On vous parle, on vous comprends, on vous guide - pour de vrai</p>
                </div>
            </div>
        </div>

        <div class="resultat">
            <div class="container-resultat">
                <img class="img-resultat" src="../assets/PhotosSite/AdobeStock_602986305.png" alt="">
                <div class="en-tete">
                    <img class="img-logo-mono" src="../assets/Logo/mono original@4x.png" alt="">
                    <div class="text-resultat">
                        <span class="title-resultat">On fait toujours le maximum pour vous offrir le meilleur.</span>
                        <p class="sous-titre-resultat">Votre satisfaction est notre principale priorité</p>
                    </div>
                </div>
                <div class="carte">
                    <div class="voyage">
                        <img class="img-voyage" src="../assets/Pictos/calendrier@4x.png" alt="">
                        <p class="number">2 500</p>
                        <p class="text">voyage en une année</p>
                    </div>
                    <div class="voyage">
                        <img class="img-voyage" src="../assets/Pictos/chaussure@4x.png" alt="">
                        <p class="number">+5K</p>
                        <p class="text">voyageurs</p>
                    </div>
                    <div class="voyage">
                        <img class="img-voyage" src="../assets/Pictos/maps@4x.png" alt="">
                        <p class="number">650+</p>
                        <p class="text">lieux secrets</p>
                    </div>
                    <div class="voyage">
                        <img class="img-voyage" src="../assets/Pictos/sac@4x.png" alt="">
                        <p class="number">87%</p>
                        <p class="text">de nos voyageurs nous font confiance</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="destinations">
            <p class="title-destinations">Les destinations préférées de NOTRE communauté !</p>
            <div class="voyage-destinations d-flex">
                <div class="img-carte-point">
                    <img class="img-destination" src="../assets/PhotosSite/carte-points.png" alt="">
                </div>
                <div class="destination-details">
                    <div class="lieux">
                        <div class="carte-lieux d-flex">
                            <img class="img-carte-lieux" src="../assets/PhotosSite/Thaïlande.jpeg" alt="">
                            <p class="nom-lieux">Thaïlande</p>
                            <a href="/activiteThailande">
                                <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                            </a>
                            <img class="img-carte-lieux" src="../assets/PhotosSite/idonésie.jpeg" alt="">
                            <p class="nom-lieux">Indonésie</p>
                            <a href="/activiteIndonesie">
                                <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                            </a>
                        </div>
                        <div class="carte-lieux d-flex">
                            <img class="img-carte-lieux" src="../assets/PhotosSite/New zeland.jpeg" alt="">
                            <p class="nom-lieux">Venezuela</p>
                            <a href="/activiteVenezuela">
                                <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                            </a>
                            <img class="img-carte-lieux" src="../assets/PhotosSite/slovaquie.jpeg" alt="">
                            <p class="nom-lieux">Slovaquie</p>
                            <a href="/activiteSlovaquie">
                                <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                            </a>
                        </div>
                        <div class="carte-lieux d-flex">
                            <img class="img-carte-lieux" src="../assets/PhotosSite/argentine.jpeg" alt="">
                            <p class="nom-lieux">Argentine</p>
                            <a href="/activiteArgentine">
                                <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                            </a>
                            <img class="img-carte-lieux" src="../assets/PhotosSite/nicaragua.jpeg" alt="">
                            <p class="nom-lieux">Nicaragua</p>
                            <a href="/activiteNicaragua">
                                <v-icon class="icon-arrow">mdi-chevron-right</v-icon>
                            </a>
                        </div>
                    </div>
                    <div class="btn-destination">
                        <v-btn class="text-btn-destination">Je choisis ma destination</v-btn>
                    </div>
                </div>
            </div>
        </div>

        <div class="offre-coup-coeur">
            <span class="title-offre">Nos offres coups de coeurs du moment !</span>
            <div class="tag d-flex">
                <div class="pays">
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
            <div class="details-coups-coeur d-flex">
                <div class="carte-coups-coeurs">
                    <img class="img-act-coeur" src="../assets/PhotosSite/idonésie.jpeg" alt="">
                    <div class="temps-prix d-flex">
                        <p class="temps">3 jours, 2 nuits</p>
                        <p class="prix">500€ / personne</p>
                    </div>
                    <!-- <div class="description-coups-coeurs"> -->
                        <p class="text-description-coup-coeur">Explorez la beauté de l'île pendant 3 jours et 2 nuits avec notre agence de voyage</p>
                    <!-- </div> -->
                     <div class="pays-details d-flex">
                        <div class="pays-name d-flex">
                            <img class="picto-maps" src="../assets/Pictos/maps@4x.png" alt="">
                            <p class="name-pays">Indonésie</p>
                        </div>
                        <div class="lien-offre">
                            <a href="/offreIndonésie">
                                <p class="text-lien-offre">Découvrir</p>
                            </a>
                        </div>
                     </div>
                </div>
                <div class="carte-coups-coeurs">
                    <img class="img-act-coeur" src="../assets/PhotosSite/japon.jpeg" alt="">
                    <div class="temps-prix d-flex">
                        <p class="temps">3 jours, 2 nuits</p>
                        <p class="prix">600€ / personne</p>
                    </div>
                    <!-- <div class="description-coups-coeurs"> -->
                        <p class="text-description-coup-coeur">Explorez les montagnes et les paysages majestueux jours et nuits </p>
                    <!-- </div> -->
                     <div class="pays-details d-flex">
                        <div class="pays-name d-flex">
                            <img class="picto-maps" src="../assets/Pictos/maps@4x.png" alt="">
                            <p class="name-pays">Japon</p>
                        </div>
                        <div class="lien-offre">
                            <a href="/offreJapon">
                                <p class="text-lien-offre">Découvrir</p>
                            </a>
                        </div>
                     </div>
                </div>
                <div class="carte-coups-coeurs">
                    <img class="img-act-coeur" src="../assets/PhotosSite/italie.jpeg" alt="">
                    <div class="temps-prix d-flex">
                        <p class="temps">3 jours, 2 nuits</p>
                        <p class="prix">500€ / personne</p>
                    </div>
                    <!-- <div class="description-coups-coeurs"> -->
                        <p class="text-description-coup-coeur">Explorez la beauté de l'île pendant 3 jours et 2 nuits avec notre agence de voyage</p>
                    <!-- </div> -->
                     <div class="pays-details d-flex">
                        <div class="pays-name d-flex">
                            <img class="picto-maps" src="../assets/Pictos/maps@4x.png" alt="">
                            <p class="name-pays">Italie</p>
                        </div>
                        <div class="lien-offre">
                            <a href="/offreItalie">
                                <p class="text-lien-offre">Découvrir</p>
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
    color: black;
}

.img-presentation {
    position: relative;
    top: 0;
    margin-top: -100px;
    width: 100%;
    height: 100vh;
    z-index: -1;
    .img-montagne {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover; 
        object-position: center; 
        display: block;
        z-index: -10000;
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

.service{
    margin: 100px 0px;
    .titre-service{
        text-align: center;
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    .serviceDetails{
        margin: 0% 12.5%;
        width: 75%;
        justify-content: center;
        margin-bottom: 20px;
        .bons-conseils{
            width: 80%;
            padding: 10px;
            background-color:rgba(244, 231, 198, 0.5);
            border-radius: 10px;
            .picto-service{
                width: 50px;
                height: 50px;
            }
            .title{
                font-size: 20px;
                font-weight: 700;
            }
            .description{
                font-size: 15px;
                font-weight: 400;
            }
        }
        .communaute{
            width: 80%;
            margin: 0% 5%;
            border-radius: 10px;
            padding: 10px;
            border: 2px solid rgba(244, 231, 198, 0.5);
            .picto-service{
                width: 50px;
                height: 50px;
            }
            .title{
                font-size: 20px;
                font-weight: 700;
            }
            .description{
                font-size: 15px;
                font-weight: 400;
            }
        }
    }
}

.resultat{
    .container-resultat{
        position: relative;
        height: 600px;
        /* Image carte fond */
        .img-resultat{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover; 
            object-position: center; 
            display: block;
            z-index: -1;
            background-color:  rgba(171, 171, 171, 0.4);
            opacity: 0.3;
        }
        .en-tete{
            position: relative;
            z-index: 10;
            top: -10%;
            .img-logo-mono{
                margin-left: 3%;
                width: 130px;
                transform: rotate(-10deg);
            }
            .text-resultat{
                width: 30%;
                margin: 0% 35%;
                text-align: center;
                .title-resultat{
                    font-size: 25px;
                    font-weight: 700;
                }
                .sous-titre-resultat{
                    font-size: 14px;
                    margin-bottom: 50px;
                }
            }
        }
        .carte{
            display: flex;
            justify-content: space-around;
            .voyage{
                width: 15%;
                height: 200px;
                background-color: white;
                text-align: center;
                /* margin: 0% 5%; */
                padding: 20px;
                border-radius: 10px;
                .img-voyage{
                    width: 65px;
                }
                .number{
                    font-size: 30px;
                    font-weight: 700;
                }
                .text{
                    font-size: 15px;
                    font-weight: 400;
                }
            }
        }
    }
}

.destinations{
    margin: 70px 0px;
    .title-destinations{
        text-align: center;
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 50px;
        color: #EAA854;
    }
    .voyage-destinations{
        width: 100%;
        .img-carte-point{
            width: 50%;
            .img-destination{
                width: 550px;
                height: 500px;
            }
        }
        .destination-details{
            width: 40%;
            margin: 0% 5%;
            .img-carte{
                width: 100%;
                height: 100%;
                object-fit: cover; 
                object-position: center; 
                display: block;
            }
            .lieux{
                width: 50%;
                margin-left: 20px;
                .carte-lieux{
                    width: 80%;
                    padding: 10px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    .img-carte-lieux{
                        width: 50px;
                        height: 50px;
                    }
                    .nom-lieux{
                        font-size: 20px;
                        font-weight: 700;
                        margin-left: 10px;
                    }
                    .icon-arrow{
                        font-size:30px;
                        margin-left:auto;
                    }
                }
            }
            .btn-destination{
                display: flex;
                justify-content: center;
                margin-top: 20px;
                box-shadow: none;
                .text-btn-destination{
                    background-color: #c55230;
                    padding: 10px 20px;
                    border-radius: 20px;
                    color: white;
                    text-transform: none;
                    font-size: 15px;
                    font-weight: 600;
                }
            }
        }
    }
}

.offre-coup-coeur{
    .title-offre{
        text-align: center;
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    .tag{
        margin: 0% 5%;
        width: 90%;
        justify-content: center;
        .bonPlan{
            background-color: #F4E7C6;
            padding: 10px;
            border-radius: 10px;
            margin-right: 10px;
            .text-bon-plan{
                font-size: 20px;
                font-weight: 700;
            }
        }
    }
    .details-coups-coeur{
        .carte-coups-coeurs{
            .img-act-coeur{
                width: 70%;
            }
            .pays-details{
                .pays-name{
                    display: flex;
                    align-items: center;
                    .picto-maps{
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
    }
}
</style>