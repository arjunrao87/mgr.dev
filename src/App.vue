<template>
  <div id="app">
      <Navbar/>
      <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'app',
  components:{
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Karla';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>