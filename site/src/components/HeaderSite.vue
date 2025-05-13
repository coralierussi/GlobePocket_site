<template>
  <main class="header d-flex">
      <div class="logo">
        <a href="/">
          <img class="logo-img" src="../assets/Logo/Logo blanc@4x.png" alt="">
        </a>
      </div>
      <div class="navbar">
        <a class="link-header" href="/voyage" @mouseenter="openVoyage = true" @mouseleave="openVoyage = false">
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
                    <v-icon>mdi-crown-outline</v-icon>
                    <li><a href="/voyageMesure">Créer mon voyage sur-mesure</a></li>
                    <li><a href="/voyageProgramme">Programme de mon voyage</a></li>
                    <li><a href="/assurance">Assurance H24 7/7</a></li>
                </div>
            </ul>
        </a>

        <a class="link-header" href="/communaute" @mouseenter="openCommunaute = true" @mouseleave="openCommunaute = false">
            Notre communauté
            <ul v-if="openCommunaute" class="submenu">
                <div class="free">
                    <li><a href="/conseil">Les conseils</a></li>
                    <li><a href="/coupsCoeurPage">Les coups de coeur</a></li>
                    <li><a href="/bonPlan">Les bons plans</a></li>
                    <li><a href="/vlogsChallenges">Vlogs et challenges</a></li>
                </div>
                <div class="premium">
                    <v-icon>mdi-crown-outline</v-icon>
                    <li><a href="/discuteCommunaute">Discute avec notre communauté</a></li>
                    <li><a href="/mapsCommunaute">Maps communautaire</a></li>
                    <li><a href="/shareExperience">Partage ton expérience</a></li>
                </div>
            </ul>
        </a>
        <a class="link-header" href="/presentation" @mouseenter="openPresentation = true" @mouseleave="openPresentation = false">
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
        </a>
      </div>
      <div class="compte">
        <v-icon class="compte-img">mdi-magnify</v-icon>
        <v-icon class="compte-img">mdi-cart-outline</v-icon>
        <v-icon class="compte-img">mdi-account-circle-outline</v-icon>
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
            }
        }
    }
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: black;
}
.header {
  background-color: transparent !important;
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1000; 

  .logo {
    width: 20%;
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
      color: white;
      font-weight: 700;
      margin: 0%;
      position: relative;

      .submenu {
        display: flex;
        list-style: none;
        position: absolute;
        font-weight: 400;
        margin-top: 10px;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: #f9f9f9;
        padding: 10px;
        min-width: 200px;
        width: 450px;
        z-index: 100;

        .free {
          padding-right: 10px;
          border-right: 1px solid #ccc;
        }
        .premium {
          padding-left: 15px;
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

    .compte-img {
        width: 50px;
        height: 50px;
        float: right;
        color: white;
    }
  }
}
</style>
