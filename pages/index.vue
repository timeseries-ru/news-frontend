<template>
  <v-container>
    <v-layout row wrap>
      <template v-for="(widget, index) in widgets">
        <v-flex :key="index" v-bind:class="widget.width">
          <v-card class="mb-4 mx-2 pa-1" :style="rendered ? 'display: block' : 'display: none'">
            <div ref="views" style="overflow: hidden;"></div>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import DataLoader from '~/api/backend.js'
const vega = require('vega')

export default {
  async asyncData ({ $axios, store }) {
    const loader = new DataLoader($axios, true) // true -> use fake data
    const layout = await loader.getLayout()
    store.commit('setControls', layout.controls)
    return {
      widgets: layout.widgets,
      rendered: false
    }
  },
  async mounted () {
    for (let index = 0; index < this.widgets.length; ++index) {
      await new vega.View(vega.parse(this.widgets[index].spec), {
        renderer: 'svg',
        container: this.$refs.views[index],
        hover: true
      }).runAsync()
    }
    this.rendered = true
  },
  computed: {
    sidebarOpened () {
      return this.$store.state.sidebar
    }
  },
  watch: {
    sidebarOpened (opened) {
      if (opened) {
        // remove two scrolls when drawer opened
        document.getElementsByTagName('html')[0].classList.add('overflow-y-hidden')
      }
    }
  }
}
</script>
