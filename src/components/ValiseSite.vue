<template>
  <v-app>
    <main id="valiseSite">
    <HeaderSiteColor/>
      <h1 class="titre">Que mettre dans ma valise ?</h1>
      <p class="sous-titre">
        Faire sa valise, c’est souvent un vrai casse-tête… surtout quand on s’apprête à partir loin, dans un pays qu’on ne connaît pas encore bien. Avec Globe Pocket, plus besoin de stresser : on a pensé à tout pour vous simplifier la vie !
        <br> <br> On vous propose une liste évolutive, taillée sur-mesure selon votre destination, la météo locale et les activités que vous avez prévues. Que vous partiez léger en sac à dos, en mode famille nombreuse ou pour un break bien-être, on vous guide pas à pas : vêtements adaptés, papiers essentiels (passeport, visa, vaccins), objets pratiques (adaptateur, trousse de secours, CB internationale…) – rien n’est oublié.
        <br> <br> En quelques clics, vous obtenez votre checklist personnalisée. Cochez ce que vous avez déjà, et partez l’esprit vraiment léger. Préparer sa valise devient presque un jeu.
      </p>
      <div class="bagage-parfait" >
        <div class="doc">
          <p class="bagage-titre">Documents & Argent</p>
          <div class="liste d-flex" v-for="(document, index) in documents" :key="index">
            <v-checkbox></v-checkbox>
            <p>{{document.nom}}</p>
          </div>
        </div>
        <div class="habils" >
          <p class="bagage-titre">Vêtements</p>
          <div class="liste d-flex" v-for="(habil, index) in habils" :key="index">
            <v-checkbox></v-checkbox>
            <p>{{habil.nom}}</p>
          </div>
        </div>
        <div class="vaniti" >
          <p class="bagage-titre">Trousse de toillette</p>
          <div class="liste d-flex" v-for="(trousse, index) in trousses" :key="index">
            <v-checkbox></v-checkbox>
            <p>{{ trousse.nom }}</p>
          </div>
        </div>
        <div class="techno">
          <p class="bagage-titre">Electroniques & accessoires</p>
          <div class="liste d-flex" v-for="(techno, index) in technos" :key="index">
            <v-checkbox></v-checkbox>
            <p>{{ techno.nom }}</p>
          </div>
        </div>
        <div class="essentiels">
          <p class="bagage-titre">Autres essentiels</p>
          <div class="liste d-flex" v-for="(autre, index) in autres" :key="index">
            <v-checkbox></v-checkbox>
            <p>{{ autre.nom }}</p>
          </div>
        </div>
      </div>
      <FooterSite/>
    </main>
  </v-app>
</template>
  
  <script>
  import HeaderSiteColor from './HeaderSiteColor.vue';
  import FooterSite from './FooterSite.vue';
  
  export default {
    name: 'ValiseSite',
    components: { HeaderSiteColor, FooterSite},
    data(){
      return {
       documents: [
          {nom: "Passeport / Carte d'identité"},
          {nom: "Billet d'avion / train"},
          {nom: "Permis de conduire (si besoin)"},
          {nom: "Carte bancaire / Monnaie locale"},
          {nom: "Assurance voyage"},
          {nom: "Carnet de vaccination / Vaccins (si nécessaire)"},
          {nom: "Réservations d'hôtels / hébergements"},
          {nom: "Itinéraire de voyage"},
          {nom: "Numéros d'urgence (ambassade, hôpital)"},
        ],
        habils: [
          {nom: "T-shirts / chemises / robes"},
          {nom: "Pantalons / shorts / jupes"},
          {nom: "Pulls ou vestes"},
          {nom: "Sous-vêtements"},
          {nom: "Chaussettes"},
          {nom: "Chaussures de randonnée"},
          {nom: "Sandales / tongs"},
          {nom: "Vêtements de bain"},
          {nom: "Vêtements de sport"},
          {nom: "Vêtements de pluie"},
          {nom: "Pyjama"},
          {nom: "Accessoires (chapeaux, écharpes, ceintures)"},
          {nom: "Vêtements de soirée"},
        ],
        trousses: [
          {nom: "Brosse à dents + Dentifrice"},
          {nom: "Gel douche"},
          {nom: "Shampoing"},
          {nom: "Crème solaire"},
          {nom: "Déodorant"},
          {nom: "Médicaments"},
          {nom: "Maquillage (si besoin)"},
          {nom: "Brosse à cheveux / Peigne"},
          {nom: "Rasoir"},
          {nom: "Cotons-tiges"},
          {nom: "Lingettes démaquillantes"},
          {nom: "Crème hydratante"},
          {nom: "Baume à lèvres"},
          {nom: "Parfum"},
          {nom: "Coupe-ongles / pince à épiler"},
          {nom: "Serviette de bain"},
          {nom: "Serviette hygiénique / Tampons"},
        ],
        technos: [
          {nom: "Téléphone / Ordinateur / Tablette + Chargeur(s)"},
          {nom: "Appareil photo"},
          {nom: "Batteries externes"},
          {nom: "Câbles de recharge"},
          {nom: "Câbles USB universel"},
          {nom: "Écouteurs / casques"},
          {nom: "Adaptateur de voyage"},
          {nom: "Appareil photo / Caméra"},
        ],
        autres: [
          {nom: "Sac à dos"},
          {nom: "Bouteille d'eau / Gourde"},
          {nom: "Masques (selon les destinations)"},
          {nom: "Lunette de soleil"},
          {nom: "Guide de voyage / Carte"},
          {nom: "Carnet de notes / Stylo"},
        ],
      }
    },
  }
  </script>
  
  <style sccs scoped>
  li{
      text-decoration: none;
  }
  .v-input--selection-controls{
    padding: 0px;
    margin: 0px;
  }
  .titre{
    text-align: center;
    margin: 20px 0px;
  }
  .sous-titre{
    width: 90%;
    margin: 0% 5%;
  }
  .bagage-parfait{
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 5% 5%;
    .bagage-titre{
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .liste{
      width: 30%;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 10px;
      .d-flex{
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }
  </style>
  