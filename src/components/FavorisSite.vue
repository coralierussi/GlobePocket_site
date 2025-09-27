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
        <div v-if="favorisLocal.length === 0" class="empty-message">
          Vous n'avez pas de favoris.
        </div>
        <div v-else>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="(item, index) in favorisLocal"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                class="position-relative"
              >
                <!-- Carte carré -->
                <v-card class="favori-card" outlined>
                  <v-card-text>
                    <div class="titre">{{ item.titre }}</div>
                    <div class="description">{{ item.description }}</div>
                    <!-- Bouton suppression en bas à droite DANS la carte -->
                    <!-- <v-btn
                      icon
                      class="btn-delete-inside"
                      @click="supprimerFavori(index)"
                    >
                      <v-icon color="red">mdi-delete</v-icon>
                    </v-btn> -->
                  </v-card-text>
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
      user: null,
      token: localStorage.getItem('token') || '',

      open: this.value,
      favorisLocal: [...this.favoris]
    }
  },
  watch: {
    value(val) {
      this.open = val;
    },
    open(val) {
      this.$emit('input', val);
    },
     favoris(newFavs) {
      this.favorisLocal = [...newFavs];
    },
  },
  methods: {
    close() {
      this.open = false;
    },
    supprimerFavori(index) {
      this.favorisLocal.splice(index, 1);
      this.$emit('update:favoris', this.favorisLocal);
    }
  },

  mounted(){
    fetch (process.env.VUE_APP_API_URL + '/voyages/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      },
    }).then(response => response.json())
    .then(data => {
      console.log('Favoris récupérés :', data);
      this.user = data;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des favoris :', error);
    });
  }
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
