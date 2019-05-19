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
      <v-container>
        <nuxt />
      </v-container>
      <v-footer>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-content>
    <v-navigation-drawer
      temporary
      clipped
      right
      v-model="sidebar"
      fixed
      width="450"
    >
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data () {
      return {
        term: '',
        title: 'News Insights',
        path: ''
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
      })
    },
    watch: {
      $route () {
        this.path = this.$router.currentRoute.fullPath
      }
    }
  }
</script>
