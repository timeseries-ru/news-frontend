<template>
  <div>
    <v-card class="mx-2 mb-4 pa-2 elevation-8" v-for="(post, index) in posts" :key="index">
      <v-card-title><h2>{{post.title}}</h2></v-card-title>
      <v-layout>
        <v-flex xs6>
          <v-img style="border-radius: 2px"
            v-if="post.image"
            :src="post.image"
          ></v-img>
        </v-flex>
        <v-flex xs6 class="px-4 pb-2">
          {{ post.description }}
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" nuxt :to="'/blog/post/' + post.id">Подробнее</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Posts',
  props: ['posts']
}
</script>
