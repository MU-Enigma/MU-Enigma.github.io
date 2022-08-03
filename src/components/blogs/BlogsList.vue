<template>
  <div class="flex flex-col min-h-screen gap-10 my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl">Blogs</h1>
    <div class="flex flex-col gap-4" v-for="y in blogs" :key="y.year">
      <h2 class="text-2xl font-bold">{{ y.year }}</h2>
      <router-link class="flex justify-between" v-for="post in y.posts" :key="post.post" :to="`/blogs/${post.basename}`">
        <h3 class="w-60 lg:w-auto">{{ post.title }}</h3>
        <h3>{{ post.date }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data() {
    return {
      blogs: []
    }
  },
  created() {
    this.getBlogsDB()
  },
  methods: {
    async getBlogsDB() {
      try {
        const res = await axios.get("https://raw.githubusercontent.com/MU-Enigma/store/master/blogs.json")
        this.blogs = res.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>