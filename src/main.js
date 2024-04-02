import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// createApp(App).mount('#app')

Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');