<template>
  <div class="mainContent">
    <sidebar/>
    <input-field/>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import InputField from '~/components/InputField'


export default {
  components: {
    Sidebar,
    InputField
  }
}
</script>

<style scoped>
.mainContent {
  display: flex;
}
</style>