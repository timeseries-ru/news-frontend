<template>
  <div style="height: calc(100vh - 100px)">
    <vue-scroll>
      <v-card class="ma-2 pa-2 elevation-8">
        <vue-markdown :source="about"></vue-markdown>
      </v-card>
    </vue-scroll>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

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
  data () {
    return {
      about: `
# Привет!
1. Это
2. Пример
3. *Markdown*
`
    }
  },
  components: {
    VueMarkdown
  }
}
</script>
