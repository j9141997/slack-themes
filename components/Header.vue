<template>
  <div id="nav">
    <fa :icon="['fas', 'clock']" area-hidden="true" />
    <button class="search-field"></button>
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #nav .fa-clock {
    font-size: 18px;
  }

  #nav .search-field {
    height: 24px;
    width: 500px;
    border-radius: 6px;
    background: rgb(67,30,68);
    box-shadow: inset 0 0 0 1px rgb(104,74,104);
    margin: 0 20px;
    border: 0;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>