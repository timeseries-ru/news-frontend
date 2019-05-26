<template>
  <v-app>
    <v-toolbar fixed app>
      <v-toolbar-title v-text="title" style="cursor: pointer" @click="home"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        placeholder="Поиск" append-icon="search" @keyup.enter="search" v-model="term"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn flat
        nuxt to="/blog"
      >
        Блог
      </v-btn>
      <v-btn flat
        nuxt to="/about"
      >
        О проекте
      </v-btn>
      <v-btn
        icon
        :disabled="!dashboard"
        @click="toggleSidebar()"
      >
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <div style="height: calc(100vh - 64px)" class="mr-1 mt-1">
        <vue-scroll>
          <v-container>
            <nuxt />
          </v-container>
          <v-footer class="pa-2">
            <span>&copy; {{ new Date().getFullYear() }}</span>
          </v-footer>
        </vue-scroll>
      </div>
    </v-content>
    <v-navigation-drawer
      temporary
      clipped
      right
      v-model="sidebar"
      fixed
      width="450"
    >
      <vue-scroll>
        <div class="mr-1">
          <template v-for="control in $store.state.controls">
            <div v-if="control.type === 'date'" class="mb-2 mx-1 pa-1">
              <v-subheader>{{control.text}}</v-subheader>
              <v-date-picker full-width></v-date-picker>
            </div>
          </template>
          <div class="mx-2 my-4">
            <v-btn block color="primary" @click="filter">Применить</v-btn>
          </div>
        </div>
      </vue-scroll>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  import { mapMutations } from 'vuex'
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
        term: '',
        title: 'News Insights',
        path: this.$router.currentRoute.fullPath
      }
    },
    computed: {
      sidebar: {
        get () {
          return this.$store.state.sidebar
        },
        set (value) {
          this.setSidebar(value)
        }
      },
      dashboard () {
        return this.path === '/'
      }
    },
    methods: {
      home () {
        this.$router.push('/')
      },
      search () {
        this.$router.push('/search/' + this.term)
        this.term = ''
      },
      ...mapMutations({
        toggleSidebar: 'toggleSidebar',
        setSidebar: 'setSidebar'
      }),
      filter () {
        this.sidebar = false
      }
    },
    watch: {
      $route () {
        this.path = this.$router.currentRoute.fullPath
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
