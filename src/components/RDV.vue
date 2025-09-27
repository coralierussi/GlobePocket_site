<template>
  <v-app>
    <div>
      <div v-if="drawerOpen" class="overlay" @click="close"></div>

      <v-navigation-drawer
        v-model="drawerOpen"
        temporary
        class="popup-drawer"
        width="900"
        right
        hide-overlay
      >
        <v-card>
          <v-card-title>Prendre un rendez-vous</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="formValid">
              <v-text-field
                v-model="form.name"
                label="Nom"
                :rules="[v => !!v || 'Nom requis']"
                required
              />
              <v-text-field
                v-model="form.email"
                label="Email"
                :rules="[v => /.+@.+\..+/.test(v) || 'Email invalide']"
                required
              />

              <v-select
                :items="heuresDisponibles"
                label="Heure du rendez-vous"
                v-model="form.heure"
                required
                hide-details
                :menu-props="{ offsetY: true }"
              />
            </v-form>

            <p class="mt-2">
              📅 <strong>Date sélectionnée :</strong>
              {{ formatDate(selectedDate) }}
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn text @click="close">Annuler</v-btn>
            <v-btn :disabled="!formValid" @click="submitRdv">Valider</v-btn>
          </v-card-actions>
        </v-card>
      </v-navigation-drawer>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'RDV',
  props: {
    value: Boolean,
    selectedDate: String,
    rdv: Object,
  },
  data() {
    return {
      user: null,
      token: localStorage.getItem('token') || '',
      
      drawerOpen: this.value,
      formValid: false,
      form: {
        name: '',
        email: '',
        heure: '',
      },
      heuresDisponibles: [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30', '18:00', '18:30',
      ].map(h => ({ text: h, value: h })),
    };
  },
  watch: {
    value(val) {
      this.drawerOpen = val;
    },
    drawerOpen(val) {
      this.$emit('input', val);
      if (!val) {
        this.resetForm();
      }
    },
    rdv: {
    handler(newRdv) {
      if (newRdv) {
        this.form = {
          name: newRdv.name || '',
          email: newRdv.email || '',
          heure: newRdv.start ? newRdv.start.substr(11,5) : '',
        };
        this.selected = this.form.heure;
      } else {
        this.resetForm();
      }
    },
    immediate: true
  },
  selected(newVal) {
    this.form.heure = newVal;
  }
  },
  methods: {
    close() {
      this.drawerOpen = false;
    },
    resetForm() {
      this.form = { name: '', email: '', heure: '' };
      this.formValid = false;
    },
    submitRdv() {
  if (this.$refs.form.validate()) {
    this.$emit('rdv-confirmed', {
      id: this.rdv?.id || null, // conserve l’id si modification
      name: this.form.name,
      email: this.form.email,
      heure: this.form.heure,
      date: this.selectedDate,
    });
    this.drawerOpen = false;
  }
},
    formatDate(dateStr) {
      if (!dateStr) return '';
      const date = new Date(dateStr);
      return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
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

    // Récupération des rendez-vous
    fetch (process.env.VUE_APP_API_URL + '/rdv', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
    }).then(response => response.json())
    .then(data => {
      console.log('Rendez-vous récupérés :', data);
      this.user = data;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des rendez-vous :', error);
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

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
}
.popup-drawer {
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  max-height: 90vh;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 2025;
  padding: 20px;
  width: 900px !important;
}
.v-menu__content {
  z-index: 9999 !important;
}
</style>
