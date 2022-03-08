<template>
  <header class="flex justify-between items-center sticky -top-0 backdrop-filter backdrop-blur px-8 py-5 z-40 bg-black/20">
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
    <div class="ml-2 -my-1 lg:hidden">
      <button @click="overflow = true" class="text-white w-8 h-8 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="white"/>
        </svg>
      </button>
    </div>
    <!-- <div class="material-icons" @click="overflow = false" v-else>close</div> -->
  </header>
  <div class="fixed z-50 inset-0 lg:hidden" v-if="overflow">
    <div class="fixed inset-0 bg-black/20 backdrop-blur-sm" @click="overflow = false"></div>
    <div class="fixed top-4 right-4 w-full max-w-xs bg-slate-900 rounded-lg shadow-lg p-6 text-base font-semibold">
      <button @click="overflow = false" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600">
        <svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
          <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </button>
      <ul class="flex flex-col gap-12">
        <a href="/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': home}"><li>Home</li></a>
        <a href="/about/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': about}"><li>About</li></a>
        <a href="/blogs" class="hover:text-accent transition ease-in-out duration-300"><li>Blog</li></a>
        <a href="/projects/" class="hover:text-accent transition ease-in-out duration-300 hidden" :class="{'text-accent': projects}"><li>Projects</li></a>
        <a href="/events/" class="hover:text-accent transition ease-in-out duration-300" :class="{'text-accent': events}"><li>Events</li></a>
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
  font-family: 'Roboto Mono', monospace;
}

.over-flow {
  background: rgba(0, 0, 0, 0.64);
  margin-top: 64px;
  height: calc(100vh - 64px);
}
</style>
