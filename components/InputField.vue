<template>
  <div class="sideMain">
    <h1>Create My Theme!</h1>
    <!-- <input type="text" v-model="testCol">
    <button v-on:click="hello()"></button> -->
    <form action="" class="formField">
      <label for="sideTheme">
        <input type="text" id="sideTheme">サイドバー
      </label><br>
      <label for="headerTheme">
        <input type="text" id="headerTheme">ヘッダー
      </label>
      <br>
      <input type="submit" value="作成">
    </form>
    <!-- <p>
      {{ $store.state }}
    </p>
    <p>
      {{ $data.testCol }}
    </p> -->
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      testCol: "#ffffff"
    }
  },
  methods: {
    hello: function() {
      this.$store.dispatch('test/test', this.testCol)
      console.log(this.testCol)
    }
  }
}
</script>
<style scoped>
.sideMain {
  width: calc(100vw - 260px);
  color: #484848;
  text-align: center;
}
</style>