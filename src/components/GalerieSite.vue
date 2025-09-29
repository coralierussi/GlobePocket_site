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
      <!-- Bouton de fermeture -->
      <v-btn icon class="btn-close" @click="close">
        <v-icon class="icon-head">mdi-close</v-icon>
      </v-btn>

      <div class="head">
        <h4 class="title-slice">Ma galerie</h4>
      </div>

      <div class="contenu">
        <!-- Bouton d'import -->
        <div class="import-button">
            <v-btn samll class="btn-supp-all" @click="removeAllMedia()">
          Tout supprimer
        <v-icon color="red">mdi-delete</v-icon>
      </v-btn>
          <v-btn class="btn-add" small @click="triggerFileInput">
            <v-icon left>mdi-file-upload</v-icon>
            Importer des fichiers
          </v-btn>
          <input
            ref="fileInput"
            type="file"
            accept="image/*,video/*"
            multiple
            style="display: none;"
            @change="handleFileUpload"
          />
        </div>
        

        <!-- Galerie -->
        <div v-if="media.length === 0" class="empty-message">
          Aucun fichier importé.
        </div>
        <div v-else>
          <v-container fluid>
            <v-row dense>
             <v-col
  v-for="(file, index) in media"
  :key="index"
  cols="6"
  sm="4"
  md="3"
>
  <v-card class="media-card" outlined>
    <v-card-text>
      <div class="media-preview">
        <img
          v-if="file.type.startsWith('image')"
          :src="file.url"
          class="media-thumb"
        />
        <video
          v-else-if="file.type.startsWith('video')"
          :src="file.url"
          class="media-thumb"
          controls
        ></video>
      </div>

      <!-- Nom modifiable -->
      <v-text-field
        v-model="file.name"
        dense
        hide-details
        class="file-name"
        solo
        flat
      ></v-text-field>

      <!-- Bouton supprimer -->
      <div class="card-actions">
        <v-spacer />
        <v-btn icon class="btn-delete-inside" @click="removeMedia(index)">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
      </div>
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
  name: 'GalerieSite',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: this.value,
      media: [],

    };
  },
  watch: {
    value(val) {
      this.open = val;
    },
    open(val) {
      this.$emit('input', val);
    }
  },
  methods: {
    close() {
      this.open = false;
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const files = Array.from(event.target.files);
      const previews = files.map(file => ({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file)
      }));
      this.media.push(...previews);
    },
    removeMedia(index) {
      URL.revokeObjectURL(this.media[index].url);
      this.media.splice(index, 1);
    },
    removeAllMedia() {
       this.media.forEach(file => URL.revokeObjectURL(file.url));
        this.media = [];
        this.$emit('clear-media');
    },

    beforeDestroy() {
      this.media.forEach(file => URL.revokeObjectURL(file.url));
    },
  },
  mounted () {
    // Récupération des photos utilisateur
  fetch(process.env.VUE_APP_API_URL + "/users/photos", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    }
  }).then(response => response.json())
    .then(data => {
      console.log('Données utilisateur récupérées :', data);
      this.user = data;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données utilisateur :', error);
    });

    // Update des photos utilisateur
  fetch (process.env.VUE_APP_API_URL + '/users/photos', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    },
    body: JSON.stringify({ galerie: this.galerie })
  }).then(response => response.json())
    .then(data => {
      console.log('Photos utilisateur ajoutées :', data);
      this.user = data;
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout des photos :', error);
    });
  }
};
</script>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2020;
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

.btn-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2100;
}

.head {
  margin-bottom: 20px;
  .title-slice {
    font-size: 20px;
    font-weight: bold;
  }
}

.import-button {
  margin: 15px 20px;
  display: flex;
  .btn-add{
    margin-left: auto;
  }
}

.media-card {
  border-radius: 12px;
  aspect-ratio: auto;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  padding: 8px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  .media-thumb {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 8px;
  }

  .file-name {
    font-size: 14px;
    margin-top: 8px;
    width: 100%;
    border: 1px solid;
  }

  .card-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 4px;
  }
}


.empty-message {
  text-align: center;
  color: #666;
  margin-top: 40px;
  font-style: italic;
}
</style>
