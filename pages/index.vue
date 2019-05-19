<template>
  <v-container>
    <v-layout row wrap>
      <template v-for="(widget, index) in layout">
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
  async asyncData ({ $axios }) {
    const loader = new DataLoader($axios, true) // true -> use fake data
    return {
      layout: await loader.getLayout(),
      rendered: false
    }
  },
  async mounted () {
    for (let index = 0; index < this.layout.length; ++index) {
      await new vega.View(vega.parse(this.layout[index].spec), {
        renderer: 'svg',
        container: this.$refs.views[index],
        hover: true
      }).runAsync()
    }
    this.rendered = true
  }
}
</script>
