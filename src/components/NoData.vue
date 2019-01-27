<template>
    <div class="noDataWrap">
      <img src="./images/NoData.png" class="noDataImg">
      <div class="noDataInfo">暂无数据</div>
    </div>
</template>

<script>
    export default {
        name: 'NoData'
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .noDataWrap
    width 100%
    text-align: center;
    margin-top: 30px;
    background #F4F4F4
    .noDataImg
      width 80px
      height 80px
    .noDataInfo
      color #999
</style>
