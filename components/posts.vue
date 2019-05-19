<template>
  <div>
    <v-card class="mx-2 mb-4 pa-2 elevation-8" v-for="(post, index) in posts" :key="index">
      <v-layout>
        <v-flex xs6>
          <v-img
            v-if="post.image"
            :src="post.image"
          ></v-img>
        </v-flex>
        <v-flex xs6>
          <v-layout row wrap align-start fill-height class="mt-2 ml-4">
            <v-flex xs12 class="mb-4">
              <h2>{{post.title}}</h2>
              <v-divider></v-divider>
            </v-flex>
            <v-flex xs12 class="mb-4">
              {{ post.description }}
              <v-btn block color="default" nuxt :to="post.link">Подробнее</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Posts',
  props: ['posts']
}
</script>
