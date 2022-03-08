<template>
  <Header :home="true" />
  <div class="flex-grow flex flex-col-reverse lg:flex-row lg:justify-between justify-center items-center">
    <div class="mx-16 flex flex-col gap-2 lg:gap-5">
      <h1 class="lg:text-4xl text-2xl font-bold">Enigma</h1>
      <h2 class="lg:text-4xl text-xl"><span class="text-accent">Computer Science</span> Club</h2>
      <h3 class="lg:text-2xl text-lg font-thin">In the End, it all comes down to 1’s and 0’s</h3>
    </div>
    <img src="./assets/landing_hero.svg" class="lg:w-auto w-0 select-none" />
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

body {
  background: url("./assets/landing_bin.svg") rgb(15 23 42);
  margin: 0;
}

#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #FFF;
}
</style>
