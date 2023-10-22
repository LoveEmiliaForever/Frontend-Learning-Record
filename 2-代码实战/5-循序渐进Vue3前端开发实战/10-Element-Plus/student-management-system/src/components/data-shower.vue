<template>
  <el-tabs type="border-card" id="data-shower">
    <el-tab-pane label="学生信息">
      <el-table :data="transformData" class="show-table">
        <el-table-column prop="studentNum" label="学号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="birth" label="生日"></el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="考试成绩">
      <el-table :data="transformData" class="show-table">
        <el-table-column prop="studentNum" label="学号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="chinese" label="语文成绩"></el-table-column>
        <el-table-column prop="math" label="数学成绩"></el-table-column>
        <el-table-column prop="english" label="英语成绩"></el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'dataShower',
  props: {
    showedData: Map
  },
  computed: {
    transformData: {
      get () {
        const beforeData = this.showedData
        const resultData = []
        let tempObject = {}
        for (const pair of beforeData.entries()) {
          tempObject = {}
          tempObject.studentNum = pair[0]
          for (const pair2 of pair[1]) {
            tempObject[pair2[0]] = pair2[1]
          }
          resultData.push(tempObject)
        }
        return resultData
      }
    }
  }
}
</script>

<style>
#data-shower{
  flex-grow: 1;
}
</style>
