<template>
  <el-container id="controller">
    <p class="current-class-name">{{ className }}</p>
    <el-container class="func-zone">
      <el-input v-model="searchText" class="search-input" type="text" placeholder="输入搜索名字或学号" :clearable="true" @change="searchItem">
        <template #prefix><el-icon><Search /></el-icon></template>
      </el-input>
      <el-button type="default" round @click="searchItem">搜索</el-button>
      <el-button type="primary" round @click="addStudent">添加新同学<el-icon><Plus /></el-icon></el-button>
    </el-container>
  </el-container>
  <Teleport to="body">
    <el-dialog v-model="addStudentInputFlag" title="输入学生信息" @close="addStudentInputFlag = false">
      <el-form :model="newStudentInfo">
        <el-form-item label="学生名字：" required>
          <el-input v-model="newStudentInfo.name" type="text" placeholder="输入学生名字"></el-input>
        </el-form-item>
        <el-form-item label="学生性别：" required>
          <el-radio-group v-model="newStudentInfo.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学生生日：" required>
          <el-date-picker v-model="newStudentInfo.birth" placeholder="选择学生生日" value-format="YYYY-MM-DD"></el-date-picker>
        </el-form-item>
        <el-form-item label="语文成绩：" required>
          <el-slider v-model="newStudentInfo.chinese" :min="0" :max="100" :step="0.5" show-input></el-slider>
        </el-form-item>
        <el-form-item label="数学成绩：" required>
          <el-slider v-model="newStudentInfo.math" :min="0" :max="100" :step="0.5" show-input></el-slider>
        </el-form-item>
        <el-form-item label="英语成绩：" required>
          <el-slider v-model="newStudentInfo.english" :min="0" :max="100" :step="0.5" show-input></el-slider>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="danger" plain @click="addStudentInputFlag = false">取消</el-button>
        <el-button type="success" plain @click="addNewStudent">添加</el-button>
      </template>
    </el-dialog>
  </Teleport>
</template>

<script>
export default {
  name: 'funcController',
  props: {
    className: {
      type: String,
      required: true
    },
    studentData: {
      type: Map,
      required: true,
      default: new Map([
        ['1', new Map([
          ['name', '小李'],
          ['sex', '男'],
          ['birth', '2003-1-1'],
          ['chinese', 80],
          ['math', 80],
          ['english', 80]
        ])],
        ['2', new Map([
          ['name', '小红'],
          ['sex', '女'],
          ['birth', '2003-2-1'],
          ['chinese', 70],
          ['math', 70],
          ['english', 70]
        ])],
        ['3', new Map([
          ['name', '小华'],
          ['sex', '男'],
          ['birth', '2003-3-1'],
          ['chinese', 60],
          ['math', 60],
          ['english', 60]
        ])]
      ])
    }
  },
  data () {
    return {
      searchText: '',
      showedStudentData: new Map(),
      addStudentInputFlag: false,
      newStudentInfo: {
        name: '',
        sex: '',
        birth: '',
        chinese: 0,
        math: 0,
        english: 0
      }
    }
  },
  methods: {
    searchItem () {
      this.showedStudentData.clear()
      this.studentData.forEach((value, key) => {
        if (key.indexOf(this.searchText) !== -1) {
          this.showedStudentData.set(key, value)
        } else if (value.get('name').indexOf(this.searchText) !== -1) {
          this.showedStudentData.set(key, value)
        }
      })
      this.$emit('searchTextChange', this.showedStudentData)
    },
    addStudent () {
      this.addStudentInputFlag = true
    },
    addNewStudent () {
      this.addStudentInputFlag = false
      const newStudentInfoSubmited = new Map().set(String(this.studentData.size + 1), new Map().set('name', this.newStudentInfo.name).set('sex', this.newStudentInfo.sex).set('birth', this.newStudentInfo.birth).set('chinese', this.newStudentInfo.chinese).set('math', this.newStudentInfo.math).set('english', this.newStudentInfo.english))
      this.$emit('addNewStudent', newStudentInfoSubmited)
    }
  }
}
</script>

<style>
#controller{
  height: 4rem;
  background-color: burlywood;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0;
}
.current-class-name{
  text-align: center;
  width: 50%;
  font-size: 2rem;
  font-weight: 700;
  color:rgb(255, 255, 255);
  text-shadow: 0 0 1px black;
}
.func-zone{
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
.func-zone *{
  margin:0 1%;
}
.search-input{
  width:50%;
}
</style>
