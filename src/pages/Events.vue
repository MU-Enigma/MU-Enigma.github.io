<template>
  <div class="flex flex-col min-h-screen gap-10 my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl">Events</h1>

    <section v-if="eventsList[0].events[0].list[0].event" class="flex flex-col gap-6 bg-black/20 rounded-xl p-8">
      <h2 class="text-2xl font-bold capitalize text-red-500">(!) Upcoming events</h2>
      <div v-for="event in eventsList[0].events" :key="event" class="flex flex-col gap-1">
        <!-- <h3 class="text-2xl capitalize font-bold">{{ event.year }}</h3> -->
        <div v-for="i in event.list" :key="i" class="flex justify-between text-lg">
          <h3 class="w-60 lg:w-auto">{{ i.event }}</h3>
          <h3>{{ i.date }}</h3>
        </div>
      </div>
    </section>

    <section v-if="eventsList[1].events[0].list[0].event" class="flex flex-col gap-6 bg-black/20 rounded-xl p-8">
      <h2 class="text-2xl font-bold capitalize text-blue-500">(!) Ongoing events</h2>
      <div v-for="event in eventsList[1].events" :key="event" class="flex flex-col gap-1">
        <div v-for="i in event.list" :key="i" class="flex justify-between text-lg">
          <h3 class="w-60 lg:w-auto">{{ i.event }}</h3>
          <h3>{{ i.date }}</h3>
        </div>
      </div>
    </section>

    <div v-for="event in eventsList[2].events" :key="event" class="flex flex-col gap-4">
      <h3 class="text-2xl capitalize font-bold">{{ event.year }}</h3>
      <div v-for="i in event.list" :key="i" class="flex justify-between">
        <h3 class="w-60 lg:w-auto">{{ i.event }}</h3>
        <h3>{{ i.date }}</h3>
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
