<template>
  <Header :events="true" />
  <div class="flex flex-col gap-8 my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl">Events</h1>

    <div class="flex flex-col gap-5 mt-8">
      <h2 class="text-accent text-2xl font-bold">Upcoming</h2>
      <div class="flex justify-between">
        <a href="https://mu-enigma.github.io/battleship/"><h3 class="w-60 font-bold lg:w-auto">{{upcoming.event}}</h3></a>
        <h3>{{upcoming.date}}</h3>
      </div>
    </div>

    <div
      v-for="e in events"
      :key="e"
      class="flex flex-col gap-5 mt-8">
      <h2 class="text-2xl font-bold">{{e[0].year}}</h2>
      <div
        v-for="i in e"
        :key="i"
        class="flex justify-between"
        @click="detailer = false">
        <h3 class="w-60 lg:w-auto">{{i.event}}</h3>
        <h3>{{i.date}}</h3>
      </div>
    </div>
  </div>

  <div class="fixed flex justify-center items-center z-50 inset-0" v-if="detailer">
    <div class="fixed inset-0 bg-black/40 backdrop-blur-sm">
      <button @click="detailer = false" class="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-white hover:text-white/40">
          <svg viewBox="0 0 10 10" class="w-2.5 h-2.5 overflow-visible" aria-hidden="true">
            <path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
      </button>
    </div>
    <div class="m-8 w-full bg-slate-900 rounded-lg shadow-lg p-6 text-base font-semibold z-50">
      <div>
        Hello template
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<script>
export default {
  data: () => ({
    events: null,
    upcoming: null,
    detailer: false
  }),
  created() {
    this.axios.get("https://raw.githubusercontent.com/MU-Enigma/MU-Enigma.github.io/jayson/events.json").then((res) => {
      this.events = res.data
    })
    this.axios.get("https://raw.githubusercontent.com/MU-Enigma/MU-Enigma.github.io/jayson/upcoming.json").then((res) => {
      this.upcoming = res.data
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

body {
  background:rgb(15 23 42);
  margin: 0;
}

/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 16px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #32393F; 
  border-radius: 16px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3B4248; 
}

#events {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: #FFF;
}
</style>
