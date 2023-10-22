<template>
  <el-container id="main-container">
    <sideDrawer @classChange="classChange" :listData="classList"></sideDrawer>
    <el-header id="main-header">
      <svg id="logo" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 13L24 8L44 13L24 18L4 13Z" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13 16V25.9706C13 25.9706 18 29 24 29C30 29 35 25.9706 35 25.9706V16" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 14V36" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="4" y="34" width="6" height="6" fill="none" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p id="app-name"><span>Vue</span>学生管理系统</p>
    </el-header>
    <el-main id="main-body">
      <FuncController :className="'数据科学与大数据技术'+currentClass" :studentData="currentClassData" @addNewStudent="addNewStudent" @searchTextChange="searchTextChange"></FuncController>
      <dataShower :showedData="showedData"></dataShower>
    </el-main>
    <el-footer id="main-footer">
      <p id="footer-text">本界面使用Vue3开发</p>
    </el-footer>
  </el-container>
</template>

<script>
import sideDrawer from './components/side-drawer'
import FuncController from './components/func-controller.vue'
import dataShower from './components/data-shower.vue'
export default {
  name: 'App',
  data () {
    return {
      currentClass: '1-1',
      originData: new Map(),
      showedData: new Map()
    }
  },
  computed: {
    classList: {
      get () {
        let result = []
        for (const pair of this.originData.entries()) {
          result.push([pair[0], Array.from(pair[1].keys())])
        }
        result = new Map(result)
        return result
      }
    },
    currentClassData: {
      get () {
        const classPosition = this.currentClass.split('-')
        const grade = classPosition[0]
        switch (grade) {
          case '1':
            return this.originData.get('大一').get(this.currentClass)
          case '2':
            return this.originData.get('大二').get(this.currentClass)
          case '3':
            return this.originData.get('大三').get(this.currentClass)
          case '4':
            return this.originData.get('大四').get(this.currentClass)
          default:
            return null
        }
      }
    }
  },
  components: {
    sideDrawer,
    FuncController,
    dataShower
  },
  methods: {
    classChange (selectedClass) {
      this.currentClass = selectedClass
      const classPosition = this.currentClass.split('-')
      const grade = classPosition[0]
      switch (grade) {
        case '1':
          this.showedData = this.originData.get('大一').get(this.currentClass)
          break
        case '2':
          this.showedData = this.originData.get('大二').get(this.currentClass)
          break
        case '3':
          this.showedData = this.originData.get('大三').get(this.currentClass)
          break
        case '4':
          this.showedData = this.originData.get('大四').get(this.currentClass)
          break
      }
    },
    addNewStudent (newStudentInfo) {
      newStudentInfo = [...newStudentInfo.entries()][0]
      const classPosition = this.currentClass.split('-')
      const grade = classPosition[0]
      switch (grade) {
        case '1':
          this.originData.get('大一').get(this.currentClass).set(newStudentInfo[0], newStudentInfo[1])
          break
        case '2':
          this.originData.get('大二').get(this.currentClass).set(newStudentInfo[0], newStudentInfo[1])
          break
        case '3':
          this.originData.get('大三').get(this.currentClass).set(newStudentInfo[0], newStudentInfo[1])
          break
        case '4':
          this.originData.get('大四').get(this.currentClass).set(newStudentInfo[0], newStudentInfo[1])
          break
      }
      this.$notify({
        title: '学生信息已成功录入系统',
        message: '新的学生信息已加入数据库中',
        type: 'success',
        position: 'bottom-right',
        duration: 2000
      })
    },
    searchTextChange (newShowedData) {
      this.showedData = newShowedData
      console.log(newShowedData)
    },
    getData () {
      this.originData = new Map()
        .set('大一', new Map()
          .set('1-1', new Map([
            ['1', new Map([
              ['name', '符放'],
              ['sex', '男'],
              ['birth', '2003-1-1'],
              ['chinese', 80],
              ['math', 80],
              ['english', 80]
            ])],
            ['2', new Map([
              ['name', '湖人'],
              ['sex', '女'],
              ['birth', '2003-2-1'],
              ['chinese', 70],
              ['math', 70],
              ['english', 70]
            ])],
            ['3', new Map([
              ['name', '和法'],
              ['sex', '男'],
              ['birth', '2003-3-1'],
              ['chinese', 60],
              ['math', 60],
              ['english', 60]
            ])]
          ])).set('1-2', new Map([
            ['1', new Map([
              ['name', '分够'],
              ['sex', '男'],
              ['birth', '2003-1-1'],
              ['chinese', 80],
              ['math', 80],
              ['english', 80]
            ])],
            ['2', new Map([
              ['name', '尔特'],
              ['sex', '女'],
              ['birth', '2003-2-1'],
              ['chinese', 70],
              ['math', 70],
              ['english', 70]
            ])],
            ['3', new Map([
              ['name', '窗格'],
              ['sex', '男'],
              ['birth', '2003-3-1'],
              ['chinese', 60],
              ['math', 60],
              ['english', 60]
            ])]
          ]))
        ).set('大二', new Map()
          .set('2-1', new Map([
            ['1', new Map([
              ['name', 'uiy'],
              ['sex', '男'],
              ['birth', '2003-1-1'],
              ['chinese', 80],
              ['math', 80],
              ['english', 80]
            ])],
            ['2', new Map([
              ['name', '抽风'],
              ['sex', '女'],
              ['birth', '2003-2-1'],
              ['chinese', 70],
              ['math', 70],
              ['english', 70]
            ])],
            ['3', new Map([
              ['name', '欧特'],
              ['sex', '男'],
              ['birth', '2003-3-1'],
              ['chinese', 60],
              ['math', 60],
              ['english', 60]
            ])]
          ])).set('2-2', new Map([
            ['1', new Map([
              ['name', '藕汤'],
              ['sex', '男'],
              ['birth', '2003-1-1'],
              ['chinese', 80],
              ['math', 80],
              ['english', 80]
            ])],
            ['2', new Map([
              ['name', '从给'],
              ['sex', '女'],
              ['birth', '2003-2-1'],
              ['chinese', 70],
              ['math', 70],
              ['english', 70]
            ])],
            ['3', new Map([
              ['name', '派人'],
              ['sex', '男'],
              ['birth', '2003-3-1'],
              ['chinese', 60],
              ['math', 60],
              ['english', 60]
            ])]
          ]))
        ).set('大三', new Map()
          .set('3-1', new Map([
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
          ])).set('3-2', new Map([
            ['1', new Map([
              ['name', '小K'],
              ['sex', '男'],
              ['birth', '2003-1-1'],
              ['chinese', 80],
              ['math', 80],
              ['english', 80]
            ])],
            ['2', new Map([
              ['name', '小A'],
              ['sex', '女'],
              ['birth', '2003-2-1'],
              ['chinese', 70],
              ['math', 70],
              ['english', 70]
            ])],
            ['3', new Map([
              ['name', '小Y'],
              ['sex', '男'],
              ['birth', '2003-3-1'],
              ['chinese', 60],
              ['math', 60],
              ['english', 60]
            ])]
          ]))
        ).set('大四', new Map()
          .set('4-1', new Map([
            ['1', new Map([
              ['name', 'UO'],
              ['sex', '男'],
              ['birth', '2003-1-1'],
              ['chinese', 80],
              ['math', 80],
              ['english', 80]
            ])],
            ['2', new Map([
              ['name', 'RY'],
              ['sex', '女'],
              ['birth', '2003-2-1'],
              ['chinese', 70],
              ['math', 70],
              ['english', 70]
            ])],
            ['3', new Map([
              ['name', 'CV'],
              ['sex', '男'],
              ['birth', '2003-3-1'],
              ['chinese', 60],
              ['math', 60],
              ['english', 60]
            ])]
          ])).set('4-2', new Map([
            ['1', new Map([
              ['name', 'IY'],
              ['sex', '男'],
              ['birth', '2003-1-1'],
              ['chinese', 80],
              ['math', 80],
              ['english', 80]
            ])],
            ['2', new Map([
              ['name', 'OP'],
              ['sex', '女'],
              ['birth', '2003-2-1'],
              ['chinese', 70],
              ['math', 70],
              ['english', 70]
            ])],
            ['3', new Map([
              ['name', 'ER'],
              ['sex', '男'],
              ['birth', '2003-3-1'],
              ['chinese', 60],
              ['math', 60],
              ['english', 60]
            ])]
          ]))
        )
    },
    initShowedData () {
      this.showedData = this.originData.get('大一').get('1-1')
    }
  },
  created () {
    this.getData()
    this.initShowedData()
  }
}

const debounce = (fn, delay) => {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

const _ResizeObserver = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor (callback) {
    callback = debounce(callback, 16)
    super(callback)
  }
}

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #main-container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #main-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(51, 181, 233, 0.774);
    padding: 3rem 31%;
  }
  #logo{
    width: 5rem;
    height: 5rem;
  }
  #app-name{
    font-size: 3rem;
    font-weight: 700;
    color: whitesmoke;
  }
  #main-body{
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  #main-footer{
    background-color: rgba(0, 0, 0, 0.459);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
  }
  #footer-text{
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
</style>
