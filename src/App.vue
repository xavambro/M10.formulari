<template>
  <div id="app">
    <Formulari></Formulari>
  </div>
</template>

<script>
import Formulari from './components/Formulari'

export default {
  name: 'App',
  components: {
    Formulari
  }
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
