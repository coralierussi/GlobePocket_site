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
      <v-btn icon class="btn-close" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>

      <div class="head">
  <h4 class="title-slice">{{ file?.name }}</h4>
</div>


      <div class="contenu">
        <div v-if="file">
          <template v-if="file.type.includes('image')">
            <img :src="file.url" alt="aperçu image" style="max-width: 100%; max-height: 80vh;" />
          </template>

          <template v-else-if="file.type === 'application/pdf'">
            <iframe
              :src="file.url"
              type="application/pdf"
              width="100%"
              height="600px"
              style="border: none;"
            ></iframe>
          </template>

          <template v-else>
            <p>Fichier non prévisualisable ({{ file.name }})</p>
            <a :href="file.url" target="_blank">Ouvrir dans un nouvel onglet</a>
          </template>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'DocumentViewer',
  props: {
    value: Boolean,
    file: Object
  },
  computed: {
    open: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    close() {
      this.open = false;
    }
  }
};
</script>

<style scoped>
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
}
</style>
