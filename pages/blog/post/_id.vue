<template>
  <div style="height: calc(100vh - 100px)" class="mr-1 mt-1">
    <vue-scroll>
      <v-card class="ma-2 pa-2 elevation-8">
        <vue-markdown :source="content"></vue-markdown>
      </v-card>
    </vue-scroll>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import DataLoader from '~/api/backend.js'

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
  async asyncData ({ $axios, params }) {
    const loader = new DataLoader($axios)
    const post = await loader.getPost(parseInt(params.id))
    return {
      content: post.content
    }
  },
  components: {
    VueMarkdown
  }
}
</script>
