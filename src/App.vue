<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <v-app>
    <core-app-bar />
    <core-view />
    <core-footer />
  </v-app>
</template>

<script>
import CoreAppBar from '@/components/core/AppBar'
import CoreView from '@/components/core/View'
import CoreFooter from '@/components/core/Footer'

export default {
  name: 'App',
  components: {
    CoreAppBar,
    CoreView,
    CoreFooter
  },
};
</script>