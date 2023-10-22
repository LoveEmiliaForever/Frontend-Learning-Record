<template>
  <el-button v-if="!drawerFlag" id="side-button" type="primary" size="default" circle @click="drawerFlag = true">
    <el-icon><DArrowRight /></el-icon>
  </el-button>
  <el-drawer v-model="drawerFlag" direction="ltr" :modal="false" size="20%" @close="drawerFlag = false">
    <el-collapse v-model="activeItem" accordion>
      <el-collapse-item v-for="(item) of listData" :name="item[0]" :title="item[0]" :key="item[0]">
        <el-radio-group v-model="selectedClass" class="selection-group" @change="selectedClassChange">
          <el-radio v-for="(item2) of item[1]" class="selection" :key="item2" :label="item2" border>{{ selectionFormat(item2) }}</el-radio>
        </el-radio-group>
      </el-collapse-item>
    </el-collapse>
  </el-drawer>
</template>

<script>
export default {
  name: 'sideDrawer',
  props: {
    listData: {
      type: Array,
      required: true,
      default: new Map()
    }
  },
  data () {
    return {
      selectedClass: '1-1',
      drawerFlag: false
    }
  },
  methods: {
    selectionFormat (str) {
      const strArray = str.split('-')
      return strArray[1] + '班'
    },
    selectedClassChange () {
      this.$emit('classChange', this.selectedClass)
    }
  }
}
</script>

<style>
#side-button{
  position: absolute;
  top:45%;
  left:-0.5%;
  z-index: 999;
}
.selection-group{
  display: flex;
  flex-direction: column;
}
.selection{
  margin: 1% 0;
  width: 90%;
}
</style>
