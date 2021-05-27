import Vue              from 'vue'
import VueAxios         from 'vue-axios'
import store            from './store'
import router           from './router'
import i18n             from './plugins/i18n'
import App              from './components/App.vue'
import axios            from 'axios'


import './plugins'
import './components'

Vue.use(VueAxios, axios);
//axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
var BASE_URL =  'http://localhost:8000';
axios.defaults.baseURL =  BASE_URL; //api 


Vue.config.productionTip = false
console.log('Its here app');

const app = new Vue({
    el: '#Aplicacion', 
    i18n,
    store,	
    router,  
    ...App
});