<template>
  <div class="word-cup">
    <HeaderTop title="Home"/>
    <div class="content">
      Vue移动端模板
    </div>
  </div>
</template>
<script>
  import HeaderTop from '../components/HeaderTop'
  export default {
    data() {
      return {
      }
    },
    mounted(){
    },
    methods:{

    },
    components:{
      HeaderTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/variable.styl"
  @import "../common/stylus/mixin.styl"
  .content
    init-height()

</style>
