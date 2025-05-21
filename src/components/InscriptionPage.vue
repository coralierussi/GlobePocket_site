<template>
  <v-app>
    <main id="inscriptionPage">
      <div class="connect d-flex">
        <div class="img-icon-connect">
          <img class="img-page-connexion" src="../assets/PhotosSite/page_connexion.jpeg" alt="">
          <router-link to="/">
            <v-icon class="icon-page-connexion">mdi-chevron-left</v-icon>
          </router-link>
        </div>
        <div class="connexion">
          <div class="img-connexion">
            <img class="img-logo-connexion" src="../assets/Logo/logo original@4x.png" alt="">
            <p class="phrase-connexion">Bons plans, itinéraires, communauté : votre voyage prêt en quelques minutes.</p>
            <div class="connect-with">
              <div class="google">
                <img class="icon-google" src="../assets/Logo/google.png" alt="">
                <!-- <v-icon class="icon-google">mdi-google</v-icon> -->
                <p class="text-connect-with">Se connecter avec Google</p>
              </div>
              <div class="facebook">
                <img class="icon-facebook" src="../assets/Logo/facebook.png" alt="">
                <!-- <v-icon class="icon-facebook">mdi-facebook</v-icon> -->
                <p class="text-connect-with">Se connecter avec Facebook</p>
              </div>
            </div>
            <p class="ou">ou</p>
            <div class="form-connexion">
              <div class="input-connexion">
                <v-text-field
                  class="input-email"
                  label="Email"
                ></v-text-field>
              </div>
              <div class="input-connexion">
                <v-text-field
                  class="input-password"
                  label="Mot de passe"
                ></v-text-field>
              </div>
            </div>
            <div class="forget d-flex">
              <div class="souvenir d-flex">
                <v-checkbox></v-checkbox>
                <p class="text-forget-souvenir">Se rappeler de moi</p>
              </div>
              <div class="forget-password">
                <p class="text-forget-souvenir">Mot de passe oublié ?</p>
              </div>
            </div>
            <div class="btn-connect">
              <v-btn class="btn-connexion"> S'inscrire </v-btn>
            </div>
            <div class="inscription">
              <p class="text-inscription">Vous avez un compte ?</p>
              <router-link to="/connexion" class="no-underline">
                <p class="text-inscription-color">Connectez-vous !</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </v-app>
</template>
  
  <script>
  
  export default {
    name: 'InscriptionPage',
    data(){
      return {
       
      }
    },
  }
  </script>
  
  <style sccs scoped>  

.v-input--selection-controls{
  padding: 0px;
  margin: 0px;
}
p{
  margin: 0%;

}

  .connect {
    display: flex;
    .img-icon-connect {
      width: 50%;
      .img-page-connexion {
        width: 100%;
        height: 100vh;
        object-fit: cover; 
        object-position: center; 
        display: block;
        z-index: -10000;
      }
      .icon-page-connexion {
        position: absolute;
        top: 2%;
        left: 2%;
        font-size: 40px;
        font-weight: 600;
        color: white;
        z-index: 10000;
      } 
    }
    .connexion{
      width: 50%;
      .img-connexion{
        .img-logo-connexion{
          width: 35%;
          margin: 0% 32.5%;
          padding-bottom: 15px;
        }
        .phrase-connexion{
          width: 60%;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
          margin: 0% 20%;
          color: #EAA854;
          border-bottom: 1px solid black;
          padding-bottom: 25px;
        }
        .connect-with{
          width: 50%;
          margin:25px 25% 0% 25%;
          .google{
            width: 90%;
            display: flex;
            border: 1px solid rgb(163, 162, 162);
            border-radius: 20px;
            margin-bottom: 5px;
            justify-content: center;
            .icon-google{
              width: 10%;
            }
            .text-connect-with{
              margin-left: 20px;
            }
          }
          .facebook{
            width: 90%;
            display: flex;
            border: 1px solid rgb(163, 162, 162);
            border-radius: 20px;
            justify-content: center;
            .icon-facebook{
              width: 10%;
            }
            .text-connect-with{
              margin-left: 15px;
            }
          }
        }
        .ou{
          text-align: center;
        }
        .form-connexion{
          width: 70%;
          margin: 0% 15%;
        }
        .forget{
          /* .souvenir{
          } */
          .forget-password{
            .text-forget-souvenir{
              margin-left: auto;
            }
          }
        }
        .btn-connect{
          margin: 0% 40%;
          .btn-connexion{
            background-color: #EAA854;
            padding: 10px 30px;
            border-radius: 20px;
            color: white;
            text-transform: none;
            font-size: 15px;
            font-weight: 600;
            box-shadow: none;
          }
          .btn-connexion:hover{
              background-color: rgba(244, 231, 198);
              color: black;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
        }
        .inscription{
          align-items: center;
          justify-content: center;
          display: flex;
          .no-underline{
            text-decoration: none;
            /* padding-right: 30px; */
            .text-inscription-color{
              color: #EAA854;
            }
          }
        }
      }
    }
  }
  </style>
  