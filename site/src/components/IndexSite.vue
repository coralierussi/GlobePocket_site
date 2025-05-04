<template>
    <main id="indexSite">
        <HeaderSite/>
        <div class="presentation">
            <div class="carousel">            
                <div class="carousel-slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                      <img src="../assets/voyage-2.png" class="d-block w-100">
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                      <img src="../assets/voyage-1.png" class="d-block w-100">
                    </div>
                  </div>
                </div>
                <div class="en-tete">
                    <p class="title">Suivez vos envies</p>
                </div>
            </div>
        </div>
        <div class="globe">
            <div class="texte">
                <span>Vous ne savez pas où partir ?</span>
                <br>
                <span>Cliquez ici -></span>
            </div>
            <div class="img">
                <img class="img-globe" src="../assets/earth.jpg" alt="">
            </div>
        </div>
        <div class="services">
            <p class="sous-titre">Nos services</p>
            <div class="carousel">
                <div id="carouselExampleCaptions" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                        <h4 class="titre-service">Organisation de voyage personnalisé</h4>
                        <p class="text-service"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet  blandit felis, accumsan elementum sem. Donec fermentum feugiat congue.  Nunc eget finibus dolor, id placerat magna. Nullam mauris nisl,  malesuada at urna a, molestie pellentesque lorem. Donec ultrices ornare  eros, ut varius orci malesuada quis. Fusce mattis et erat nec suscipit.  Vestibulum porttitor tellus vitae velit convallis viverra id vel ligula. Nulla et sagittis arcu, ultrices laoreet metus. Vivamus a vehicula  libero, ut tempor nulla. Vivamus pulvinar, turpis id tempor pretium,  tortor ante maximus urna, id euismod risus est et purus.
                            Pellentesque varius posuere rutrum. Sed aliquet lectus id fermentum  tincidunt. Nam consectetur, justo at vulputate bibendum, sem purus  convallis ligula, sed volutpat dui diam sed mauris. In hac habitasse  platea dictumst. Sed eget nulla non nisi efficitur eleifend. Curabitur  viverra congue urna, sit amet gravida nulla gravida in. Nam non nibh in  ex molestie laoreet.
                        </p>
                        <v-btn type="button" class="btn-service" @click="showOrgaVoyage = true">
                          Voir plus
                        </v-btn>
                    
                        <OrganisationVoyage 
                          v-model="showOrgaVoyage" 
                        />
                    </div>
                    <div class="carousel-item">
                        <h4 class="titre-service">Retrouvez les meilleurs prix pour votre voyage</h4>
                        <p class="text-service">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet  blandit felis, accumsan elementum sem. Donec fermentum feugiat congue.  Nunc eget finibus dolor, id placerat magna. Nullam mauris nisl,  malesuada at urna a, molestie pellentesque lorem. Donec ultrices ornare  eros, ut varius orci malesuada quis. Fusce mattis et erat nec suscipit.  Vestibulum porttitor tellus vitae velit convallis viverra id vel ligula. Nulla et sagittis arcu, ultrices laoreet metus. Vivamus a vehicula  libero, ut tempor nulla. Vivamus pulvinar, turpis id tempor pretium,  tortor ante maximus urna, id euismod risus est et purus.
                            Pellentesque varius posuere rutrum. Sed aliquet lectus id fermentum  tincidunt. Nam consectetur, justo at vulputate bibendum, sem purus  convallis ligula, sed volutpat dui diam sed mauris. In hac habitasse  platea dictumst. Sed eget nulla non nisi efficitur eleifend. Curabitur  viverra congue urna, sit amet gravida nulla gravida in. Nam non nibh in  ex molestie laoreet.
                        </p>
                        <v-btn type="button" class="btn-service">Voir plus</v-btn>
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
            </div>
        </div>
        <div class="activites">
            <p class="sous-titre">Nos activités</p>
            <div class="coup-coeur">
                <h4 class="substiles">Les coups de coeurs</h4>
                <CoupCoeurs/> 
            </div>
            <div class="nouveautes">
                <h4 class="substiles">Les nouveautés</h4>
                <ActiviteNouveaute/>
            </div>
        </div>

        <FooterSite/>
    </main>
  </template>
  
  <script>
  import CoupCoeurs from './CoupCoeurs.vue';
  import HeaderSite from './HeaderSite.vue';
  import ActiviteNouveaute from './ActiviteNouveaute.vue';
  import FooterSite from './FooterSite.vue';
  import OrganisationVoyage from './OrganisationVoyage.vue';
  
  export default {
    name: 'IndexSite',
    components: { HeaderSite, CoupCoeurs, ActiviteNouveaute, FooterSite, OrganisationVoyage},
    data(){
      return {
        showOrgaVoyage: false,
      }
    },
    methods: {
    }
  }
</script>
  
<style sccs scoped>
  
  *{
      margin: 0%;
      padding: 0%;
  
  }
  a{
      text-decoration: none;
  }
  .presentation{
      .carousel {
          display: flex;
          position: relative;
          animation: slide 4s infinite alternate ease-in-out;
          z-index: -1;
      }
      .carousel img {
          width: 100%;
          height: auto;
      }
      .en-tete{
          position: absolute;
          width: 40%;
          background-color: rgb(158, 158, 158);
          border-radius: 50px;
          z-index: 10;
          margin: 20% 30%;
          .title{
              color: white;
              font-size: 300%;
              text-align: center;
          }
      }
  }
  .globe{
      margin-top: 100px;
      display: flex;
      .texte{
          padding-top: 125px;
          text-align: center;
          width: 60%;
          font-size: 50px;
      }
      .img{
          width: 40%;
          .img-globe{
              width: 80%;
          }
      }
  }
  .services{
      margin-top: 100px;
      .sous-titre{
          font-size: 45px;
          text-align: center;
          margin-bottom: 5%;
      }
      .carousel{
        .carousel-inner {
          height: 325px;
          .carousel-item{
            background-color: #D9D9D9;
            transition: transform 1s ease, opacity 0.5s ease;
            .titre-service{
                text-align: center;
                padding-bottom: 2%;
                padding-top: 1%;
                font-weight: 600;
            }
            .text-service{
                padding: 0% 8% 3% 8%;
            }
            .btn-service{
              background-color: #D54721;
              color: white;
                font-size: 17px;
                width: 10%;
                margin-bottom: 2%;
                border-radius: 20px;
                border: none;
                margin-left: 45%;
            }
            .slice{
              /* border: 1px solid black; */
              padding: 5px 20px;
              width: 100%;
              height: 200px;
              .head{
                  display: flex;
                  .title-slice{
                      margin-bottom: 20px;
                      width: 80%;
                  }
              }
            }
          }
        }
          
      }
  }
  .activites{
      margin: 100px 20px 100px 20px;
      .sous-titre{
          font-size: 45px;
          text-align: center;
          margin-bottom: 5%;
      }
      .coup-coeur{
          margin-bottom: 3%;
          .substiles{
              margin-bottom: 50px;
          }
      }
      .nouveautes{
          margin-bottom: 3%;
          .substiles{
              margin-bottom: 50px;
          }
      }
  }
  
  </style>