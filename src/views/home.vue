<template>
  <div class="wrap">
    <header-top title="Home"/>
    <div class="content">
      Vue移动端模板
      <!--<div class="">
        <van-button type="primary">主要按钮</van-button>
      </div>-->
    </div>
  </div>
</template>
<script>
  import headerTop from '../components/HeaderTop'
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
      headerTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"

</style>
