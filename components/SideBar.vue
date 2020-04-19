<template>
  <div class="sideBar" id="sideBar">
    <div class="sideBar_header">
      <div class="sideBar_header__profile">
        <div class="sideBar_header__profile__teamName">
          PLAY
          <span>
            <fa :icon="['fas', 'angle-down']" area-hidden="true" />
          </span>
        </div>
        <div class="sideBar_header__profile__userName">
          <span>
            <fa :icon="['fas', 'circle']" area-hidden="true" />
          </span>
          吉田純基
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sideBar {
    height: calc(100vh - 38px);
    width: 260px;
    background: #3F0E40;
    border-top: solid 1px rgb(104,74,104);
  }
  .sideBar_header {
    height: 64px;
    border-bottom: solid 1px rgb(104,74,104);
    padding: 0 54px 0 16px;
    display: flex;
    align-items: center;
  }
  .sideBar_header__profile__teamName {
    font-weight: 900;
  }
  .sideBar_header__profile__userName {
    font-size: 13px;
  }
  .sideBar_header__profile__userName .fa-circle {
    color: #2BAC76;
  }
</style>