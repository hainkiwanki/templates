import { createApp } from 'vue';
import App from './App.vue';
import { vuetify } from './plugins/vuetify.mjs';

createApp(App).use(vuetify).mount('#app');
