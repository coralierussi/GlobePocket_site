<template>
    <main class="footer">
        <div class="lien d-flex">
            <div class="logo">
              <p class="logo-img" src="/site/src/App.vue" alt=""/>
          </div>
            <div class="footer-bar">
                <a class="link-footer" href="/main.vue">Accueil</a>
                <a class="link-footer" href="/main.vue">Qui sommes-nous ?</a>
                <a class="link-footer" href="/main.vue">Pays</a>
                <a class="link-footer" href="/main.vue">Activités</a>
                <a class="link-footer" href="/main.vue">Transports</a>
                <a class="link-footer" href="/main.vue">Hébergements</a>
                <a class="link-footer" href="/main.vue">Locations</a>
                <a class="link-footer" href="/site/src/">Contact</a>
                <a class="link-footer" href="/main.vue">Partenaires</a>
                <a class="link-footer" href="/main.vue">Others</a>
                <a class="link-footer" href="/main.vue">Others</a>
            </div>
            <div class="contact">
                <div class="rs d-flex">
                    <img class="img-rs" src="/site/src/assets/instagram.png" alt="Instagram">
                    <img class="img-rs" src="/site/src/assets/facebook.png" alt="Facebook">
                    <img class="img-rs" src="/site/src/assets/linkedin.png" alt="Linkedin">
                    <img class="img-rs" src="/site/src/assets/tik-tok.png" alt="TikTok">
                </div>
                <p class="mail">globePocket@gmail.com</p>
            </div>
        </div>
        
    </main>
  </template>
  
  <script>
  export default{
          name: 'HeaderSite',
          props:{
  
          },
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
//   li{
//       list-style: none;
//   }
  .footer{
      background-color: #7BB27F;
      width: 100%;
      height: 200px;
      display: grid;
    //   overflow: hidden;
      .lien{
          .logo{
              width: 25%;
              .logo-img{
                  border-radius: 100%;
                  background-color: grey;
                  width: 50px;
                  height: 50px;
                  margin: 5px;
              }
          }
          .footer-bar{
            text-align: center;
            width: 80%;
            .link-footer{
                  color: black;
                  padding-right: 5px;
              }
          }
          .contact{
            width: 25%;
            .mail{
                text-align: center;
            }
          }
      }
  }
  </style>
  