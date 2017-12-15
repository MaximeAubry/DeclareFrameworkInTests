<template>
  <md-layout md-row class="md-page-load" v-show="pageloadSwitcher.loading">
    <md-layout md-align="center" md-vertical-align="center">
      <md-spinner :md-size="150" md-indeterminate></md-spinner>
    </md-layout>
  </md-layout>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'md-page-load',
  data: () => ({
    pageloadSwitcher: Vue.OroneMaterial.PageloadSwitcher
  })
}
</script>

<style>
.md-page-load {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.md-page-load .md-spinner {
  width: 80px !important;
  height: 80px !important;
  background-image: url(../../../../assets/images/loader.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center top;
}

.md-page-load .md-spinner svg {
  display: none;
}
</style>
