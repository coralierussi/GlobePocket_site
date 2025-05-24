<template>
  <div v-if="open" class="overlay" @click="close"></div>

  <v-navigation-drawer 
  v-model="open"
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
            v-model="form.nom"
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
          <v-text-field
            v-model="form.heure"
            label="Heure (HH:mm)"
            :rules="[v => !!v || 'Heure requise']"
            required
          />
        </v-form>
        <p class="mt-2">📅 <strong>Date sélectionnée :</strong> {{ selectedDate }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="close">Annuler</v-btn>
        <v-btn color="primary" :disabled="!formValid" @click="submitRdv">Valider</v-btn>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'RDV',
  props: {
    selectedDate: String,
    open: this.value,
  },
  data() {
    return {
      formValid: false,
      form: {
        nom: '',
        email: '',
        heure: '',
      },
    };
  },
  watch: {
    open(val) {
      if (!val) {
        this.form = { nom: '', email: '', heure: '' };
        this.formValid = false;
      }
    },
  },
  methods: {
    close() {
      this.$emit('update:open', false);
    },
    submitRdv() {
      if (this.$refs.form.validate()) {
        alert(
          `RDV confirmé le ${this.selectedDate} à ${this.form.heure} pour ${this.form.nom}`
        );
        this.$emit('update:open', false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
}
</style>
