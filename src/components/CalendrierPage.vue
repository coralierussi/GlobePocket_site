<template>
  <main id="calendrierPage">
    <HeaderSiteColor />
    <h1>Mes rendez-vous</h1>
    <v-container>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="selectedDate"
          color="primary"
          type="month"
          @click:date="onDateClick"
        />
      </v-sheet>

      <!-- Drawer RDV synchronisé avec 'drawer' et 'selectedDate' -->
      <RDV
        v-model:open="drawer"
        :selected-date="selectedDate"
      />
    </v-container>
    <FooterSite />
  </main>
</template>

<script>
import FooterSite from './FooterSite.vue';
import HeaderSiteColor from './HeaderSiteColor.vue';
import RDV from './RDV.vue';

export default {
  name: 'CalendrierPage',
  components: {
    FooterSite,
    HeaderSiteColor,
    RDV,
  },
  data() {
    return {
      selectedDate: new Date().toISOString().substr(0, 10),
      drawer: false,
    };
  },
  methods: {
    onDateClick({ date }) {
      this.selectedDate = date;
      this.drawer = true;
    },
  },
};
</script>
