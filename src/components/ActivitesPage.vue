<template>
    <main id="activitesPage">
        <HeaderSite/>
        
        <div class="img-presentation">
            <img class="img-activites" src="../assets/PhotosSite/principale-activite.jpeg" alt="Image page activités" >
            <div class="text-presentation">
                <h1>Découvrez les meilleurs activités à faire pendant votre voyage !</h1>
                <p>Culture, nature, sensations fortes ou détente : choisis ce qui te fais envie</p>
            </div>
        </div>

        <div class="titre">
            <p class="text-titre">Explore plus de 200 activités testées et approuvées par nos voyageurs</p>
        </div>

        <div class="filtres-activites d-flex">
            <div class="filtres">
                <div class="filtres-envie">
                    <p>Qu'as-tu envie de faire ?</p>
                    <div class="type-filtre" v-for="(envieFiltre, index) in enviesFiltre" :key="index">
                        <div class="type-envie-filtres d-flex">
                            <img class="icon-filtre" :src="envieFiltre.image" :alt="envieFiltre.nom">
                            <p>{{ envieFiltre.nom }}</p>
                        </div>
                    </div>
                    <v-btn class="btn-filtre d-flex">
                        <p class="text-btn-filtre">Chercher</p>
                        <v-icon class="icon-btn-filtre">mdi-magnify</v-icon>
                    </v-btn>
                </div>
                <div class="filtres-recherche">
                    <p class="titre-filtre">Filtres de recherche</p>
                    <div class="filtre">
                        <v-expansion-panels
                          multiple
                          accordion
                        >
                            <v-expansion-panel
                              v-for="(filtre, index) in filtres"
                              :key="index"
                            >
                              <v-expansion-panel-header>
                              <div class="filtre-header-content">
                                <div class="icon-recherche">
                                  <img class="icon-filtre-recherche" :src="filtre.image" :alt="filtre.nom">
                                </div>
                                <p class="titre-filtre-recherche">{{ filtre.nom }}</p>
                              </div>
                            </v-expansion-panel-header>

                              <v-expansion-panel-content>
                                <template v-if="filtre.sous && filtre.sous.length">
                                  <v-checkbox
                                  v-for="(sousFiltre, index) in filtre.sous"
                                  :key="index"
                                  :label="sousFiltre.name"
                                  :value="sousFiltre.name"
                                  v-model="filtresSelectionnes"
                                />
                                </template>
                                <template v-else>
                                  <p>Aucun filtre disponible</p>
                                </template>
                              </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </div>
            </div>
            <div class="activites" >
                    <div v-if="cartesFiltrees.length > 0" class="grid-activites">
                        <div class="carte-activites" v-for="(carte, index) in cartesFiltrees" :key="index">
                            <div class="image-activites">
                                <router-link :to= "'/activite/' + carte.slug">
                                <img :src="carte.image" :alt="carte.name" class="img-carte-lieu" />
                                  <span class="text-tag-activites">{{ carte.tag }}</span>
                              </router-link>
                            </div>

                            <!-- Liste des cartes (activités) -->
                            <div class="info-activites">
                                <div class="text-activites">
                                  <p class="name-activites">{{ carte.name }}</p>
                                  <p class="description-activites">{{ carte.description }}</p>
                                </div>
                              <v-btn icon :class="['icon-favorite', { active: carte.favorite }]"
                                                          :color="isFavori(carte) ? 'red' : 'grey'">
                                <v-icon @click="toggleFavorite(carte)" >{{ carte.favorite ? 'mdi-heart' : 'mdi-cards-heart-outline' }}</v-icon>
                              </v-btn>
                            </div>
                        </div>
                    </div>
                    <div v-else class="aucune-activite">
                      <p>Aucune activité ne correspond à votre recherche</p>
                    </div>
            </div>
        </div>

         <!-- <v-btn @click="favorisOpen = true">Voir mes favoris</v-btn> -->

        <div class="newsletter">
            <p class="titre-newsletter">Entrez votre mail et recevez tout de suite -20% supplémentaires sur votre activité favorite !</p>
            <div class="champ-newsletter d-flex">
                <input type="text" class="input-newsletter" placeholder="Votre adresse e-mail">
                <v-btn class="text-btn-newsletter">Envoyer</v-btn>
            </div>
        </div>


         <!-- Popup Favoris -->
    <FavorisSite 
      v-model="favorisOpen" 
      :favoris="mesFavoris"
      @update:favoris="mesFavoris = $event"
    />

        <FooterSite/>
    </main>
  </template>
  
  <script>
  import HeaderSite from './HeaderSite.vue';
  import FooterSite from './FooterSite.vue';
  import FavorisSite from './FavorisSite.vue';
  
  export default {
    name: 'ActivitesPage',
    components: { HeaderSite, FooterSite, FavorisSite},
    data(){
      return {
        favorisOpen: false,
      mesFavoris: [],
        filtresSelectionnes: [],
        cartes:[
            {
                id:1,
                name: "Italie, Rome",
                description : "Balade guidée à la découverte de la Rome antique",
                tag : "visites guidées",
                slug: "italie-rome",
                image: require("@/assets/PhotosSite/Photos page activité/Italie_Rome.jpeg"),
                favorite: false,
            },
            {
                id:2,
                name: "Maroc, Marrakech",
                description : "Balade en dromadaire au coucher du soleil",
                tag : "Insolites",
                slug: "Maroc-Marrakech",
                image: require("@/assets/PhotosSite/Photos page activité/Maroc_Marrakech.jpeg"),
                favorite: false,
            },
            {
                id:3,
                name: "Japon, Kyoto",
                description : "Cérémonie du thé traditionnelle avec maître japonais",
                tag : "Bien-être",
                slug: "Japon-Kyoto",
                image: require("@/assets/PhotosSite/Photos page activité/Japon_kyoto.jpeg"),
                favorite: false,
            },
            {
                id:4,
                name: "France, Marseille",
                description : "Exucursion en bateau dans les calanques avec baignade",
                tag : "Sortie en mer",
                slug: "France-Marseille",
                image: require("@/assets/PhotosSite/Photos page activité/France_Marseille.jpeg"),
                favorite: false,
            },
            {
                id:5,
                name: "Indonésie, Ubud",
                description : "Randonnée guidée dans les rizières et les villages balinais",
                tag : "Visites culturelles",
                slug: "Indonesie-Ubud",
                image: require("@/assets/PhotosSite/Photos page activité/Indonesie_Ubud.jpeg"),
                favorite: false,
            },
            {
                id:6,
                name: "Etats-Unis, New-York",
                description : "Tour gastronomique dans les rues de brooklyn",
                tag : "Expériences culinaires",
                slug: "Etats-Unis-New-York",
                image: require("@/assets/PhotosSite/Photos page activité/Etat_Unis_New_York.jpeg"),
                favorite: false,
            },
            {
                id:7,
                name: "Espagne, Barcelone",
                description : "Atelier de paëlla et visite du marché de la Boqueria",
                tag : "Expériences culinaires",
                slug: "Espagne-Barcelone",
                image: require("@/assets/PhotosSite/Photos page activité/Espagne_Barcelone.jpeg"),
                favorite: false,
            },
            {
                id:8,
                name: "Thaïlande, Chiang Mai",
                description : "Massage thaï traditionnel dans un centre de bien-être local",
                tag : "Bien-être",
                slug: "Thailande-Chiang-Mai",
                image: require("@/assets/PhotosSite/Photos page activité/Thailande_Chang_Mai.jpeg"),
                favorite: false,
            },
            {
                id:9,
                name: "Portugal, Lisbonne",
                description : "Balade guidée dans L'Alfama et dégustation de pastéis de nata",
                tag : "Visites culturelles",
                slug: "Portugal-Lisbonne",
                image: require("@/assets/PhotosSite/Photos page activité/Portugal_Lisbonne.jpeg"),
                favorite: false,
            },
            {
                id:10,
                name: "Allemagne, Berlin",
                description : "Visite street art et atelier graffiti dans Kreuzberg",
                tag : "Visites culturelles",
                slug: "Allemagne-Berlin",
                image: require("@/assets/PhotosSite/Photos page activité/Allemagne_Berlin.jpeg"),
                favorite: false,
            },
            {
                id:11,
                name: "Islande, Reykjavik",
                description : "Baignade dans des sources chaudes naturelles",
                tag : "Nature & randonnée",
                slug: "Islande-Reykjavik",
                image: require("@/assets/PhotosSite/Photos page activité/Islande_Reykjavik.jpeg"),
                favorite: false,
            },
            {
                id:12,
                name: "Vietnam, Hanoï",
                description : "Découverte du vieux quartier en cyclo-pousse",
                tag : "Visites culturelles",
                slug: "Vietnam-Hanoi",
                image: require("@/assets/PhotosSite/Photos page activité/Vietnam_Hanoi.jpeg"),
                favorite: false,
            },

      ],
      enviesFiltre:[
            {
            nom: "Destination",
            image : require ("@/assets/Pictos/globe@4x.png"),
        },
        {
            nom: "Types d'activité",
            image : require ("@/assets/Pictos/masque@4x.png")
        },
        {
            nom: "Nombre de personnes",
            image : require ("@/assets/Pictos/sac@4x.png")
        }
      ],
        filtres:[
            {
                nom: "Destination",
                image : require ("@/assets/Pictos/globe@4x.png"),
                sous: [],
            },
            {
                nom: "Type d'activité",
                image : require ("@/assets/Pictos/masque@4x.png"),
                sous: [
                  { 
                    name:"Visites culturelles",
                    checked: false
                  },
                  { 
                    name:"Nature & randonnée" ,
                    checked: false
                  },
                  { 
                    name:"Activités sportives" ,
                    checked: false
                  },
                  { 
                    name:"Bien-être" ,
                    checked: false
                  },
                  { 
                    name:"Expériences culinaires" ,
                    checked: false
                  },
                  { 
                    name:"Sortie en mer" ,
                    checked: false
                  },
                  { 
                    name:"Sensations" ,
                    checked: false
                  },
                  { 
                    name:"Activités insolites" ,
                    checked: false
                  },
                  { 
                    name:"Pour enfants" ,
                    checked: false
                  },

                ],
            },
            {
                nom: "Budget",
                image : require ("@/assets/Pictos/document@4x.png"),
                sous: [],
            },
            {
                nom: "Durée",
                image : require ("@/assets/Pictos/calendrier@4x.png"),
                sous: [],
            },
            {
                nom: "Langues",
                image : require ("@/assets/Pictos/discussion@4x.png"),
                sous: [],
            },

        ],
      }
    },
  methods: {

toggleFavorite(cartesFiltrees) {
     cartesFiltrees.favorite = !cartesFiltrees.favorite;
      const index = this.mesFavoris.findIndex(f => f.index === cartesFiltrees.index);
      if (index === -1) {
        this.mesFavoris.push(cartesFiltrees);
      } else {
        this.mesFavoris.splice(index, 1);
      }
    },
    isFavori(carte) {
      return this.mesFavoris.some(f => f.index === carte.index);
    }
  },

  computed: {
  cartesFiltrees() {
    if (this.filtresSelectionnes.length === 0) {
      return this.cartes;
    }   

    return this.cartes.filter(carte =>
      this.filtresSelectionnes.some(filtre =>
        carte.tag.toLowerCase().includes(filtre.toLowerCase())
      )
    );
  }
},

  }
</script>
  
<style lang="scss" scoped>
  
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

.titre{
    width: 50%;
    margin: 0% 25% 10% 25%;
    .text-titre{
        text-align: center;
        font-size: 30px;
        font-weight: 700;
    }
}

.filtres-activites{
    margin-bottom: 15%;
    width: 100%;
    .filtres{
        width: 30%;
        margin-left: 2%;
        .filtres-envie{
            width: 80%;
            border: 2px solid #EAA854;
            border-radius: 20px;
            padding: 10px 20px;
            .type-filtre{
                .type-envie-filtres{
                    width: 80%;
                    border: 1px solid grey;
                    border-radius: 20px;
                    padding: 5px;
                    margin: 10px 0px;
                    .icon-filtre{
                        width: 25px; 
                        margin: 0px 5px;
                    }
                }
            }
            .btn-filtre{
                margin: 20px;
                padding: 20px 50px;
                background-color: #EAA854;
                border-radius: 20px;
                box-shadow: none;
                .text-btn-filtre{
                    text-align: center;
                    text-transform: none;
                    font-weight: 600;

                }
                .icon-btn-filtre{
                    margin-left: 5px;
                }
            }
        }
        .filtres-recherche {
            width: 80%;
            .titre-filtre{
                margin: 25px 0px;
            }
            .filtre {
    .v-expansion-panel-header {
      padding: 0 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .filtre-header-content {
      display: flex;
      align-items: center;
    }

    .icon-recherche {
      display: flex;
      align-items: center;

      .icon-filtre-recherche {
        width: 24px;
        height: auto;
        margin-right: 8px;
      }
    }

    .titre-filtre-recherche {
      margin: 0;
      padding: 0;
      font-size: 16px;
      text-align: left;
    }
  }
}




    }
    .activites{
        width: 65%;
        margin: 0% 2%;
        
        .grid-activites {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.carte-activites {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
}

.carte-activites:hover {
  transform: translateY(-4px);
}

.image-activites {
  position: relative;
  width: 100%;
  height: 180px;
}

.img-carte-lieu {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-tag-activites {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #d8a469;
  color: white;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 12px;
  text-transform: capitalize;
  font-weight: 600;
}

.info-activites {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
}

.text-activites {
  flex-grow: 1;
}

.name-activites {
  font-weight: bold;
  color: #D8A469;
  font-size: 14px;
  margin-bottom: 4px;
}

.description-activites {
  font-size: 13px;
  color: black;
}

.icon-activites {
  cursor: pointer;
  transition: color 0.2s;
  font-size: 22px;
  color: #D8A469 !important;
}
.icon-favorite.active {
  color: #D8A469;
}
.aucune-activite {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 40px 0;
  color: #888;
}

    }
}

.newsletter{
    width: 80%;
    background-color: rgba(244, 231, 198, 0.3);
    margin: 0% 10%;
    padding: 50px 50px 100px 50px;
    border-top-left-radius: 125px;
    .titre-newsletter{
        text-align: center;
        font-size: 25px;
        font-weight: 600;
        width: 60%;
        color: #EAA854;
        margin: 0% 20% 50px 20%;
    }
    .champ-newsletter{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        .input-newsletter{
            width: 50%;
            padding: 10px;
            border-radius: 20px;
            border: none;
            background-color: white;
            font-size: 15px;
            font-weight: 400;
        }
        .text-btn-newsletter{
            background-color: #c55230;
            padding: 10px 30px;
            border-radius: 20px;
            color: white;
            text-transform: none;
            font-size: 15px;
            font-weight: 600;
            box-shadow: none;
        }
        .text-btn-newsletter:hover{
            background-color: #c55330dd;
            color: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
    }
}

</style>