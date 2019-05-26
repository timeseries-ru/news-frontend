<template>
  <v-tabs v-model="activeTab" @change="tabbed">
    <v-tab ripple v-for="(tab, index) in layout" :key="index">
      {{tab.tabName}}
    </v-tab>
    <v-tab-item v-for="(tab, index) in layout" :key="index" class="pt-2">
      <v-layout row wrap>
        <template v-for="(widget, index) in tab.widgets">
          <v-flex :key="index" :class="widget.width">
            <v-card class="mb-4 mx-2 pa-1 elevation-8 height-initial"
                   :style="rendered ? 'display: block' : 'display: none'">
              <div ref="views" style="overflow: hidden;"
                  v-if="widget.spec"
              ></div>
              <div v-else class="pa-1">
                <vue-markdown :source="widget.text"></vue-markdown>
              </div>
            </v-card>
          </v-flex>
        </template>
      </v-layout>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import vegaEmbed from 'vega-embed'

import VueMarkdown from 'vue-markdown'
import DataLoader from '~/api/backend.js'

export default {
  components: {
    VueMarkdown
  },
  async asyncData ({ $axios, store }) {
    const loader = new DataLoader($axios)
    const layout = await loader.getLayout()
    return {
      layout, activeTab: 0, rendered: false
    }
  },
  methods: {
    async tabbed () {
      this.$store.commit('setControls', this.layout[this.activeTab].controls)

      this.rendered = false
      const widgets = this.layout[this.activeTab].widgets
      let refIndex = -1
      for (let index = 0; index < widgets.length; ++index) {
        const spec = widgets[index].spec
        if (!spec) continue

        // find view ref index
        let iterator = 0
        while (iterator < this.activeTab) {
          refIndex += this.layout[iterator].widgets.filter(widget => widget.spec).length
          ++iterator
        }
        ++refIndex

        const wrap = this.$refs.views[refIndex].parentElement

        let vegaEmbedObject = await vegaEmbed(wrap, spec, {
          renderer: 'svg',
          hover: true,
          tooltip: false
        })

        let view = vegaEmbedObject.view

        const updater = async () => {
          const margin = 60
          if (wrap) {
            await view
              .width(wrap.offsetWidth - margin)
              .height((wrap.offsetWidth - margin) / spec.width * spec.height)
              .initialize(wrap)
              .runAsync('enter')
          }
        }

        setTimeout(updater, 300)
        window.addEventListener('resize', updater)
      }

      this.rendered = true
    }
  },
  async mounted () {
    await this.tabbed()
  }
}
</script>

<style>
.height-initial {
  min-height: 150px !important;
}
</style>
