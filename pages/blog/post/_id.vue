<template>
  <v-card class="ma-2 pa-2 elevation-8">
    <vue-markdown :source="content"></vue-markdown>
  </v-card>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import DataLoader from '~/api/backend.js'

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
