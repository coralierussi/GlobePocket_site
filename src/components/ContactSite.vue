<template>
  <v-app>
    <main id="contactSite">
      <HeaderSiteColor/>
      <h1 class="titre">Nous contacter</h1>
      <div class="contact">
        <div class="telephone d-flex">
          <v-icon class="phone">mdi-phone</v-icon>
          <p>07.86.01.36.03</p>
        </div>
        <div class="mail d-flex">
          <v-icon class="email">mdi-email</v-icon>
          <p>globePocket@gmail.com</p>
        </div>
        <div class="localisation d-flex">
          <v-icon class="maps">mdi-google-maps</v-icon>
          <p>20/22 rue Galilée, 38400 Saint-Martin-d'Hères</p>
        </div>
      </div>
      <div class="reseaux d-flex">
        <h4>Nous retrouver sur :</h4>
        <div class="rs d-flex">
            <a href="https://www.instagram.com/" target="_blank">
                <img class="img-rs" src="../assets/instagram.png" alt="Instagram">
            </a>
            <a href="https://www.facebook.com/" target="_blank">
                <img class="img-rs" src="../assets/facebook.png" alt="Facebook">
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank">
                <img class="img-rs" src="../assets/linkedin.png" alt="LinkedIn">
            </a>
            <a href="https://www.tiktok.com/fr/" target="_blank">
                <img class="img-rs" src="../assets/tik-tok.png" alt="TikTok">
            </a>
        </div>
      
      </div>
      <div class="questions">
        <div class="formulaire d-flex">
          <form action="">
            <div class="input">
              <!-- <label for="nom">Nom</label> -->
              <input placeholder="Nom" type="text" id="nom" name="nom">
            </div>
            <div class="input">
              <!-- <label for="email">Email</label> -->
              <input placeholder="Email" type="email" id="email" name="email" required>
            </div>
            <div class="input">
              <v-select 
                placeholder="Sélectionner un sujet" 
                hide-details
                :items="sujets" 
                v-model="selected"
                style="background-color: #F2F2F2; padding-left: 6px;"
                :menu-props="{ offsetY: true }"
                />
            </div>
            <div class="input">
              <textarea placeholder="Message" id="message" name="message" required></textarea>
            </div>
          
            <button class="btn" type="submit">Envoyer</button>
          </form>
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
    name: 'ContactSite',
    components: { HeaderSiteColor, FooterSite},
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
      width: 50%;
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
  