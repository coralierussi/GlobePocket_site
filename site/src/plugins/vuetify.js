import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import fr from 'vuetify/src/locale/fr.ts'

Vue.use(Vuetify);

export default new Vuetify({
    lang:{
        locales: {fr},
        current: 'fr',
    }
});
