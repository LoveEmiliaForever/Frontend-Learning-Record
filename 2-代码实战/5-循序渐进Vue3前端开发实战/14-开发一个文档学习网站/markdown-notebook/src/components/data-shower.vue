<template>
  <el-container id="data-shower">
    <el-header id="note-title" v-if="selectedNoteName">{{ noteData.title }}</el-header>
    <el-main id="note-body" v-if="selectedNoteName" v-html="marked()"></el-main>
  </el-container>
</template>

<script>
import { mapState } from 'vuex'
import { marked } from 'marked'
export default {
  name: 'dataShower',
  computed: mapState({
    noteData: 'noteData',
    selectedNoteName: 'selectedNoteName'
  }),
  methods: {
    marked () {
      return marked(String(this.noteData.body))
    }
  }
}
</script>

<style>
#data-shower{
  height: 100%;
}
#note-title{
  height: 5%;
  background-color: rgba(128, 128, 128, 0.062);
  border-radius: 1rem;
  margin: 2%;
  padding: 1% 0 1% 3%;
}
#note-body{
  margin: 2%;
  padding: 1% 5%;
  border-radius: 1rem;
  background-color: rgba(128, 128, 128, 0.034);
}
</style>
