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
                    <div class="grid-lieux">
                        <div
                          class="carte-lieu"
                          v-for="(lieu, index) in lieux"
                          :key="index"
                        >
                        <router-link :to="lieu.lien">
                          <img :src="lieu.image" :alt="lieu.nom" class="img-carte-lieu" />
                          <div class="info-lieu">
                            <p class="nom-lieu">{{ lieu.nom }}</p>
                              <v-icon class="icon-arrow" >mdi-chevron-right</v-icon>
                            </div>
                        </router-link>
                        </div>
                      </div>
                    </div>

                    <div class="btn-destination">
                        <v-btn class="text-btn-destination">Je choisis ma destination</v-btn>
                    </div>
                </div>
            </div>
        </div>

        <div class="offre-coup-coeur">
            <p class="title-offre">Nos offres coups de coeurs du moment !</p>
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

            <div class="offres">
                <div class="grid-offres">
                  <div
                    class="carte-offre"
                    v-for="(offre, index) in offres"
                    :key="index"
                  >
                    <img :src="offre.image" :alt="offre.pays" class="img-carte-offre" />
                    <div class="temps-prix">
                      <p class="temps">{{ offre.duree }}</p>
                      <p class="prix">{{ offre.prix }}</p>
                    </div>
                    <p class="description-offre">{{ offre.description }}</p>
                    <div class="pays-details">
                      <div class="pays-name">
                        <img src="@/assets/Pictos/maps@4x.png" alt="map" class="picto-maps" />
                        <p class="name-pays">{{ offre.pays }}</p>
                      </div>
                      <router-link :to="offre.lien" class="text-lien-offre">Découvrir</router-link>
                    </div>
                  </div>
                </div>
            </div>

            <div class="btn-offre-coup-coeur">
                <router-link :to="'/offreCoupCoeur'">
                    <v-btn class="text-btn-offre-coup-coeur">Je découvre</v-btn>
                </router-link>
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
        lieux: [
            {
              nom: "Thaïlande",
              image: require("@/assets/PhotosSite/Thaïlande.jpeg"),
              lien: "/activiteThailande"
            },
            {
              nom: "Indonésie",
              image: require("@/assets/PhotosSite/idonésie.jpeg"),
              lien: "/activiteIndonesie"
            },
            {
              nom: "Venezuela",
              image: require("@/assets/PhotosSite/New zeland.jpeg"),
              lien: "/activiteVenezuela"
            },
            {
              nom: "Slovaquie",
              image: require("@/assets/PhotosSite/slovaquie.jpeg"),
              lien: "/activiteSlovaquie"
            },
            {
              nom: "Argentine",
              image: require("@/assets/PhotosSite/argentine.jpeg"),
              lien: "/activiteArgentine"
            },
            {
              nom: "Nicaragua",
              image: require("@/assets/PhotosSite/nicaragua.jpeg"),
              lien: "/activiteNicaragua"
            }
        ],
        offres: [
            {
                pays: "Indonésie",
                image: require("@/assets/PhotosSite/indonesie.jpeg"),
                duree: "3 jours, 2 nuits",
                prix: "500€ / personne",
                description: "Explorez la beauté de l'île pendant 3 jours et 2 nuits avec notre agence de voyage",
                lien: "/offreIndonésie"
            },
            {
                pays: "Japon",
                image: require("@/assets/PhotosSite/japon.jpeg"),
                duree: "3 jours, 2 nuits",
                prix: "800€ / personne",
                description: "Appréciez les fleurs et les arbres fruitiers de ce beau pays",
                lien: "/offreJapon"
            },
            {
                pays: "Italie",
                image: require("@/assets/PhotosSite/italie.jpeg"),
                duree: "3 jours, 2 nuits",
                prix: "600€ / personne",
                description: "Explorez les montagnes et les paysages majestueux paysages jour et nuit",
                lien: "/offreItalie"
            }
        ]

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
        font-size: 30px;
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
                width: 35%;
                margin: 0% 32.5%;
                text-align: center;
                .title-resultat{
                    font-size: 30px;
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
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
        color: #EAA854;
    }
    .voyage-destinations{
        width: 100%;
        .img-carte-point{
            width: 50%;
            .img-destination{
                width: 100%;
                max-height: 600px;
            }
        }
        .destination-details{
            width: 40%;
            margin: 0% 5%;
            
            .grid-lieux {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 1rem;
            }

            .carte-lieu {
              background: #fff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              position: relative;
              cursor: pointer;
              transition: transform 0.2s;
            }

            .carte-lieu:hover {
              transform: translateY(-4px);
            }

            .img-carte-lieu {
              width: 100%;
              height: 130px;
              object-fit: cover;
            }

            .info-lieu {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.75rem 1rem;
            }

            .nom-lieu {
              font-weight: bold;
              font-size: 1rem;
              margin: 0;
            }
            
            .btn-destination{
                display: flex;
                justify-content: center;
                margin-top: 20px;
                .text-btn-destination{
                    background-color: #c55230;
                    padding: 10px 20px;
                    border-radius: 20px;
                    color: white;
                    text-transform: none;
                    font-size: 15px;
                    font-weight: 600;
                    box-shadow: none;
                }
                .text-btn-destination:hover{
                    background-color: #c55330dd;
                    color: white;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
            }
        }
    }
}

.offre-coup-coeur{
    margin-bottom: 50px;
    background-color: rgba(244, 231, 198, 0.3);
    padding: 60px 0px;
    .title-offre{
        text-align: center;
        font-size: 30px;
        font-weight: 700;
    }
    .tag{
        margin: 5% 5%;
        width: 90%;
        justify-content: space-around;
        .bonPlan{
            background-color: #EAA854;
            padding: 5px 10px;
            border-radius: 20px;
            margin-right: 10px;
            cursor: pointer;
            .text-bon-plan{
                font-size: 15px;
                color: white;
                font-weight: 600;
            }
        }
        .pays{
            background-color: #EAA854;
            padding: 5px 10px;
            border-radius: 20px;
            margin-right: 10px;
            opacity: 0.5;
            cursor: pointer;
            .text-bon-plan{
                font-size: 15px;
                color: white;
                font-weight: 600;
            }
            &:hover{
                opacity: 1;
            }
        }
    }
    
    .offres {
        width: 90%;
        margin: auto;
        margin-top: 30px;

        .grid-offres {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
      
        .carte-offre {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
      
        .carte-offre:hover {
          transform: translateY(-4px);
        }
      
        .img-carte-offre {
          width: 100%;
          object-fit: cover;
        }
      
        .temps-prix {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 1rem 0;
          font-weight: bold;
          font-size: 0.95rem;
        
        }
      
        .description-offre {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          color: #444;
          flex-grow: 1;
        }
      
        .pays-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
        
          .pays-name {
            display: flex;
            align-items: center;
            gap: 6px;
            
            .picto-maps {
              width: 18px;
              height: 18px;
            }
          
            .name-pays {
              font-weight: bold;
              font-size: 0.95rem;
              margin: 0;
            }
          }
        
          .text-lien-offre {
            color: #4a4a4a;
            font-weight: 500;
            text-decoration: none;
            font-size: 0.9rem;
          }
        
          .text-lien-offre:hover {
            text-decoration: underline;
          }
        }
    }
    
    .btn-offre-coup-coeur{
        display: flex;
        justify-content: center;
        margin-top: 80px;
        .text-btn-offre-coup-coeur{
            background-color: #c55230;
            padding: 10px 30px;
            border-radius: 20px;
            color: white;
            text-transform: none;
            font-size: 15px;
            font-weight: 600;
            box-shadow: none;
        }
        .text-btn-offre-coup-coeur:hover{
            background-color: #c55330dd;
            color: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
    }
}


</style>