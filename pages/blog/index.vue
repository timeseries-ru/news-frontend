<template>
  <div style="height: calc(100vh - 100px)" class="mr-1 mt-1">
    <vue-scroll>
      <posts :posts="posts"/>
    </vue-scroll>
  </div>
</template>

<script>
import Posts from '~/components/posts'
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
  components: {
    Posts
  },
  async asyncData ({ $axios }) {
    const posts = await new DataLoader($axios).getPosts()
    return {
      posts
    }
  }
}
</script>
