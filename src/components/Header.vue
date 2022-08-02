<template>
  <header class="flex justify-between items-center sticky -top-0 px-8 py-5 z-40 bg-black/20"
    :class="{'backdrop-filter backdrop-blur': !overflow}">
    <router-link to="/">
      <img src="./assets/enigma.svg" class="lg:w-auto w-6 select-none" />
    </router-link>
    <ul class="lg:flex hidden gap-6">
      <li class="hover:text-accent transition ease-in-out duration-300"
        :class="{'text-accent': $router.currentRoute.value.name == 'home'}">
        <router-link to="/">Home</router-link>
      </li>
      <li class="hover:text-accent transition ease-in-out duration-300"
        :class="{'text-accent': $router.currentRoute.value.name == 'about'}">
        <router-link to="/about">About</router-link>
      </li>
      <li class="hover:text-accent transition ease-in-out duration-300"
        :class="{'text-accent': $router.currentRoute.value.name == 'blog-list' || $router.currentRoute.value.name == 'post'}">
        <router-link to="/blogs">Blogs</router-link>
      </li>
      <li class="hover:text-accent transition ease-in-out duration-300"
        :class="{'text-accent': $router.currentRoute.value.name == 'events'}">
        <router-link to="/events">Events</router-link>
      </li>
      <li class="hover:text-accent transition ease-in-out duration-300"
        :class="{'text-accent': $router.currentRoute.value.name == 'gallery'}">
        <router-link to="/gallery">Gallery</router-link>
      </li>
    </ul>
    <div class="ml-2 -my-1 lg:hidden">
      <button @click="overflow = true" class="text-white w-8 h-8 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="white" />
        </svg>
      </button>
    </div>
    <!-- <div class="material-icons" @click="overflow = false" v-else>close</div> -->
  </header>
  <div class="fixed z-50 inset-0 lg:hidden" v-if="overflow">
    <div class="fixed inset-0 bg-black/20 backdrop-blur-sm" @click="overflow = false"></div>
    <div class="fixed top-4 right-4 w-full max-w-xs bg-slate-900 rounded-lg shadow-lg p-6 text-base font-semibold">
      <button @click="overflow = false"
        class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600">
        <svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
          <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          </path>
        </svg>
      </button>
      <ul class="flex flex-col lg:hidden gap-6">
        <li class="hover:text-accent transition ease-in-out duration-300"
          :class="{'text-accent': $router.currentRoute.value.name == 'home'}">
          <router-link to="/">Home</router-link>
        </li>
        <li class="hover:text-accent transition ease-in-out duration-300"
          :class="{'text-accent': $router.currentRoute.value.name == 'about'}">
          <router-link to="/about">About</router-link>
        </li>
        <li class="hover:text-accent transition ease-in-out duration-300"
          :class="{ 'text-accent': $router.currentRoute.value.name == 'blog-list' || $router.currentRoute.value.name == 'post' }">
          <router-link to="/blogs">Blogs</router-link>
        </li>
        <li class="hover:text-accent transition ease-in-out duration-300"
          :class="{'text-accent': $router.currentRoute.value.name == 'events'}">
          <router-link to="/events">Events</router-link>
        </li>
        <li class="hover:text-accent transition ease-in-out duration-300"
          :class="{'text-accent': $router.currentRoute.value.name == 'gallery'}">
          <router-link to="/gallery">Gallery</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overflow: false,
      selected: ''
    }
  },
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
