<template>
    <main id="activiteNY">
        <HeaderSiteColor/>
        <div class="page">
          <h1>Tour gastronomique dans les rues de Brooklyn</h1>
          <div class="act d-flex">
            <div class="photos">
              <div class="principal">
                <img class="principal-photo" src="../assets/act_Brooklyn/AdobeStock_614707002.jpeg" alt="">
              </div>
              <div class="photos-act d-flex">
                <div class="photo-act">
                  <img src="../assets/act_Brooklyn/AdobeStock_1097341432.jpeg" alt="">
                </div>
                <div class="photo-act">
                  <img 
                    style="
                    height: 150px;
                    top: -20px;
                    display: block;
                    position: relative;" 
                    src="../assets/act_Brooklyn/AdobeStock_1372074881.jpeg" 
                    alt=""
                  >
                </div>
                <div class="photo-act">
                  <img src="../assets/act_Brooklyn/AdobeStock_111986642.jpeg" alt="">
                </div>
              </div>
            </div>
            <div class="infos-reservations">
              <div class="infos-prix d-flex">
                <p class="text-prix">à partir de </p>
                <p class="text-prix-color">29 €</p>
              </div>

              <div class="description">
                <p class="text-description">
                  Partez à la découverte des saveurs locales avec un tour gastronomique unique à Brooklyn.
                  Entre food trucks, boulangeries artisanales et marchés cachés, laissez vos papilles explorer 
                  la richesse culinaire new-yorkaise.
                </p>
              </div>

              <div class="calendrier">
                <div class="titre-calendrier">
                  <h4>Sélectionner une date</h4>
                  <v-calendar class="calendrier">
                    <v-date-picker
                      v-model="selectedDate"
                      color="primary"
                      :min="new Date().toISOString().substr(0, 10)"
                      @input="onDateSelected"
                    ></v-date-picker>
                  </v-calendar>
                </div>
              </div>
              
              <div class="horaire">
                <div class="titre-horaire">
                  <h4>Horaires</h4>
                  <v-select
                    :items="availableTimes"
                    class="select-horaire"
                    label="Sélectionner l'horaire"
                    v-model="form.heure"
                    required
                    hide-details
                    :menu-props="{ offsetY: true }"
                  />
                </div>
              </div>

              <div class="reservation d-flex">
                <v-btn class="btn-reservation">Réserver maintenant</v-btn>
                <v-icon class="icon-reservation">mdi-heart-outline</v-icon>
            </div>
            </div>
          </div>
          <div class="details">
            <div class="titre-details d-flex">
              <h2>Détails</h2>
            </div>
            <p class="text-details">
              Plongez au coeur de Brooklyn pour une expérience gourmande inoubliable.
              Ce tour gastronomique vous emmène à travers les quartiers les plus authentiques de l'arrondissement,
              à la rencontre de chefs passionnés et d'artisans du goût et de spécialités locales qui racontent 
              l'histoire multiculturelle de New York.
            </p>
            <p class="text-details">
              Au programme : dégustation de bagels traditionnels, de pizzas napiolitaines revisitées, 
              de douceurs caribéennes et de street food innovante. Laissez-vous guider à pied dans une ambiance 
              conviviale, où chaque halte est une nouvelle découverte sensorielle.
            </p>
            <div class="personne d-flex">
              <h2 class="titre-personne">Nombre de personnes :</h2>
              <p class="texte-personne">15-30</p>
            </div>
            <div class="personne d-flex">
              <h2 class="titre-personne">Durée :</h2>
              <p class="texte-personne">environ 5 heures</p>
            </div>
            <div class="personne d-flex">
              <h2 class="titre-personne">Lieu :</h2>
              <p class="texte-personne">Quartier 2 Brooklyn</p>
            </div>
            <div class="personne d-flex">
              <h2 class="titre-personne">Language :</h2>
              <p class="texte-personne">Anglais, Italien</p>
            </div>
          </div>

          <div class="galerie">
            <div class="titre-galerie d-flex">
              <h2>Galerie</h2>
              <div class="icon d-flex">
                <v-icon class="fleche-retour">mdi-chevron-left</v-icon>
                <v-icon class="fleche-avance">mdi-chevron-right</v-icon>
              </div>
            </div>
            <div class="photos-galerie d-flex">
              <div class="photo-galerie">
                <img src="../assets/act_Brooklyn/AdobeStock_1166021286.jpeg" alt="">
              </div>
              <div class="photo-galerie-middle">
                <div class="photo-galerie">
                  <img src="../assets/act_Brooklyn/AdobeStock_227521097.jpeg" alt="">
                </div>
                <div class="photo-galerie">
                  <img src="../assets/act_Brooklyn/AdobeStock_449997040.jpeg" alt="">
                </div>
              </div>
              <div class="photo-galerie">
                <img src="../assets/act_Brooklyn/AdobeStock_157482350.jpeg" alt="">
              </div>
            </div>
          </div>

          <div class="communaute">
            <div class="titre-communaute d-flex">
              <h2>Ce qu'en pense notre communauté</h2>
              <div class="icon d-flex">
                <v-icon class="fleche-retour">mdi-chevron-left</v-icon>
                <v-icon class="fleche-avance">mdi-chevron-right</v-icon>
              </div>
            </div>
            <div class="avis d-flex">
              <v-card class="card-avis">
                <v-card-text class="text-avis">
                  <img src="../assets/act_Brooklyn/AdobeStock_400166074.jpeg" alt="">
                  <p class="name-com">Léa D</p>
                  <p class="text-com">
                    Une vraie immersion dans Brooklyn à travers la nourriture! Chaque arrêt était une surprise 
                    avec des plats délicieux et des histoires passionantes sur les quartiers. Notre guide était 
                    super sympa et très calé. Je recommande à 100% !
                  </p>
                </v-card-text>
              </v-card>
              <v-card class="card-avis">
                <v-card-text class="text-avis">
                  <img src="../assets/act_Brooklyn/AdobeStock_211651043.jpeg" alt="">
                  <p class="name-com">Martin G</p>
                  <p class="text-com">
                    J'ai adoré ce food tour ! C'est bien plus qu'un simple parcours de dégustation : on découvre 
                    la culture locale, les communautés et plein d'adresses qu'on n'aurait jamais trouvées seuls. 
                    Mention spéciale pour le stand de tacos caché dans une ruelle !
                  </p>
                </v-card-text>
              </v-card>
            </div>
          </div>

          <div class="newsletter">
            <p class="titre-newsletter">Entrez votre mail et recevez tout de suite -20% supplémentaires sur votre activité favorite !</p>
            <div class="champ-newsletter d-flex">
                <input type="text" class="input-newsletter" placeholder="Votre adresse e-mail">
                <v-btn class="text-btn-newsletter">Envoyer</v-btn>
          </div>
          </div>
        
        </div>


        <FooterSite/>
    </main>
</template>

<script>
import HeaderSiteColor from './HeaderSiteColor.vue';
import FooterSite from './FooterSite.vue'

export default {
    name: 'ActiviteNewYork',
    components: { HeaderSiteColor, FooterSite},
    data(){
      return {
        availableTimes: [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30', '18:00', '18:30',
      ].map(h => ({ text: h, value: h })),
      form: {
        heure: '',
      },
    };
  },
  watch: {
    value(val) {
      this.drawerOpen = val;
    },
    drawerOpen(val) {
      this.$emit('input', val);
      if (!val) {
        this.resetForm();
      }
    },
    rdv: {
    handler(newRdv) {
      if (newRdv) {
        this.form = {
          name: newRdv.name || '',
          email: newRdv.email || '',
          heure: newRdv.start ? newRdv.start.substr(11,5) : '',
        };
        this.selected = this.form.heure;
      } else {
        this.resetForm();
      }
    },
    immediate: true
  },
  selected(newVal) {
    this.form.heure = newVal;
  }
  },
  methods: {
    close() {
      this.drawerOpen = false;
    },
    resetForm() {
      this.form = { name: '', email: '', heure: '' };
      this.formValid = false;
    },
    submitRdv() {
  if (this.$refs.form.validate()) {
    this.$emit('rdv-confirmed', {
      id: this.rdv?.id || null, // conserve l’id si modification
      name: this.form.name,
      email: this.form.email,
      heure: this.form.heure,
      date: this.selectedDate,
    });
    this.drawerOpen = false;
  }
},
    formatDate(dateStr) {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
}
</script>

<style lang="scss" scoped>

.page{
  margin: 0% 10%;
  .act{
    display: flex;
    gap: 20px;
    width: 100%;
    .photos{
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .principal{
        width: 100%;
        .principal-photo{
          width: 100%;
          height: 500px;
          border-radius: 20px;
        }
      }
      .photos-act{
        gap: 10px;
        height: 110px; /* Hauteur fixe du conteneur */
        overflow: hidden; /* Masque ce qui dépasse */
        position: relative;
        .photo-act{
          width: 35%;
          border-radius: 20px;
          img{
            border-radius: 20px;
            height: 110px;
            width: 100%;
          }
        }
      }
    }
    .infos-reservations{
      width: 45%;
      .infos-prix{
        display: flex;
        align-items: center;
        gap: 10px;
        .text-prix{
          font-size: 18px;
          font-weight: 500;
        }
        .text-prix-color{
          color: #EAA854;
          font-size: 24px;
          font-weight: bold;
        }
      }
      .description{
        .text-description{
          font-size: 16px;
        }
      }
      .calendrier, .horaire{
        display: flex;
        flex-direction: column;
      }
    }
  }
  .details{
    margin-top: 20px;
    .titre-details{
      display: flex;
      align-items: center;
      h2{
        font-size: 24px;
        font-weight: bold;
      }
    }
    .text-details{
      font-size: 16px;
      line-height: 1.5;
      margin-top: 10px;
    }
    .personne{
      display: flex;
      align-items: center;
      gap: 10px;
      .titre-personne{
        font-size: 18px;
        font-weight: 500;
      }
      .texte-personne{
        font-size: 16px;
        color: #555;
      }
    }
  }
  .galerie{
    margin-top: 20px;
    .titre-galerie{
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2{
        font-size: 24px;
        font-weight: bold;
      }
      .icon{
        display: flex;
        gap: 10px;
        .fleche-retour, .fleche-avance{
          cursor: pointer;
          font-size: 24px;
        }
      }
    }
    .photos-galerie{
      display: flex;
      gap: 10px;
      .photo-galerie, .photo-galerie-middle{
        width: 32%;
        img{
          width: 100%;
          height: auto;
          border-radius: 20px;
        }
      }
      .photo-galerie-middle{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
  .communaute{
    margin-top: 20px;
    .titre-communaute{
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2{
        font-size: 24px;
        font-weight: bold;
      }
      .icon{
        display: flex;
        gap: 10px;
        .fleche-retour, .fleche-avance{
          cursor: pointer;
          font-size: 24px;
        }
      }
    }
    .avis{
      display: flex;
      gap: 20px;
      .card-avis{
        width: 100%;
        max-width: 300px;
        .text-avis{
          display: flex;
          flex-direction: column;
          align-items: center;
          img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-bottom: 10px;
          }
          .name-com{
            font-weight: bold;
            margin-bottom: 5px;
          }
          .text-com{
            font-size: 14px;
            text-align: center;
          }
        }
      }
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