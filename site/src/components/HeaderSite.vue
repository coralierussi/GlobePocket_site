<template>
  <main class="header d-flex">
      <div class="logo">
        <a href="/">
          <img class="logo-img" src="../assets/Logo/Logo blanc@4x.png" alt="">
        </a>
      </div>
      <div class="navbar" v-click-outside="handleClickOutside">
        <div class="link-header" href="#"  @click.prevent="toggleVoyage" >
            Mon voyage
            <ul v-if="openVoyage" class="submenu">
                <div class="free">
                    <li><a href="/transport">Transport</a></li>
                    <li><a href="/hebergement">Hébergements</a></li>
                    <li><a href="/activites">Activités</a></li>
                    <li><a href="/maValise">Que mettre dans ma valise ?</a></li>
                    <li><a href="/reservationGestion">Gérer ma réservation</a></li>
                </div>
                <div class="premium">
                    <div class="icon-container">
                      <v-icon class="icon-premium">mdi-crown-outline</v-icon>
                    </div>
                    <li><a href="/voyageMesure">Créer mon voyage sur-mesure</a></li>
                    <li><a href="/voyageProgramme">Programme de mon voyage</a></li>
                    <li><a href="/assurance">Assurance H24 7/7</a></li>
                </div>
            </ul>
        </div>

        <div class="link-header" href="#"  @click.prevent="toggleCommunaute" >
            Notre communauté
            <ul v-if="openCommunaute" class="submenu">
                <div class="free">
                    <li><a href="/conseil">Les conseils</a></li>
                    <li><a href="/coupsCoeurPage">Les coups de coeur</a></li>
                    <li><a href="/bonPlan">Les bons plans</a></li>
                    <li><a href="/vlogsChallenges">Vlogs et challenges</a></li>
                </div>
                <div class="premium">
                    <div class="icon-container">
                      <v-icon class="icon-premium">mdi-crown-outline</v-icon>
                    </div>
                    <li><a href="/discuteCommunaute">Discute avec notre communauté</a></li>
                    <li><a href="/mapsCommunaute">Maps communautaire</a></li>
                    <li><a href="/shareExperience">Partage ton expérience</a></li>
                </div>
            </ul>
        </div>
        <div class="link-header" href="#"  @click.prevent="togglePresentation" >
            Qui sommes-nous ?
            <ul v-if="openPresentation" class="submenuPresentation">
                <div class="free">
                    <li><a href="/equipe">Notre équipe</a></li>
                    <li><a href="/partenaires">Nos partenaires</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/services">Nos services</a></li>
                    <li><a href="/fidelite">Notre système de fidélité</a></li>
                    <li><a href="/contact">Contactez-nous</a></li>
                </div>
            </ul>
        </div>
      </div>
      <div class="compte">
        <a class="link-compte" href="">
            <v-icon class="compte-img">mdi-magnify</v-icon>
        </a>
        <a class="link-compte" href="/panier">
            <v-icon class="compte-img">mdi-cart-outline</v-icon>
        </a>
        <a class="link-compte" href="/connection" @click.prevent="toogleCompte">
            <v-icon class="compte-img">mdi-account-circle-outline</v-icon>
          </a>
          <ul v-if="openCompte" class="submenuCompte">
              <div class="free">
                  <li><a href="/comptePage">Mon compte</a></li>
                  <li><a href="/rdv">Mes rendez-vous</a></li>
                  <li><a href="/favoris">Mes favoris</a></li>
                  <div class="separator"></div>
                  <li><a href="/desinscription">Se désinscrire</a></li>
                  <li><a href="/parametres">Paramètres</a></li>
              </div>
          </ul>
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
                openVoyage: false,
                openCommunaute: false,
                openPresentation: false,
                openCompte: false,
            }
        },
         methods: {
          handleClickOutside() {
                this.openVoyage = false;
                this.openCommunaute = false;
                this.openPresentation = false;
                this.openCompte = false;
            },
            toggleVoyage() {
                this.openVoyage = !this.openVoyage;
                this.openCommunaute = false;
                this.openPresentation = false;
                this.openCompte = false;
            },
            toggleCommunaute() {
                this.openCommunaute = !this.openCommunaute;
                this.openVoyage = false;
                this.openPresentation = false;
                this.openCompte = false;
            },
            togglePresentation() {
                this.openPresentation = !this.openPresentation;
                this.openVoyage = false;
                this.openCommunaute = false;
                this.openCompte = false;
            },
            toggleCompte() {
                this.openCompte = !this.openCompte;
                this.openVoyage = false;
                this.openCommunaute = false;
                this.openPresentation = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: black;
}
li{
    list-style: none;
    color: black;
}
.header {
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100px;
  .logo {
    width: 250px;
    .logo-img {
      width: 55%;
      margin: 10px;
    }
  }
  .navbar {
    display: flex;
    margin-right: 80px;
    width: 50%;
    .link-header {
      cursor: pointer;
      color: white;
      font-weight: 700;
      margin: 0%;
      position: relative;
      .submenu {
        list-style: none;
        position: absolute;
        font-weight: 400;
        margin-top: 10px;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: #f9f9f9;
        padding: 10px;
        min-width: 100px;
        width: 250px;
        z-index: 100;

        .free {
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        }
        .premium {
            .icon-container {
                 display: flex;
                 justify-content: center;
                 margin-bottom: 8px;
                 .icon-premium {
                  font-size: 30px;
                  color: #c55230;
                }
            }
        }
      }

      .submenuPresentation {
        list-style: none;
        position: absolute;
        margin-top: 10px;
        font-weight: 400;
        top: 100%;
        left: 0;
        background: #f9f9f9;
        padding: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        min-width: 200px;
        z-index: 100;
      }
    }
  }

  .compte {
    display: flex;
    width: 20%;
    margin: 5px 0px;
    justify-content: flex-end;
    align-items: center;
    .link-compte{

      .compte-img {
          width: 50px;
          height: 50px;
          float: right;
          color: white;
      }
      .submenuCompte{
          list-style: none;
          position: absolute;
          margin-top: 10px;
          font-weight: 400;
          top: 60%;
          right: 5px;
          background: #f9f9f9;
          padding: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          min-width: 100px;
          z-index: 100;
          .separator {
              margin: 10px 0px;
              border-top: 1px solid rgba(0, 0, 0, 0.5)
          }
      }
    }

  }
  .submenu, .submenuPresentation, .submenuCompte {
    z-index: 9999; 
  }
}
</style>