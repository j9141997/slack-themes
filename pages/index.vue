<template>
  <div class="container">
    <Header/>
    <Side-bar/>
    <Input-field/>
  </div>
</template>

<script>
import Header      from '@/components/Header'
import SideBar     from '@/components/SideBar'
import InputField  from '@/components/InputField'

export default {
  components: {
    Header,
    SideBar,
    InputField
  }
}
</script>

<style>

body {
  line-height: 1.46668;
  overflow: hidden;
  height: 100%;
  width: 100%;
  font-size: 100%;
}

.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  font-size: 15px;
}

.transition {
  transition: all  0.3s ease;
}

</style>
