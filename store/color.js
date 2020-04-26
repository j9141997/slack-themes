export const state = () => ({
  theme: ''
})


export const actions = {
  changeTheme ({commit}, value) {
    commit('testHello', value)
  }
}


export const mutations = {
  changeTheme(state, value) {
    console.log(value)
    state.theme = value
    document.getElementById('sideBar').style.backgroundColor = state.testCol
  }
}