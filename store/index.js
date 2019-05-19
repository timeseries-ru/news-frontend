export const state = () => ({
  sidebar: false
})

export const mutations = {
  setSidebar (state, value) {
    state.sidebar = value
  },
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
