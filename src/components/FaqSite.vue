<template>
  <v-app>
    <main id="faqSite">
      <HeaderSiteColor/>
      <h1 class="titre">F.A.Q</h1>
      
      <div class="questions">
        <div class="faq">
          <p class="title-faq">Vous n'êtes pas seul·e à vous poser des questions ! Voici quelques réponses aux plus fréquentes :</p>
          <v-expansion-panels>
            <!-- Comment réserver une activité ? -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Comment réserver une activité ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                    Allez sur la page du pays ou de la ville, choisissez l’activité qui vous plaît, cliquez 
                    sur "Réserver" et suivez les étapes. Certaines se réservent directement via la WebApp, 
                    d’autres via nos partenaires.
                </p>
              </v-expansion-panel-content>

            </v-expansion-panel>
            <!-- Freemium ou Premium : quelles différences ? -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Freemium ou Premium : quelles différences ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Le Freemium donne accès aux fonctionnalités de base. Le Premium offre un accompagnement 
                  personnalisé, des offres exclusives et un suivi détaillé.
                </p>
              </v-expansion-panel-content>

            </v-expansion-panel>
            <!-- Le système de points, comment ça marche ? -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Le système de points, comment ça marche ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  À chaque réservation sur Globe Pocket, vous gagnez des points selon le montant dépensé. 
                  Ces points débloquent des réductions.
                </p>
              </v-expansion-panel-content>

            </v-expansion-panel>
            <!-- Peut-on modifier son voyage après l’avoir validé ? -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Peut-on modifier son voyage après l’avoir validé ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                   Oui ! En Premium, vous pouvez ajuster votre itinéraire via plusieurs rendez-vous.
                </p>
              </v-expansion-panel-content>

            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        
      </div>
      <FooterSite/>
    </main>
  </v-app>
</template>
  
  <script>
  import FooterSite from './FooterSite.vue';
  import HeaderSiteColor from './HeaderSiteColor.vue';
  
  export default {
    name: 'FaqSite',
    components: { HeaderSiteColor, FooterSite},
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
  .titre{
    text-align: center;
    margin: 20px 0px;
  }
  .questions{
    width: 100%;
    padding-bottom: 40px;
    .faq{
      margin: 0% 2%;
      .title-faq{
        margin-bottom: 30px;
      }
    }
  }
  
  </style>
  