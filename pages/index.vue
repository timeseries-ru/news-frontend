<template>
  <v-layout>
    <v-flex xs8 style="overflow: hidden; height: calc(100vh - 100px);">
      <vue-scroll>
        <v-tabs v-model="activeTab" @change="tabbed" v-bind:class="layout.length < 2 ? 'tabbar-invisible' : ''">
          <v-tab ripple v-for="(tab, index) in layout" :key="index" v-if="layout.length > 1">
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
      </vue-scroll>
    </v-flex>
    <v-flex xs4 style="overflow: hidden; height: calc(100vh - 100px);">
      <vue-scroll>
        <Controls :controls="$store.state.controls" :listener="tune"/>
      </vue-scroll>
    </v-flex>
  </v-layout>
</template>

<script>
import vegaEmbed from 'vega-embed'

import VueMarkdown from 'vue-markdown'
import DataLoader from '~/api/backend.js'

import Controls from '~/components/controls.vue'

import Vue from 'vue'
import vuescroll from 'vuescroll'

Vue.use(vuescroll, {
  ops: {
    bar: {
      background: 'rgba(0, 0, 0, 0.25)'
    }
  },
  name: 'vue-scroll' // customize component name, default -> vueScroll
})

export default {
  components: {
    VueMarkdown, Controls
  },
  async asyncData ({ $axios, store }) {
    const loader = new DataLoader($axios)
    const data = await loader.getLayout()
    store.commit('setControls', data.controls)
    return {
      layout: data.tabs, activeTab: 0, rendered: false, resizers: []
    }
  },
  methods: {
    async tune (filters) {
      const loader = new DataLoader(this.$axios)
      const data = await loader.getLayout(filters)

      // don't change controls
      // this.$store.commit('setControls', data.controls)

      this.layout = data.tabs
      this.activeTab = 0
      await this.tabbed()
    },
    async tabbed () {
      this.rendered = false
      for (let index in this.resizers) {
        window.removeEventListener('resize', this.resizers[index])
      }
      this.resizers = []

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

        setTimeout(updater, 100)
        window.addEventListener('resize', updater)
        this.resizers.push(updater)
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
.tabbar-invisible > .v-tabs__bar {
  display: none !important;
}
</style>
