<template>
    <main class="main">
        <div class="footer d-flex">
            <div class="logo">
                <a href="/">
                    <img class="logo-img" src="../assets/Logo/logo original@4x.png" alt="">
                </a>
            </div>
            <div class="footer-bar-globePocket">
  <p class="titre-footer">Globe Pocket</p>
  <li><router-link class="link-footer" to="/presentation">Qui sommes-nous ?</router-link></li>
  <li><router-link class="link-footer" to="/pays">Nous rejoindre</router-link></li>
  <li><router-link class="link-footer" to="/activites">Conditions générales</router-link></li>
</div>

<div class="footer-bar-contact">
  <p class="titre-footer">Contacts</p>
  <li><router-link class="link-footer" to="/presentation">Aide/FAQ</router-link></li>
  <li><router-link class="link-footer" to="/contact">Contactez-nous</router-link></li>
  <li><router-link class="link-footer" to="/paiementPage">Paiements sécurisés</router-link></li>
</div>

<div class="footer-bar">
  <p class="titre-footer">Informations légales et confidentialité</p>
  <li><router-link class="link-footer" to="/mentionLegales">Mentions légales</router-link></li>
  <li><router-link class="link-footer" to="/politique">Politique cookies</router-link></li>
  <li><router-link class="link-footer" to="/donneesPersonnel">Charte des données personnelles</router-link></li>
</div>

        
    </div>
    <div class="legale">
        <p> <v-icon> mdi-copyright</v-icon> 2025 GlobePocket. Tous droits réservés.</p>
    </div>
    </main>
    
  </template>
  
  <script>


  export default{
          name: 'HeaderSite',
          data (){
              return {
  
              }
          }
      }
  </script>
  
  <style lang="scss" scoped>
a{
    text-decoration: none;
}
html, body {
  height: 100%;
  margin: 0;
}

.main {
  display: flex;
  flex-direction: column;
  min-height: 60vh; // assure que la page prend toute la hauteur
//   margin-top: 60px;
  overflow-y: hidden;

  .footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 0;
    background-color: rgba(244, 231, 198, 0.5);
    margin-top: auto; // ⬅️ pousse le footer en bas quand peu de contenu

    .logo {
      width: 15%;
      margin-top: 10px;

      .logo-img {
        width: 120px;
        margin: 5px;
      }
    }

    .footer-bar-globePocket,
    .footer-bar-contact,
    .footer-bar {
      margin-top: 10px;
      width: 28%;
      list-style: none;

      .titre-footer {
        color: #EAA854;
        font-weight: 650;
      }

      .link-footer {
        color: black;
        padding: 0rem 0.5rem;
      }
    }
  }

  .legale {
    border-top: solid 1px grey;
    background-color: rgba(244, 231, 198, 0.5);
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 10px 0;
    // background-color: white;

    p {
      color: black;
      font-size: 12px;
      margin: 0px 5px;
    }
  }
}


  </style>