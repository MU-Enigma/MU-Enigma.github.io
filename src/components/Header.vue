<template>
  <header class="flex justify-between items-center px-8 py-5">
    <img src="./assets/enigma.svg" class="lg:w-auto w-6" />
    <ul class="lg:flex hidden gap-6">
      <a href="" class="hover:text-accent transition ease-in-out duration-300 text-accent"><li>Home</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>About</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>Blog</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>Projects</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>Events</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>Gallery</li></a>
    </ul>
    <span class="material-icons lg:hidden" @click="overflow = true" v-if="!overflow">menu</span>
    <span class="material-icons lg:hidden" @click="overflow = false" v-else>menu</span>
  </header>
  <div class="flex justify-center items-center absolute over-flow w-screen text-center" v-if="overflow">
    <div class="">
      <ul class="flex flex-col gap-12">
      <a href="" class="hover:text-accent transition ease-in-out duration-300 text-accent"><li>Home</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>About</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>Blog</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>Projects</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>Events</li></a>
      <a href="" class="hover:text-accent transition ease-in-out duration-300"><li>Gallery</li></a>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overflow: false
    }
  },
}
</script>

<style>
header {
  background: #111827;
}

.over-flow {
  background: rgba(0, 0, 0, 0.32);
  margin-top: 64px;
  height: calc(100vh - 64px);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
</style>
