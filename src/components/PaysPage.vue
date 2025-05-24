<template>
    <main id="paysPage">
    <HeaderSiteColor/>

        <v-container>
    <div
      v-for="(continent, continentName) in continents"
      :key="continentName"
      class="mb-8"
    >
      <h2 class="font-weight-bold text-black mb-4">{{ continentName }}</h2>

      <v-expansion-panels
        multiple
        accordion
        class="d-flex flex-column"
      >
        <v-expansion-panel
          v-for="(pays, index) in continent.pays"
          :key="index"
        >
          <v-expansion-panel-header>
            {{ pays.titre }}    
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list dense>
              <v-list-item
                v-for="(ville, idx) in pays.villes"
                :key="idx"
              >
                <v-list-item-content>{{ ville }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
    <FooterSite/>

    </main>
</template>

<script>
import HeaderSiteColor from './HeaderSiteColor.vue';
import FooterSite from './FooterSite.vue';
export default {
    name: "PaysPage",
    components: { HeaderSiteColor, FooterSite},
  data() {
    return {
      continents: {
        Europe: {
          pays: [
            { titre: "France", languesParlees: ["Français"], villes: ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"] },
            { titre: "Allemagne", languesParlees: ["Allemand"], villes: ["Berlin", "Hambourg", "Munich", "Cologne"] },
            { titre: "Italie", languesParlees: ["Italien"], villes: ["Rome", "Milan", "Naples", "Turin"] },
            { titre: "Espagne", languesParlees: ["Espagnol"], villes: ["Madrid", "Barcelone", "Valence"] },
          ],
        },
        Afrique: {
          pays: [
            { titre: "Nigeria", languesParlees: ["Anglais"], villes: ["Lagos", "Abuja", "Kano"] },
            { titre: "Égypte", languesParlees: ["Arabe"], villes: ["Le Caire", "Alexandrie", "Gizeh"] },
            { titre: "Afrique du Sud", languesParlees: ["Anglais", "Afrikaans", "Zoulou"], villes: ["Johannesburg", "Le Cap", "Durban"] },
          ],
        },
        Asie: {
          pays: [
            { titre: "Chine", languesParlees: ["Mandarin", "Cantonais"], villes: ["Pékin", "Shanghai", "Guangzhou"] },
            { titre: "Inde", languesParlees: ["Hindi", "Anglais"], villes: ["New Delhi", "Mumbai", "Bengaluru"] },
            { titre: "Japon", languesParlees: ["Japonais"], villes: ["Tokyo", "Yokohama", "Osaka"] },
          ],
        },
        Océanie: {
          pays: [
            { titre: "Australie", languesParlees: ["Anglais"], villes: ["Canberra", "Sydney", "Melbourne"] },
            { titre: "Nouvelle-Zélande", languesParlees: ["Anglais", "Maori"], villes: ["Wellington", "Auckland", "Christchurch"] },
          ],
        },
        Amériques: {
          pays: [
            { titre: "États-Unis", languesParlees: ["Anglais"], villes: ["New York", "Los Angeles", "Chicago"] },
            { titre: "Canada", languesParlees: ["Anglais", "Français"], villes: ["Toronto", "Montréal", "Vancouver"] },
            { titre: "Brésil", languesParlees: ["Portugais"], villes: ["São Paulo", "Rio de Janeiro", "Brasília"] },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
    .text-black {
  color: #000;
}
</style>