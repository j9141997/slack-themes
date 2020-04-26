<template>
  <div id="nav" class="header transition">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #nav {
    background: #350d36;
    color: #FFFFFF;
    box-shadow: 0 1px 0 0 rgba(255,255,255,0.1);
    height: 38px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #nav .fa-clock {
    font-size: 18px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>