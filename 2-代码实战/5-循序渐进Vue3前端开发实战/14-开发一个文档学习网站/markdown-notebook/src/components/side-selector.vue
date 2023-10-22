<template>
  <el-container id="side-selector">
    <el-aside id="set-selector" class="side-container">
      <el-container class="react-height-width">
        <el-header class="selector-title"></el-header>
        <el-main class="side-container">
          <el-menu v-if="selectionList" class="menu" mode="vertical">
            <el-menu-item class="menu-item" v-for="(item, index) of Object.entries(selectionList)" :key="item[0]" :index="index" @click="setChange(item[0])">
              <el-icon><Files /></el-icon>{{ item[0] }}</el-menu-item>
          </el-menu>
        </el-main>
      </el-container>
    </el-aside>
    <el-aside id="note-selector" class="side-container" v-if="selectedSetName">
      <el-container class="react-height-width">
        <el-header class="selector-title"></el-header>
        <el-main class="side-container">
          <el-menu v-if="selectedSetName" class="menu" mode="vertical">
            <el-menu-item class="menu-item" v-for="(item, index) of Object.entries(selectionList[selectedSetName])" :key="item[0]" :index="index" @click="noteChange(item[0]), getNoteData()">
              <el-icon><Memo /></el-icon>{{ item[0] }}</el-menu-item>
          </el-menu>
        </el-main>
      </el-container>
    </el-aside>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'sideSelector',
  computed: mapState({
    selectionList: 'selectionList',
    selectedSetName: 'selectedSetName',
    selectedNoteName: 'selectedNoteName'
  }),
  methods: {
    setChange (newSetName) {
      this.$store.commit({
        type: 'setSelectedSetName',
        newSetName: newSetName
      })
    },
    noteChange (newNoteName) {
      this.$store.commit({
        type: 'setSelectedNoteName',
        newNoteName: newNoteName
      })
    },
    getNoteData () {
      this.$store.dispatch('getSetNoteData', {
        selectedSetName: this.selectedSetName,
        selectedNoteName: this.selectedNoteName
      })
    }
  }
}
</script>

<style>
#side-selector{
  width: 100%;
  height: 100%;
}
.side-container{
  padding:0;
}
.menu{
  margin: 0;
  padding: 0 5%;
  border: none;
}
.menu-item{
  margin: 1vh 0;
  border-radius: 1rem;
  font-size: 1.2rem;
}
.react-height-width{
  height: 100%;
}
.selector-title{
  height: 5vh;
  background-color: #ffffff;
}
#set-selector{
  width: 40%;
  height: 100%;
  border-right: 1px solid #337dcc5d;
}
#note-selector{
  width: 60%;
  height: 100%;
  border-right: 1px solid #337dcc5d;
}
</style>
