<template>
  <div class="flex flex-col gap-8 my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl">Events</h1>

    <!-- <div class="flex flex-col gap-5 mt-8">
      <h2 class="text-accent text-2xl font-bold">Upcoming</h2>
      <div class="flex justify-between">
        <a href="https://mu-enigma.github.io/battleship/"><h3 class="w-60 font-bold lg:w-auto">{{upcoming.event}}</h3></a>
        <h3>{{upcoming.date}}</h3>
      </div>
    </div> -->

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
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    events: null,
    upcoming: null,
    detailer: false
  }),
  created() {
    axios.get("https://raw.githubusercontent.com/MU-Enigma/MU-Enigma.github.io/jayson/events.json").then((res) => {
      this.events = res.data
    })
    axios.get("https://raw.githubusercontent.com/MU-Enigma/MU-Enigma.github.io/jayson/upcoming.json").then((res) => {
      this.upcoming = res.data
    })
  }
}
</script>
