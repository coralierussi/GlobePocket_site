<template>
    <v-app>
        <main id="loginForm">
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
            <!-- <div class="google btn-auth">
              <img class="icon-google" src="../assets/Logo/google.png" alt="">
              <p class="text-connect-with">Se connecter avec Google</p>
            </div>
            <div class="facebook btn-auth">
              <img class="icon-facebook" src="../assets/Logo/facebook.png" alt="">
              <p class="text-connect-with">Se connecter avec Facebook</p>
            </div>

            <p class="ou">ou</p> -->


            <v-container class="login-container" fluid>
                <v-row justify="center" align="center" >
                    <v-col>
                        <v-card outlined>
                            <v-card-text>
                            <v-form v-model="valid" style="width: 60%; margin: 0% 20%;">
                              <v-text-field
                              label="Nom"
                              v-model="name"
                              :rules="nameRules"
                              outlined
                              dense
                              required
                              hide-details
                              rounded
                              type="text"
                              style="margin-bottom: 5%;"
                            ></v-text-field>
                                <v-text-field
                                  label="Email"
                                  v-model="email"
                                  :rules="emailRules"
                                  outlined
                                  dense
                                  required
                                  hide-details
                                  rounded
                                  style="margin-bottom: 5%;"
                                ></v-text-field>

                                <v-text-field
                                  label="Mot de passe"
                                  v-model="password"
                                  :rules="passwordRules"
                                  outlined
                                  required
                                  hide-details
                                  dense
                                  rounded
                                  :type="showPassword ? 'text' : 'password'"
                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                  @click:append="showPassword = !showPassword"
                                />

                            </v-form>
                          </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>



            <div class="forget d-flex" >
  <!-- <div class="souvenir d-flex" style="align-items: center;">
    <v-checkbox v-model="remember" hide-details dense></v-checkbox>
    <p class="text-forget-souvenir">Se rappeler de moi</p>
  </div> -->
  <div class="forget-password">
    <a href="#" class="text-forget-souvenir">Mot de passe oublié ?</a>
  </div>
</div>

            <div class="btn-connect">
                    <v-btn
                      class="btn-connexion"
                      :disabled="!valid"
                      block
                      @click="submit"
                    >
                      Se connecter
                    </v-btn>
            </div>
            <div class="inscription d-flex justify-center mt-4">
              <p>Vous n’avez pas encore de compte ?&nbsp;</p>
              <router-link to="/register" class="text-inscription-color">Inscrivez-vous !</router-link>
            </div>

          </div>
        </div>
      </div>
            

        </main>
        
    </v-app>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      user: null,
      token: localStorage.getItem('token') || '',

      email: '',
      password: '',
      showPassword: false,
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Nom requis',
        v => (v && v.length <= 20) || 'Le nom doit contenir au plus 20 caractères',
      ],
      emailRules: [
        v => !!v || 'Email requis',
        v => /.+@.+\..+/.test(v) || 'Email invalide',
      ],
      passwordRules: [
        v => !!v || 'Mot de passe requis',
        v => v.length >= 6 || 'Le mot de passe doit contenir au moins 6 caractères',
      ],
    };
  },
  methods: {
    async submit() {
  const res = await fetch(process.env.VUE_APP_API_URL + 'auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: this.email, password: this.password })
  });

  if (!res.ok) {
    alert('Échec de la connexion');
    return;
  }

  const data = await res.json();
  localStorage.setItem('token', data.token);
  this.$router.push('/compte');
}
  },
};
</script>

<style scoped>
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
          /* border-bottom: 1px solid black; */
          padding-bottom: 25px;
        }
        .btn-auth {
  width: 50%;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 10px;
  justify-content: center;
  cursor: pointer;
  margin: 10px 25%;
  background-color: white;
  transition: background 0.3s;
}

.btn-auth:hover {
  background-color: #f0f0f0;
}

.icon-google,
.icon-facebook {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

        .ou{
          text-align: center;
        }
        
        .forget{
            width: 60%;
            justify-content: space-between;
            margin: 2% 20%;
          .forget-password{
            .text-forget-souvenir {
              font-size: 13px;
              color: grey;
            }

          }
        }
        .btn-connect{
            margin: 0% 30%;
            .btn-connexion {
              background-color: #EAA854;
              color: white;
              border-radius: 25px;
              font-weight: 600;
              text-transform: none;
              padding: 12px 0;
              font-size: 16px;
              box-shadow: none;
              transition: background 0.3s, color 0.3s;
            }

            .btn-connexion:hover {
              background-color: rgba(244, 231, 198);
              color: black;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
        }
        .inscription{
          align-items: center;
          justify-content: center;
          display: flex;
            .text-inscription-color {
              color: #EAA854;
              font-weight: 600;
              text-decoration: none;
            }

        }
      }
    }
    .v-sheet.v-card{
        border-radius: 0%;
    }
    .theme--light.v-sheet--outlined{
        border: none;
    }
  }
</style>