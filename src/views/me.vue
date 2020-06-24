<template>
  <div class="wrap">
    <header-top title="Me"/>
    <div class="content">
      me
    </div>
  </div>
</template>
<script>
  import HeaderTop from '../components/HeaderTop'
  import {getCategoryList} from "../api";

  export default {
    data() {
      return {
      }
    },
    mounted(){
      getCategoryList().then(data => {
        console.log("数据",data)
      })
    },
    methods:{

    },
    components:{
      HeaderTop
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"


</style>
