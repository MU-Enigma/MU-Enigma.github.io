<template>
  <header class="flex justify-between items-center px-8 py-5 z-40" :class="{'sticky -top-0 backdrop-filter backdrop-blur nav-scroll-bg': !overflow, 'fixed w-screen': overflow}">
    <a href="/">
      <img src="./assets/enigma.svg" class="lg:w-auto w-6 select-none" />
    </a>
    <ul class="lg:flex hidden gap-6">
      <a href="/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': home}"><li>Home</li></a>
      <a href="/about/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': about}"><li>About</li></a>
      <a href="/blogs" class="hover:text-accent transition ease-in-out duration-300"><li>Blog</li></a>
      <a href="/projects/" class="hover:text-accent transition ease-in-out duration-300 hidden" :class="{'text-accent': projects}"><li>Projects</li></a>
      <a href="/events/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': events}"><li>Events</li></a>
      <a href="/gallery/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': gallery}"><li>Gallery</li></a>
    </ul>
    <div class="block lg:hidden" @click="overflow = !overflow">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="white"/>
      </svg>
    </div>
    <!-- <div class="material-icons" @click="overflow = false" v-else>close</div> -->
  </header>
  <div class="flex justify-center items-center fixed over-flow backdrop-filter backdrop-blur w-screen text-center z-50" v-if="overflow">
    <div>
      <ul class="flex flex-col gap-12">
        <a href="/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': home}"><li>Home</li></a>
        <a href="/about/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': about}"><li>About</li></a>
        <a href="/blogs" class="hover:text-accent transition ease-in-out duration-300"><li>Blog</li></a>
        <a href="/projects/" class="hover:text-accent transition ease-in-out duration-300 hidden" :class="{'text-accent': projects}"><li>Projects</li></a>
        <a href="/events/" class="hover:text-accent transition ease-in-out duration-300 hidden" :class="{'text-accent': events}"><li>Events</li></a>
        <a href="/gallery/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': gallery}"><li>Gallery</li></a>
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
  background: rgba(0, 0, 0, 0.64);
  margin-top: 64px;
  height: calc(100vh - 64px);
}

.nav-scroll-bg {
  background: rgba(11, 17, 31, 0.64);
}
</style>
