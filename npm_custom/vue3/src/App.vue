<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Button></Button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { getName } from 'npm_demo_js'
import { Button } from '@hspjs/components'
// import '@hspjs/components/es/style.css';
console.log(getName('1'))
export default {
  name: 'App',
  components: {
    // HelloWorld,
    Button
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
