<template>
  <button class="btn" @click="click">测试按钮组件库11</button>
</template>

<script lang="ts" setup>
// import './style/index.less'
import { testfun } from '@hspjs/utils'
import { ref } from 'vue'


let num = ref(0)

function click() {
  num = num+=1
  console.log(testfun(num, 0))
}
</script>
<style scoped>
.btn {
  background: red;
  border: none;
}
</style>
