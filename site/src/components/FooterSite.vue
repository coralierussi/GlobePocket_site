<template>
    <main class="footer">
        <!-- <div class="lien d-flex"> -->
            <div class="logo">
              <p class="logo-img" src="/site/src/App.vue" alt=""/>
          </div>
            <div class="footer-bar">
                <li><a class="link-footer" href="/main.vue">Accueil</a></li>
                <li><a class="link-footer" href="/main.vue">Qui sommes-nous ?</a></li>
                <li><a class="link-footer" href="/main.vue">Pays</a></li>
                <li><a class="link-footer" href="/main.vue">Activités</a></li>
                <li><a class="link-footer" href="/main.vue">Transports</a></li>
                <li><a class="link-footer" href="/main.vue">Hébergements</a></li>
                <li><a class="link-footer" href="/main.vue">Locations</a></li>
                <li><a class="link-footer" href="./ContactSite.vue">Contact</a></li>
                <li><a class="link-footer" href="/main.vue">Partenaires</a></li>
                <li><a class="link-footer" href="/main.vue">Others</a></li>
                <li><a class="link-footer" href="/main.vue">Others</a></li>
            </div>
            <div class="contact">
                <div class="rs d-flex">
                    <v-icon class="img-rs"> mdi-instagram</v-icon>
                    <v-icon class="img-rs">mdi-facebook </v-icon>
                    <v-icon class="img-rs"> mdi-linkedin</v-icon>
                    <img class="img-rs" src="/site/src/assets/tik-tok.png" alt="TikTok">
                </div>
                <p class="mail">globePocket@gmail.com</p>
            </div>
        <!-- </div> -->
        
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
  li{
    list-style: none;
}
  .footer{
    background-color: #ACCAB2;
      width: 100%;
      height: 200px;
      display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   .lien{
          .logo{
              width: 15%;
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
            width: 60%;
            display: flex;
            // margin: 0px 10px;
            // margin-left: auto;
            .link-footer{
                color: black;
                padding-right: 5px;
                width: 100%;
              }
          }
          .contact{
            width: 25%;
            // margin-left: 40px;
            .mail{
                text-align: center;
            }
          }
      }
//   }
  </style>