<template>
  <v-app>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title" style="cursor: pointer" @click="home"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        style="display: none"
        placeholder="Поиск" append-icon="search" @keyup.enter="search" v-model="term"
      ></v-text-field>
      <!--v-spacer></v-spacer>
      <v-btn flat
        nuxt to="/blog"
      >
        Блог
      </v-btn>
      <v-btn flat
        nuxt to="/about"
      >
        О проекте
      </v-btn-->
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer app class="pa-2">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Controls from '@/components/controls.vue'

  export default {
    components: {
      Controls
    },
    data () {
      return {
        term: '',
        title: 'News Insights'
      }
    },
    methods: {
      home () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
html {
  overflow: hidden;
  height: 100vh;
}
</style>
