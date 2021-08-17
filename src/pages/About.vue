<template>
  <h1>{{ msg }}</h1>
  <dynamic-something/>
  <!-- <div>
    <h2 v-for="post in posts" :key="post.id">{{post.title}}</h2>
  </div> -->
</template>

<script>
import axios from 'axios';
import { computed, onBeforeMount, onServerPrefetch } from '@vue/runtime-core';
import { useStore } from '../store';

export default {
  data() {
    return {
      something: true
    }
  },
  layout: 'home',
  async asyncData({ store }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    store.commit('placeholder/setPosts', data);
    return {
      hi: true
    }
  },
  async setup() {
    const store = useStore();
    console.log('setting up');
    const posts = computed(() => store.state.placeholder.posts)
    return {
      msg: 'About',
      posts
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
