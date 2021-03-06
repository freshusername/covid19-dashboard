import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Highcharts from 'highcharts';
import VueHighcharts from 'vue-highcharts';
import VueDebounce from 'vue-debounce';
// import socketio from 'socket.io-client';
// import VueSocketio from 'vue-socket.io';
import loadMap from 'highcharts/modules/map';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

loadMap(Highcharts);

// const socketInstance = socketio('http://localhost:3000');

// Vue.use(new VueSocketio({
//   connection: 'http://covid-19-countries.herokuapp.com',
// }));
Vue.use(VueDebounce);
Vue.use(VueAxios, axios);
Vue.use(VueHighcharts, { Highcharts });

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
