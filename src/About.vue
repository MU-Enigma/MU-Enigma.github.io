<template>
  <Header :about="true" />
  <div class="flex-grow mt-20 ml-10 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl">About</h1>
    <div class="flex flex-col gap-6 mt-4">
      <h2 class="text-2xl">Who we are</h2>
      <h2 class="flex flex-col gap-4">
        <span>The Computer Science Club at Mahindra Ecole Centrale is a student-run organization affiliated 
        with the Computer Science and Engineering Department. It provides learning, networking and career 
        opportunities to the members of Enigma.</span>
        <span>We are an organization dedicated to providing MEC students 
        with a tight-knit community of friends and mentors to promote and advocate computer science and 
        working with tech. Community events include study breaks, social outings and meet and greets between 
        different classes. We also provide many professional resources for members including company-sponsored 
        informational and networking events, resume review and algorithm challenge sessions, study breaks, 
        social outings, and tech workshops. Two of our most popular initiatives are WeeklySessions and HackWeek. 
        No membership fee or annual dues.</span>
        <span>Our club faculty advisor is Prof. Prafulla Kalapatapu.</span>
      </h2>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

body {
  background:#1F2937;
  margin: 0;
}

#about {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: #FFF;
}
</style>
