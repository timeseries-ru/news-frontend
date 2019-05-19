<template>
  <posts :posts="posts"/>
</template>

<script>
import Posts from '~/components/posts'
import DataLoader from '~/api/backend.js'

export default {
  components: {
    Posts
  },
  async asyncData ({ $axios }) {
    const posts = await new DataLoader($axios, true /* fake */).getPosts()
    return {
      posts
    }
  }
}
</script>
