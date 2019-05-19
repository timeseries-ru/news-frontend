export const state = () => ({
  sidebar: false,
  controls: []
})

export const mutations = {
  setSidebar (state, value) {
    state.sidebar = value
  },
  setControls (state, value) {
    state.controls = value
  },
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  }
}
