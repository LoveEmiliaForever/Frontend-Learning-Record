<template>
  <el-container id="main">
    <el-aside id="side-container">
      <sideSelector></sideSelector>
    </el-aside>
    <el-main id="shower-container">
      <dataShower></dataShower>
    </el-main>
  </el-container>
</template>

<script>
import sideSelector from './components/side-selector.vue'
import dataShower from './components/data-shower.vue'
export default {
  name: 'App',
  components: {
    sideSelector,
    dataShower
  },
  mounted () {
    this.$store.dispatch('getSetSelectionList')
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#main{
  height: 100vh;
}
#side-container{
  width: 35%;
}
#shower-container{
  margin: 0;
  padding: 0;
}
</style>
