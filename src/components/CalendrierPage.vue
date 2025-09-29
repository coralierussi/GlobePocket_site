<template>
  <main id="calendrierPage">
    <HeaderSiteColor />
    <h1>Mes rendez-vous</h1>
    <v-container>
      <v-sheet height="600">
        <v-btn @click="moisPrecedent">‹ Mois précédent</v-btn>
    <v-btn @click="moisSuivant">Mois suivant ›</v-btn>
        <v-calendar
          ref="calendar"
          v-model="selectedDate"
          color="primary"
          type="month"
          :events="rdvs"
          event-color="blue"
          @click:date="onDateClick"
           @click:event="onEventClick"
        >
        <template #event="{ event }">
            <div class="d-flex align-center justify-space-between" style="width: 100%;">
              <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                {{ event.title }}
              </div>
              <v-btn
                icon
                small
                color="red"
                @click.stop="supprimerRdv(event.id)"
                title="Supprimer ce rendez-vous"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </template>
        </v-calendar>
      </v-sheet>

      <RDV
        v-model="open"
        :selected-date="selectedDate"
        @rdv-confirmed="ajouterRdv"
        :rdv="currentRdv"
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
      open: false,
      currentRdv: null,
      rdvs: [
        {
            id:1,
          name: 'RDV',
          start: '2025-10-03T10:00:00',
          end: '2025-10-03T10:30:00',
          title: 'RDV à 10:00',
        },
      ],
    };
  },
  methods: {
    onDateClick({ date }) {
      this.selectedDate = date;
    //   this.currentRdv = null;
      this.open = true;
    },
    onEventClick({ event }) {
    // Ouvre le drawer RDV en mode édition
    this.currentRdv = { ...event }; // clone l’objet pour éviter références directes
    this.open = true;
  },
  ajouterRdv(rdv) {
  // Construit start et end ISO string
  const start = `${rdv.date}T${rdv.heure}:00`;
  const endDate = new Date(new Date(start).getTime() + 30 * 60000); // +30 minutes
  const end = endDate.toISOString().substr(0, 19);

  const rdvToSave = {
    id: rdv.id || Date.now(),
    name: rdv.name,
    email: rdv.email,
    start,
    end,
    title: `${rdv.name} à ${rdv.heure}`,
    color: 'blue',
  };

  if (rdv.id) {
    const index = this.rdvs.findIndex(r => r.id === rdv.id);
    if (index !== -1) {
      this.$set(this.rdvs, index, rdvToSave);
    }
  } else {
    this.rdvs.push(rdvToSave);
  }
  this.open = false;
},
supprimerRdv(id) {
      const index = this.rdvs.findIndex(r => r.id === id);
      if (index !== -1) {
        this.rdvs.splice(index, 1);
      }
    },
    moisPrecedent() {
      const date = new Date(this.selectedDate);
      date.setMonth(date.getMonth() - 1);
      this.selectedDate = date.toISOString().substr(0, 10);
    },
    moisSuivant() {
      const date = new Date(this.selectedDate);
      date.setMonth(date.getMonth() + 1);
      this.selectedDate = date.toISOString().substr(0, 10);
    },
  },
  mounted(){

    // Ajout d’un rendez-vous
    fetch (process.env.VUE_APP_API_URL + '/rdv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify({ date_rdv: this.date_rdv, heure: this.heure, titre: this.titre, email: this.email })
    }).then(response => response.json())
    .then(data => {
      console.log('Rendez-vous ajouté :', data);
      this.user = data;
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout du rendez-vous :', error);
    });
    // Modification d’un rendez-vous
    fetch (process.env.VUE_APP_API_URL + '/rdv', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify({ date_rdv: this.date_rdv, heure: this.heure, titre: this.titre, email: this.email })
    }).then(response => response.json())
    .then(data => {
      console.log('Rendez-vous modifié :', data);
      this.user = data;
    })
    .catch(error => {
      console.error('Erreur lors de la modification du rendez-vous :', error);
    });

    // Suppression d’un rendez-vous
    fetch (process.env.VUE_APP_API_URL + '/rdv', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify({ id: this.id })
    }).then(response => response.json())
    .then(data => {
      console.log('Rendez-vous supprimé :', data);
      this.user = data;
    })
    .catch(error => {
      console.error('Erreur lors de la suppression du rendez-vous :', error);
    });
  }
};
</script>
