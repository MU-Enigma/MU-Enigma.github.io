<template>
  <div class="flex flex-col min-h-screen gap-10 my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl">Events</h1>

    <section v-if="eventsList[0].events[0].list[0].event">
      <h2 class="text-2xl font-bold capitalize">Upcoming</h2>
      <div v-for="event in eventsList[0].events" :key="event" class="flex flex-col gap-4">
        <h3 class="text-2xl capitalize font-bold">{{ event.year }}</h3>
        <div v-for="i in event.list" :key="i" class="flex justify-between">
          <h3 class="w-60 lg:w-auto">{{ i.event }}</h3>
          <h3 class="w-60 lg:w-auto">{{ i.date }}</h3>
        </div>
      </div>
    </section>

    <div v-for="event in eventsList[1].events" :key="event" class="flex flex-col gap-4">
      <h3 class="text-2xl capitalize font-bold">{{ event.year }}</h3>
      <div v-for="i in event.list" :key="i" class="flex justify-between">
        <h3 class="w-60 lg:w-auto">{{ i.event }}</h3>
        <h3 class="w-60 lg:w-auto">{{ i.date }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      eventsList: []
    }
  },
  created() {
    window.scrollTo(0, 0)
    axios.get("https://raw.githubusercontent.com/MU-Enigma/store/master/events.json").then((res) => {
      this.eventsList = res.data
    })
  }
}
</script>
