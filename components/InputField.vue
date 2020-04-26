<template>
  <div class="sideMain">
    <h1>Select theme to preview</h1>
    <form action="" class="formField">
      <p>Copy and paste these values to your 
        <strong>Slack</strong>
        settings
        <span>
          <a href="https://get.slack.help/hc/en-us/articles/205166337-Customizing-your-Slack-theme" target="_blank" class="slackThemeLink">
          <strong>
            Sidebar Theme
          </strong>
          </a></span>
          section:
      </p>
      <input type="text" class="inputColors" v-model="changeTheme">
    </form>
    <p>
      {{ $data.innnerCol }}
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      innnerCol: "#350d36, #3F0E40, #ffffff",
      color: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      }
    }
  },
  computed: {
    changeTheme: {
      get() {
        console.log('1')
        return this.innnerCol
      },
      set: function(val) { 
        console.log('2')
        let colors = val.split(',')
        document.getElementById('nav').style.backgroundColor = colors[0]
        document.getElementById('sideBar').style.backgroundColor = colors[1]
        document.getElementById('sideBar').style.color = colors[2]
        this.innnerCol = val;
      }
    }
  }
}
</script>
<style scoped>
.sideMain {
  width: 800px;
  color: #484848;
  position: fixed;
  top: 10%;
  left: 30%;
  background-color: #fff;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.6);
  border-radius: 4px;
}
h1 {
  text-align: center;
  border-radius: 4px 4px 0 0;
  color: #fff;
  padding: 14px;
  background-color: rgb(180, 176, 176);
}
form {
  margin: 0 auto;
  padding: 10px;
}
a.slackThemeLink {
  text-decoration: none;
  color: #2a80b9;
}
a.slackThemeLink:hover {
  text-decoration: underline;
}
input.inputColors {
  width: 100%;
  padding: 6px;
  margin-top: 6px;
}
</style>