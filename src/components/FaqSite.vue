<template>
  <v-app>
    <main id="faqSite">
      <HeaderSite/>
      <h1 class="titre">F.A.Q</h1>
      
      <div class="questions">
        <div class="faq">
          <p class="title-faq">Vous n'êtes pas seul·e à vous poser des questions ! Voici quelques réponses aux plus fréquentes :</p>
          <v-expansion-panels>
            <!-- Combien de temps avant mon voyage annulation -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Combien de temps avant mon voyage puis-je l'annuler ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus quis metus ut bibendum. Nam sit amet ullamcorper sem, sed tincidunt dui. Sed lacinia porttitor ex, id finibus turpis posuere sit amet. Etiam pulvinar placerat arcu, in sollicitudin mi sollicitudin id. Mauris at rutrum nunc, ut aliquam justo. Praesent vehicula gravida purus, non fringilla justo. Cras eu elit et tellus aliquet consectetur. Nam maximus blandit malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fermentum lorem iaculis libero viverra, a ultrices purus semper. Pellentesque rhoncus varius mattis. Aenean varius orci nec turpis dictum, vel gravida augue semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </p>
              </v-expansion-panel-content>

            </v-expansion-panel>
            <!-- Frais annulation ou modification -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Y a-t-il des frais d'annulation ou de modification ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus quis metus ut bibendum. Nam sit amet ullamcorper sem, sed tincidunt dui. Sed lacinia porttitor ex, id finibus turpis posuere sit amet. Etiam pulvinar placerat arcu, in sollicitudin mi sollicitudin id. Mauris at rutrum nunc, ut aliquam justo. Praesent vehicula gravida purus, non fringilla justo. Cras eu elit et tellus aliquet consectetur. Nam maximus blandit malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fermentum lorem iaculis libero viverra, a ultrices purus semper. Pellentesque rhoncus varius mattis. Aenean varius orci nec turpis dictum, vel gravida augue semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </p>
              </v-expansion-panel-content>

            </v-expansion-panel>
            <!-- Contacter le service client -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Comment puis-je contacter le service client en cas de problème ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus quis metus ut bibendum. Nam sit amet ullamcorper sem, sed tincidunt dui. Sed lacinia porttitor ex, id finibus turpis posuere sit amet. Etiam pulvinar placerat arcu, in sollicitudin mi sollicitudin id. Mauris at rutrum nunc, ut aliquam justo. Praesent vehicula gravida purus, non fringilla justo. Cras eu elit et tellus aliquet consectetur. Nam maximus blandit malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fermentum lorem iaculis libero viverra, a ultrices purus semper. Pellentesque rhoncus varius mattis. Aenean varius orci nec turpis dictum, vel gravida augue semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </p>
              </v-expansion-panel-content>

            </v-expansion-panel>
            <!-- Remboursement annulation -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Comment obtenir un remboursement en cas d'annulation ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus quis metus ut bibendum. Nam sit amet ullamcorper sem, sed tincidunt dui. Sed lacinia porttitor ex, id finibus turpis posuere sit amet. Etiam pulvinar placerat arcu, in sollicitudin mi sollicitudin id. Mauris at rutrum nunc, ut aliquam justo. Praesent vehicula gravida purus, non fringilla justo. Cras eu elit et tellus aliquet consectetur. Nam maximus blandit malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fermentum lorem iaculis libero viverra, a ultrices purus semper. Pellentesque rhoncus varius mattis. Aenean varius orci nec turpis dictum, vel gravida augue semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                </p>
              </v-expansion-panel-content>

            </v-expansion-panel>
            <!-- Modification reservation après confirmation -->
            <v-expansion-panel>
              <v-expansion-panel-header>
                <span>Comment modifer ma réservation après l'avoir validée/payée ?</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus quis metus ut bibendum. Nam sit amet ullamcorper sem, sed tincidunt dui. Sed lacinia porttitor ex, id finibus turpis posuere sit amet. Etiam pulvinar placerat arcu, in sollicitudin mi sollicitudin id. Mauris at rutrum nunc, ut aliquam justo. Praesent vehicula gravida purus, non fringilla justo. Cras eu elit et tellus aliquet consectetur. Nam maximus blandit malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut fermentum lorem iaculis libero viverra, a ultrices purus semper. Pellentesque rhoncus varius mattis. Aenean varius orci nec turpis dictum, vel gravida augue semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
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
  import HeaderSite from './HeaderSite.vue';
  import FooterSite from './FooterSite.vue';
  
  export default {
    name: 'FaqSite',
    components: { HeaderSite, FooterSite},
    data(){
      return {
        sujets : [
          'Réservation', 
          'Annulation',
          'Remboursement',
          'Information',
        ],
      selected: null,
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
  .contact{
    margin: 60px 0px 40px 20px;
    .telephone, .mail, .localisation{
      align-items: center;
      margin-bottom: 20px;
      p{
        margin: 0%;
      }
    }
    .phone, .email, .maps{
      /* font-size: 30px; */
      margin-right: 10px;
      color: black;
    }
  }
  .reseaux{
    margin: 0px 0px 60px 30px;
    align-items: center;
    .rs{

      .img-rs{
        width: 40px;
        height: 40px;
        margin: 5px 5px;
      }
    }
  
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
    .formulaire{
      width: 50%;
      align-items: center;
      justify-content: center;
      form{
        width: 80%;
      }
      .input{
        margin: 10px 0px;
        input, textarea{
          width: 100%;
          padding: 10px;
          background-color: #F2F2F2;
          font-size: 16px;
        }
      }
      .btn{
        background-color: #D54721;
        color: white;
        padding: 3px 40px;
        font-size: 17px;
        border-radius: 20px;
        border: none;
        margin-left: 40%;
      }
    }
  }
  
  </style>
  