<template>
    <v-app>
        <main id="registerForm">
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
            
            <v-container class="login-container" fluid>
                <v-row justify="center" align="center">
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
                            type="email"
                            style="margin-bottom: 5%;"
                          ></v-text-field>
                        
                          <v-text-field
                            label="Mot de passe"
                            v-model="password"
                            :rules="passwordRules"
                            outlined
                            dense
                            required
                            hide-details
                            rounded
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword = !showPassword"
                            :type="showPassword ? 'text' : 'password'"
                          ></v-text-field>
                        
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
            </v-container>

            <div class="btn-connect">
                    <v-btn
                      class="btn-connexion"
                      :disabled="!valid"
                      block
                      @click="submit"
                    >
                      S'inscrire
                    </v-btn>
            </div>
            <div class="inscription d-flex justify-center mt-4">
              <p>Vous avez déjà un compte ?&nbsp;</p>
              <router-link to="/login" class="text-inscription-color">Connectez-vous !</router-link>
            </div>

          </div>
        </div>
      </div>
        </main>
        
    </v-app>
</template>



<script>
export default {
    name: 'RegisterForm',
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
  // methods: {
  //   async submit() {
  //     const res = await fetch(process.env.VUE_APP_API_URL + 'auth/register', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email: this.email, password: this.password, name:this.name })
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       alert(data.message);
  //       this.$router.push('/compte'); // redirige vers la page compte
  //     } else {
  //       alert(data.message || 'Erreur à l’inscription');
  //     }
  //   }
  // },
  mounted() {
  fetch(process.env.VUE_APP_API_URL + 'auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: this.email, password: this.password, name:this.name })
  }).then(response => response.json())
    .then(data => {
      console.log('Utilisateur créé :', data);
      this.user = data;
      localStorage.setItem('token', data.token);
      this.$router.push('/compte'); // redirige vers la page compte
    })
    .catch(error => {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
    });
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
          /* padding-bottom: 25px; */
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
