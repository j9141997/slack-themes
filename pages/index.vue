<template>
  <div class="container">
    <Header/>
    <main-content/>
  </div>
</template>

<script>
import Header      from '~/components/Header'
import MainContent from '~/components/MainContent'

export default {
  components: {
    Header,
    MainContent
  }
}
</script>

<style>

body {
  line-height: 1.46668;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  font-size: 15px;
}

</style>
