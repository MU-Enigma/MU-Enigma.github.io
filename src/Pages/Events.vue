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
        class="flex justify-between">
        <h3 class="w-60 lg:w-auto">{{i.event}}</h3>
        <h3>{{i.date}}</h3>
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
    upcoming: null
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
  background:#1F2937;
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
