<template>
  <div>
    <div v-if="open" class="overlay" @click="close"></div>

    <v-navigation-drawer 
      v-model="open"
      temporary 
      class="popup-drawer"
      width="900"
      right
      hide-overlay
    >
      <!-- Croix en haut à gauche -->
      <v-btn icon class="btn-close" @click="close">
        <v-icon class="icon-head">mdi-close</v-icon>
      </v-btn>

      <div class="head">
        <h4 class="title-slice">Mes favoris</h4>
      </div>

      <div class="contenu">
  <div v-if="favoris.length === 0" class="empty-message">
    Vous n'avez pas de favoris.
  </div>

  <div v-else>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="item in favoris"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          class="position-relative"
        >
          <v-card class="favori-card" outlined>
            <v-img :src="item.image" height="150px" class="white--text align-end">
                <v-card-title>{{ item.name }}</v-card-title>
            </v-img>

            <v-card-text>
              <div>{{ item.description }}</div>
            </v-card-text>
            
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                  icon 
                  @click="$emit('update:favoris')" 
                  title="Supprimer des favoris"
                >
                    <v-icon color="red">mdi-heart</v-icon>
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</div>
    </v-navigation-drawer>
  </div>
</template>




<script>
export default {
  name: 'FavorisSite',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    favoris: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      open: this.value,
      // ON SUPPRIME favorisLocal !
    }
  },
  watch: {
    value(val) { this.open = val; },
    open(val) { this.$emit('input', val); },
  },
  methods: {
    close() {
      this.open = false;
    },
    // MÉTHODE MISE À JOUR : elle ne fait qu'émettre un événement
    supprimerFavori(item) {
        // On demande au parent de gérer la suppression pour cet item
        // On peut directement appeler la méthode du parent qui fait le toggle
        this.$emit('toggle-favorite', item);
    }
  },
}
</script>

<style lang="scss" scoped>
/* Overlay gris */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  z-index: 2020;
}

/* Drawer style popup */
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

.btn-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2100;
}

.favori-card {
  border-radius: 12px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .v-card-text {
    height: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .titre {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .description {
    font-size: 14px;
    color: #666;
  }

  .btn-delete-inside {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    z-index: 5;
  }
}

.empty-message {
  text-align: center;
  color: #666;
  margin-top: 40px;
  font-style: italic;
}

</style>
