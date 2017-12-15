<template>
  <div id="app">
    <md-page-load></md-page-load>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  name: 'app'
}

axios.interceptors.request.use((config) => {
  console.log('on request')
  console.log(Vue.OroneMaterial)
  Vue.OroneMaterial.PageloadSwitcher.start()
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  console.log('on response')
  console.log(Vue.OroneMaterial)
  Vue.OroneMaterial.PageloadSwitcher.stop()
  return response
}, (error) => {
  console.log('on response error')
  console.log(Vue.OroneMaterial)
  Vue.OroneMaterial.PageloadSwitcher.stop()
  return Promise.reject(error)
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
