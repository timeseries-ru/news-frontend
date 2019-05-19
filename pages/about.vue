<template>
  <v-card class="ma-2 pa-2 elevation-8">
    <vue-markdown :source="about"></vue-markdown>
  </v-card>
</template>

<script>
import VueMarkdown from 'vue-markdown'

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
