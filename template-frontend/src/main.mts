import './styles/vuetify.scss';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/600.css';
import '@mdi/font/css/materialdesignicons.css';
import App from './App.vue';
import { createApp } from 'vue';
import { vuetify } from './plugins/vuetify.mjs';
import { router } from './plugins/router.mjs';

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
