<template>
  <div id="app">
    <router-view/>
    <foot-bar v-if="$route.meta.isMenu"></foot-bar>
  </div>
</template>
<script>
  import footBar from '@/components/footBar'
  export default {
    name: 'App',
    components: {
      footBar
    },
  }
</script>
<style lang="stylus">
#app
  font-size 16px//默认字体大小
</style>
