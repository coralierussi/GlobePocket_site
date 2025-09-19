<template>
  <main id="comptePage">
    <HeaderSiteColor/>

    <h1 class="titre">Mon compte</h1>

    <div>
      <!-- Pseudo et Description -->
      <div>
        <div class="user-json">
          <p>{{ JSON.stringify(user) }}</p>
          <p>token: {{ token }}</p>
        </div>
        <!-- PSEUDO -->
        <div class="pseudo d-flex" style="align-items: center;">
      <div class="img-avatar"></div>

      <div v-if="isEditingPseudo" style="margin-left: 10px;">
        <input
          type="text"
          v-model="editedPseudo"
          @keydown.enter.prevent="savePseudo"
          @keydown.esc="cancelPseudo"
          style="width: 100%;"
        />

      </div>
      <div v-else style="margin-left: 10px;">
        <p class="text-pseudo">{{ pseudo }}</p>
      </div>

      <!-- Icône Modifier/Enregistrer -->
      <v-btn icon small @click="toggleEditPseudo" class="ml-2">
        <v-icon>{{ isEditingPseudo ? 'mdi-content-save' : 'mdi-pencil' }}</v-icon>
      </v-btn>
        </div>
      
        <!-- DESCRIPTION -->
        <div class="description d-flex" style="align-items: center; margin-top: 20px; max-width: 400px;">
  <div style="flex: 1;">
    <div v-if="isEditingDescription">
      <textarea type="text" v-model="editedDescription" @keydown.esc="cancelDescription" style="width: 100%;"></textarea>
    </div>
    <div v-else>
      <p>{{ description || 'Aucune description' }}</p>
    </div>
  </div>

  <v-btn icon small @click="toggleEditDescription" class="ml-2">
    <v-icon>{{ isEditingDescription ? 'mdi-content-save' : 'mdi-pencil' }}</v-icon>
  </v-btn>
        </div>
      
        <!-- Input fichiers  -->
        <input type="file" multiple ref="fileInput" @change="handleFileUpload" style="display: none;" />
      </div>
      <input type="file" multiple ref="fileInput" @change="handleFileUpload" style="display: none;" />
    </div>

    <div class="documents">
  <div class="titre-doc d-flex">
    <p class="titre-document">Mes documents</p>
    <v-icon class="icon-document" @click="triggerFileInput">
      mdi-file-import-outline
    </v-icon>
    <input
      ref="fileInput"
      type="file"
      multiple
      style="display: none"
      @change="handleFileUpload"
    />
  </div>
  <div class="lien-doc">
    <p class="file-lien-doc" v-if="files.length === 0">
      Pas de fichiers importés
    </p>
    <div v-else class="file-grid">
  <v-container fluid>
  <v-row dense>
<v-col
  v-for="(file, index) in filePreviews"
  :key="index"
  cols="12"
  sm="6"
  md="4"
  lg="3"
  xl="2"
>
  <v-card
    class="file-card-compact-narrow"
    outlined
    @click="openFilePreview(file)"
    style="cursor: pointer;"
  >
    <!-- Aperçu image/pdf -->
    <v-img
      v-if="file.type.includes('image')"
      :src="file.url"
      height="120px"
      contain
    ></v-img>

    <div v-else class="file-icon-container">
      <v-icon
        v-if="file.type === 'application/pdf'"
        color="red"
        size="48"
      >
        mdi-file-pdf-box
      </v-icon>
      <v-icon
        v-else
        color="grey"
        size="48"
      >
        mdi-file-outline
      </v-icon>
    </div>

    <v-card-text class="text-center text-caption">
      {{ file.name }}
    </v-card-text>
  </v-card>
</v-col>



  </v-row>
</v-container>

</div>

<!-- Popup fichier -->
<DocumentViewer
  v-model="showFileViewer"
  :file="selectedFile"
/>


  </div>
</div>


    <div class="favoris">
      <div class="titre-favoris d-flex">
        <p class="titre-favoris">Mes favoris</p>
      </div>
      <v-btn class="btn-favoris" @click="openDrawer = true">
        Voir plus
      </v-btn>
      <FavorisSite v-model="openDrawer"/>
    </div>

<div class="galerie">
  <div class="titre-galerie d-flex">
    <p class="titre-galerie">Ma galerie</p>
  </div>

  <div class="btns-galerie d-flex mb-3">
    <v-btn @click="openGallery = true">Ouvrir la galerie</v-btn>
  </div>


  <!-- Drawer popup Galerie -->
  <GalerieSite v-model="openGallery" />
  </div>

    <div class="rdv">
      <div class="titre-rdv">
        <p>Mes rendez-vous</p>
      </div>
      <div class="btn-rdv">
        <router-link :to="'/calendrier'">
          <p>Voir mes rendez-vous</p>
        </router-link>
      </div>
    </div>


    <FooterSite/>
  </main>
</template>


<script>
import FooterSite from './FooterSite.vue';
import HeaderSiteColor from './HeaderSiteColor.vue';
import FavorisSite from './FavorisSite.vue';
import DocumentViewer from './DocumentViewer.vue';
import GalerieSite from './GalerieSite.vue'; 

export default {
  name: 'ComptePage',
  components: {
    HeaderSiteColor,
    FooterSite,
    FavorisSite,
    DocumentViewer,
    GalerieSite,
  },
  data() {
  return {
    user: null,
    // fichiers
    token: localStorage.getItem('token') || '',
    openDrawer: false,
    openGallery: false,
    filePreviews: [],
    files: [],
    selectedFile: null,
    showFileViewer: false,
    mesFichiers: [],

    // édition pseudo
    isEditingPseudo: false,
    pseudo: 'Pseudo',
    editedPseudo: '',

    // édition description
    isEditingDescription: false,
    description: 'Description ici',
    editedDescription: '',
    galleryFiles: [],
galleryPreviews: [],

  };
},
watch: {
  mesFichiers(newFiles) {
    this.galleryPreviews = newFiles.map(file => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file)
    }));
  }
},
mounted() {
  fetch("http://localhost:1337/api/users/photos", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    },
    body: JSON.stringify({
      galerie: ["http://localhost:8080/img/logo%20original@4x.edca1362.png"]
    })
  }).then(response => response.json())
    .then(data => {
      console.log('Données utilisateur récupérées :', data);
      this.user = data;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données utilisateur :', error);
    });
},


  methods: {
  // PSEUDO
  toggleEditPseudo() {
    if (this.isEditingPseudo) {
      this.savePseudo();
    } else {
      this.editedPseudo = this.pseudo;
      this.isEditingPseudo = true;
    }
  },
  savePseudo() {
    this.pseudo = this.editedPseudo;
    this.isEditingPseudo = false;
    console.log('Pseudo enregistré :', this.pseudo);
  },
  cancelPseudo() {
    this.editedPseudo = this.pseudo;
    this.isEditingPseudo = false;
    console.log('Modification pseudo annulée');
  },

  // DESCRIPTION
  toggleEditDescription() {
    if (this.isEditingDescription) {
      this.description = this.editedDescription;
      this.isEditingDescription = false;
      console.log('Description enregistrée :', this.description);
    } else {
      this.editedDescription = this.description;
      this.isEditingDescription = true;
    }
  },
  cancelDescription() {
    this.editedDescription = this.description;
    this.isEditingDescription = false;
    console.log('Modification description annulée');
  },

  // FICHIERS
  triggerFileInput() {
    this.$refs.fileInput.click();
  },
  handleFileUpload(event) {
    const uploadedFiles = Array.from(event.target.files);
    const newPreviews = uploadedFiles.map(file => ({
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file)
    }));
    this.files.push(...uploadedFiles);
    this.filePreviews.push(...newPreviews);
  },
  getFileIcon(file) {
    const type = file.type;
    if (type.includes('pdf')) return 'mdi-file-pdf-box';
    if (type.includes('image')) return 'mdi-file-image';
    if (type.includes('video')) return 'mdi-file-video';
    if (type.includes('audio')) return 'mdi-file-music';
    if (type.includes('spreadsheet') || file.name.match(/\.(xls|xlsx|csv)$/i)) return 'mdi-file-excel-box';
    if (type.includes('word') || file.name.match(/\.(doc|docx)$/i)) return 'mdi-file-word-box';
    return 'mdi-file-document-outline';
  },
  openFilePreview(file) {
    this.selectedFile = file;
    this.showFileViewer = true;
  },
  triggerGalleryFileInput() {
  this.$refs.galleryFileInput.click();
},
handleGalleryUpload(event) {
  const uploadedGalleryFiles = Array.from(event.target.files);
  this.ajouterFichiers(uploadedGalleryFiles);
},
ajouterFichiers(nouveauxFichiers) {
      const tousFichiers = [...this.mesFichiers, ...nouveauxFichiers];
      this.mesFichiers = tousFichiers.slice(0, 6); // Limite à 6 fichiers max
    },
    getPreviewUrl(file) {
  return URL.createObjectURL(file);
},
isImage(file) {
  return file.type.startsWith('image/');
},

}

};
</script>



<style lang="scss" scoped>

.img-avatar {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
}
.text-pseudo {
  font-weight: bold;
}

  .file-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 10px;
}

.file-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  text-align: center;
}

.file-icon {
  font-size: 40px;
  color: #555;
}

.file-name {
  font-size: 12px;
  margin-top: 4px;
  word-break: break-word;
}

.file-lien-doc{
  color: #666;
  margin: 20px 0px;
  font-style: italic;
}
.file-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .v-icon {
    width: 100%;
    text-align: center;
  }

  .v-card-text {
    font-size: 14px;
    word-break: break-word;
  }
}
.file-card-compact-narrow {
  height: 180px;
  max-width: 140px; /* largeur max réduite */
  margin: 0 auto;   /* centrer dans la colonne */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .v-img {
    border-bottom: 1px solid #eee;
  }

  .file-icon-container {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eee;
  }

  .v-card-text {
    padding: 8px;
    font-size: 12px;
    word-break: break-word;
    line-height: 1.2em;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

.text-pseudo[contenteditable="true"],
.description p[contenteditable="true"] {
  outline: none;
  background-color: #fafafa;
  cursor: text;
}

.galerie {
  margin-top: 40px;

  .titre-galerie {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }
}



</style>
