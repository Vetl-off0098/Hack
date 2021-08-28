import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import * as style from './scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  style,
  render: (h) => h(App),
}).$mount('#app');
