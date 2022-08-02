<template>
  <div class="flex flex-col min-h-screen gap-8 my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <router-link to="/blogs">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.58L6.83 13H21V11Z" fill="white"></path>
      </svg>
    </router-link>
    <h1 class="text-accent font-bold text-3xl">{{ post.title }}</h1>
    <h2 class="text-xl">By <span class="font-bold">{{ post.author }}</span></h2>
    <Markdown :source="mark" class="mark overflow-x-clip flex flex-col gap-6 text-white/90 font-light"></Markdown>
  </div>
</template>

<script setup>
import Markdown from 'vue3-markdown-it'
import axios from 'axios'
</script>

<script>
export default {
  data() {
    return {
      blogs: [],
      post: [],
      content: [],
      mark: ""
    }
  },
  created() {
    this.getBlogsDB()
    window.scrollTo(0, 0)
  },
  methods: {
    async getBlogsDB() {
      try {
        const res = await axios.get("https://raw.githubusercontent.com/MU-Enigma/store/master/blogs.json")
        this.blogs = res.data
        this.getPost()
      } catch (error) {
        console.log(error)
      }
    },
    getPost() {
      this.post = this.blogs.map((val) => val.posts).flat().find(val => val.basename === this.$route.params.post)
      this.mark = this.post.content
      return this.post
    }
  }
}
</script>

<style>
.mark > h1 {
  font-size: 1.5rem;
  text-decoration: underline;
  color: white;
}

.mark > ul {
  list-style-type: disc;
  list-style-position: inside;
}

.mark > table, th, td {
  border-collapse: collapse;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
}

.mark > p > a {
  color: rgb(147 197 253);
}

.mark > p > strong {
  color: white;
  font-weight: bold;
}
</style>