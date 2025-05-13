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
                <li><a class="link-footer" href="/presentation">Qui sommes-nous ?</a> </li>
                <li><a class="link-footer" href="/pays">Nous rejoindre</a></li>
                <li><a class="link-footer" href="/activite">Conditions générales</a></li>
            </div>
            <div class="footer-bar-contact">
                <p class="titre-footer">Contacts</p>
                <li> <a class="link-footer" href="/presentation">Aide/FAQ</a></li>
                <li> <a class="link-footer" href="/contact">Contactez-nous</a> </li>
                <li><a class="link-footer" href="/paiementPage">Paiements sécurisés</a> </li>
            </div>
            <div class="footer-bar">
                <li><a class="link-footer" href="/mentionLegales">Mentions légales</a></li>
                <li><a class="link-footer" href="/politique">Politique cookies</a></li>
                <li><a class="link-footer" href="/donneesPersonnel">Charte des données personnelles</a></li>
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
    <div class="legale">
        <!-- <a class="ML" href="/mentionLegales">
            <p >Mentions légales</p>
        </a>
        <a href="/politiqueConfidentialite">
            <p>Politique de confidentialité</p>
        </a> -->
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
.main{
    width: 100%;
    overflow-y: hidden;
    margin-top: 60px;
    .footer{
    .logo{
      width: 15%;
      margin-top: 10px;
      .logo-img{
          width: 120px;
          margin: 5px;
      }
    }
    .footer-bar-globePocket, .footer-bar-contact, .footer-bar{
        margin-top: 10px;
        width: 21%;
        list-style: none;
        .titre-footer{
            color: #EAA854;
            font-weight: 650;
        }
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