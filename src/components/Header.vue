<template>
  <header class="flex justify-between items-center px-8 py-5" :class="{'sticky -top-0 backdrop-filter backdrop-blur nav-scroll-bg': !overflow, 'fixed w-screen': overflow}">
    <img src="./assets/enigma.svg" class="lg:w-auto w-6 select-none" />
    <ul class="lg:flex hidden gap-6">
      <a href="index.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': home}"><li>Home</li></a>
      <a href="about.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': about}"><li>About</li></a>
      <a href="mec-enigma.github.io/blogs" class="hover:text-accent transition ease-in-out duration-300"><li>Blog</li></a>
      <a href="projects.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': projects}"><li>Projects</li></a>
      <a href="events.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': events}"><li>Events</li></a>
      <a href="gallery.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': gallery}"><li>Gallery</li></a>
    </ul>
    <span class="material-icons lg:hidden" @click="overflow = true" v-if="!overflow">menu</span>
    <span class="material-icons lg:hidden" @click="overflow = false" v-else>close</span>
  </header>
  <div class="flex justify-center items-center fixed over-flow backdrop-filter backdrop-blur w-screen text-center" v-if="overflow">
    <div class="">
      <ul class="flex flex-col gap-12">
      <a href="index.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': home}"><li>Home</li></a>
      <a href="about.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': about}"><li>About</li></a>
      <a href="mec-enigma.github.io/blogs" class="hover:text-accent transition ease-in-out duration-300"><li>Blog</li></a>
      <a href="projects.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': projects}"><li>Projects</li></a>
      <a href="events.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': events}"><li>Events</li></a>
      <a href="gallery.html" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': gallery}"><li>Gallery</li></a>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overflow: false,
      home: false,
      about: false,
      projects: false,
      events: false,
      gallery: false
    }
  },
  props: {
    home: Boolean,
    about: Boolean,
    projects: Boolean,
    events: Boolean,
    gallery: Boolean
  }
}
</script>

<style>
header {
  background: #111827;
  font-family: 'Roboto Mono', monospace;
}

.over-flow {
  background: rgba(0, 0, 0, 0.40);
  margin-top: 64px;
  height: calc(100vh - 64px);
}

.nav-scroll-bg {
  background: rgba(11, 17, 31, 0.64);
}
</style>
