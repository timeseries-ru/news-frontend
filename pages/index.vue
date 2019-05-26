<template>
  <v-container>
    <v-layout row wrap>
      <template v-for="(widget, index) in widgets">
        <v-flex :key="index" v-bind:class="widget.width">
          <v-card class="mb-4 mx-2 pa-1 elevation-8 height-initial"
                 :style="rendered ? 'display: block' : 'display: none'">
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
    const loader = new DataLoader($axios)
    const layout = await loader.getLayout()
    store.commit('setControls', layout.controls)
    return {
      widgets: layout.widgets,
      rendered: false
    }
  },
  async mounted () {
    for (let index = 0; index < this.widgets.length; ++index) {
      const spec = this.widgets[index].spec
      const wrap = this.$refs.views[index].parentElement
      let view = await new vega.View({
        ...vega.parse(spec),
        height: undefined,
        autosize: {
          type: 'fit',
          contains: 'content',
          resize: true
        }
      }, {
        renderer: 'svg',
        container: this.$refs.views[index],
        wrapperElem: wrap,
        responsive: true,
        widthHeightRatio: spec.width / spec.height,
        hover: true
      }).resize()

      const updater = async () => {
        const margin = 40
        await view
          .width(wrap.offsetWidth - margin)
          .height((wrap.offsetWidth - margin) / spec.width * spec.height)
          .initialize(wrap)
          .runAsync('enter')
      }

      setTimeout(updater, 300)
      window.addEventListener('resize', updater)
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

<style>
.height-initial {
  min-height: 100px !important;
}
</style>
