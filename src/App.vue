<template>
  <div id="app">
      <router-view></router-view>
      <!-- <FooterGuide v-show="$route.path!=='/login'"/> -->
      <FooterGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
   components: {
       FooterGuide
   }
}
</script>

<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    // overflow: hidden;
  }

</style>