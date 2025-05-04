<template>
    <main class="main">
        <div class="footer d-flex">
            <div class="logo">
              <p class="logo-img" href="/" alt=""/>
            </div>
            <div class="footer-bar">
                <a class="link-footer" href="/">Accueil</a>
                <a class="link-footer" href="/presentation">Qui sommes-nous ?</a>
                <a class="link-footer" href="/pays">Pays</a>
                <a class="link-footer" href="/activite">Activités</a>
                <a class="link-footer" href="/transport">Transports</a>
                <a class="link-footer" href="/hebergement">Hébergements</a>
                <a class="link-footer" href="/location">Locations</a>
                <a class="link-footer" href="./contact">Contact</a>
                <a class="link-footer" href="/">Partenaires</a>
                <a class="link-footer" href="/">Others</a>
                <a class="link-footer" href="/">Others</a>
            </div>
            <div class="contact">
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
                    <p class="mail">globePocket@gmail.com</p>
            </div>
        
    </div>
    <div class="legale d-flex">
        <a class="ML" href="/mentionLegales">
            <p >Mentions légales</p>
        </a>
        <a href="/politiqueConfidentialite">
            <p>Politique de confidentialité</p>
        </a>
            <p>Copyright <v-icon> mdi-copyright</v-icon> 2025 GlobePocket. Tous droits réservés.</p>
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
.main{
    background-color: #ACCAB2;
    width: 100%;
    overflow-y: hidden;
    margin-top: 60px;
    .footer{
    .logo{
      width: 15%;
      margin-top: 10px;
      .logo-img{
          border-radius: 100%;
          background-color: grey;
          width: 50px;
          height: 50px;
          margin: 5px;
      }
    }
    .footer-bar{
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap; // permet le retour à la ligne
      justify-content: center; // centre les liens
      gap: 1rem; // espace entre les liens
      height: 70px;
      .link-footer{
          color: black;
          padding: 0rem 0.5rem;
        }
    }
    .contact{
      width: 20%;
      margin-top: 10px;
      .rs{
          justify-content: center;
          margin-bottom: 10px;
          .img-rs{
              width: 30px;
              height: 30px;
              margin: 5px 5px;
          }
      }
      .mail{
          text-align: center;
      }
    }
    }
    .legale{
        border-top: solid 1px grey;
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 30px 0px 5px 0px;
        .ML{
            margin-left: 10px;
        }
        p{
            color: black;
            font-size: 12px;
            margin: 0px 5px;
        }
    }
}

  </style>