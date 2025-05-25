<template>
  <main class="header d-flex">
    <div class="logo">
      <router-link to="/">
        <img class="logo-img" src="../assets/Logo/Logo blanc@4x.png" alt="">
      </router-link>
    </div>

    <div class="navbar" v-click-outside="handleClickOutside">
      <div class="link-header" @click.prevent="toggleVoyage">
        Mon voyage
        <ul v-if="openVoyage" class="submenu">
          <div class="free">
            <li><router-link to="/transport" @click.native="handleClickOutside">Transport</router-link></li>
            <li><router-link to="/hebergement" @click.native="handleClickOutside">Hébergements</router-link></li>
            <li><router-link to="/activites" @click.native="handleClickOutside">Activités</router-link></li>
            <li><router-link to="/location" @click.native="handleClickOutside">Location de véhicules</router-link></li>
            <li><router-link to="/pays" @click.native="handleClickOutside">Pays</router-link></li>
            <li><router-link to="/maValise" @click.native="handleClickOutside">Que mettre dans ma valise ?</router-link></li>
            <li><router-link to="/reservationGestion" @click.native="handleClickOutside">Gérer ma réservation</router-link></li>
          </div>
          <div class="premium">
            <div class="icon-container">
              <v-icon class="icon-premium">mdi-crown-outline</v-icon>
            </div>
            <li><router-link to="/voyageMesure" @click.native="handleClickOutside">Créer mon voyage sur-mesure</router-link></li>
            <li><router-link to="/voyageProgramme" @click.native="handleClickOutside">Programme de mon voyage</router-link></li>
            <li><router-link to="/assurance" @click.native="handleClickOutside">Assurance H24 7/7</router-link></li>
          </div>
        </ul>
      </div>

      <div class="link-header" @click.prevent="toggleCommunaute">
        Notre communauté
        <ul v-if="openCommunaute" class="submenu">
          <div class="free">
            <li><router-link to="/conseil" @click.native="handleClickOutside">Les conseils</router-link></li>
            <li><router-link to="/coupsCoeurPage" @click.native="handleClickOutside">Les coups de coeur</router-link></li>
            <li><router-link to="/bonPlan" @click.native="handleClickOutside">Les bons plans</router-link></li>
            <li><router-link to="/vlogsChallenges" @click.native="handleClickOutside">Vlogs et challenges</router-link></li>
          </div>
          <div class="premium">
            <div class="icon-container">
              <v-icon class="icon-premium">mdi-crown-outline</v-icon>
            </div>
            <li><router-link to="/discuteCommunaute" @click.native="handleClickOutside">Discute avec notre communauté</router-link></li>
            <li><router-link to="/mapsCommunaute" @click.native="handleClickOutside">Maps communautaire</router-link></li>
            <li><router-link to="/shareExperience" @click.native="handleClickOutside">Partage ton expérience</router-link></li>
          </div>
        </ul>
      </div>

      <div class="link-header" @click.prevent="togglePresentation">
        Qui sommes-nous ?
        <ul v-if="openPresentation" class="submenuPresentation">
          <div class="free">
            <li><router-link to="/equipe" @click.native="handleClickOutside">Notre équipe</router-link></li>
            <li><router-link to="/partenaires" @click.native="handleClickOutside">Nos partenaires</router-link></li>
            <li><router-link to="/faq" @click.native="handleClickOutside">FAQ</router-link></li>
            <li><router-link to="/services" @click.native="handleClickOutside">Nos services</router-link></li>
            <li><router-link to="/fidelite" @click.native="handleClickOutside">Notre système de fidélité</router-link></li>
            <li><router-link to="/contact" @click.native="handleClickOutside">Contactez-nous</router-link></li>
          </div>
        </ul>
      </div>
    </div>

    <div class="compte">
      <router-link class="link-compte" to="">
        <v-icon class="compte-img">mdi-magnify</v-icon>
      </router-link>
      <router-link class="link-compte" to="/panier">
        <v-icon class="compte-img">mdi-cart-outline</v-icon>
      </router-link>
      <div @click.prevent="toggleCompte">
        <a class="link-compte" href="/connection" >
          <v-icon class="compte-img">mdi-account-circle-outline</v-icon>
        </a>
        <ul v-if="openCompte" class="submenuCompte">
          <div class="free">
            <li><router-link to="/compte" @click.native="handleClickOutside">Mon compte</router-link></li>
            <li><router-link to="/calendrier" @click.native="handleClickOutside">Mes rendez-vous</router-link></li>
            <div class="separator"></div>
            <li><router-link to="/login" @click.native="handleClickOutside">Se connecter</router-link></li>
            <li><router-link to="/parametres" @click.native="handleClickOutside">Paramètres</router-link></li>
          </div>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HeaderSite',
  data () {
    return {
      openVoyage: false,
      openCommunaute: false,
      openPresentation: false,
      openCompte: false
    }
  },
  methods: {
    handleClickOutside() {
      this.openVoyage = false
      this.openCommunaute = false
      this.openPresentation = false
    },
    toggleVoyage() {
      this.openVoyage = !this.openVoyage
      this.openCommunaute = false
      this.openPresentation = false
      this.openCompte = false
    },
    toggleCommunaute() {
      this.openCommunaute = !this.openCommunaute
      this.openVoyage = false
      this.openPresentation = false
      this.openCompte = false
    },
    togglePresentation() {
      this.openPresentation = !this.openPresentation
      this.openVoyage = false
      this.openCommunaute = false
      this.openCompte = false
    },
    toggleCompte() {
      this.openCompte = !this.openCompte
      this.openVoyage = false
      this.openCommunaute = false
      this.openPresentation = false
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
li {
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
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 250px;

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
        left: 0;
        min-width: 200px;
      }
    }
  }

  .compte {
    display: flex;
    width: 20%;
    margin: 5px 0px;
    justify-content: flex-end;
    align-items: center;

    .link-compte {
      .compte-img {
        width: 50px;
        height: 50px;
        float: right;
        color: white;
      }

      .submenuCompte {
        .free{
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
        }

      }
    }
  }

  .submenu,.submenuPresentation,.submenuCompte {
    z-index: 10000;
    background: #f9f9f9;
    padding: 10px;
    list-style: none;
    font-weight: 400;
    position: absolute;
    margin-top: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .submenuCompte{
    right: 1%;
    margin-top: 4%;
    .separator {
            margin: 10px 0px;
            border-top: 1px solid rgba(0, 0, 0, 0.5);
          }
  }
}
</style>
