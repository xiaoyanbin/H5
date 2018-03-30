<template>
<div>
  <HeaderBar />
  <div class="container">

  </div>
</div>
</template>

<script>
import HeaderBar from '../../components/HeaderBar'
export default {
  data () {
    return {

    }
  },
  components: {
    HeaderBar
  }
}
</script>

<style lang="less" scoped>
  .container {
    width: 700px;
    margin: 0 auto;
    padding-top:20px;
    .pay {
      margin: 0 auto;
      width: 300px;
      margin-bottom: 20px;
      .suppest {
        width: 100%;
        text-align: center;
      }
      img {
        width: 100%;
      }
    }
    p {
      line-height: 2;
    }
  }
</style>

