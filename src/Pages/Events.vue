<template>
  <Header :events="true" />
  <div class="flex flex-col gap-8 my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl">Events</h1>
    <div class="flex flex-col gap-5 mt-8">
      <h2 class="text-accent text-2xl font-bold">Upcoming</h2>
      <div class="flex justify-between">
        <h3 class="w-60 font-bold lg:w-auto">Battleship week long challenge</h3>
        <h3>Jan 29</h3>
      </div>
    </div>

    <div class="flex flex-col gap-5 mt-8">
      <h2 class="text-2xl font-bold">2022</h2>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">Google Hash Code - Introductory session</h3>
        <h3>Jan 25</h3>
      </div>
    </div>

    <div class="flex flex-col gap-5 mt-8">
      <h2 class="text-2xl font-bold">2021</h2>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">2021 Batch Orientation</h3>
        <h3>Dec 14</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">Hacktoberfest 2021 Introduction</h3>
        <h3>Oct 08</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">Digital Images livestream</h3>
        <h3>Aug 21</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">How does WhatsApp work? livestream</h3>
        <h3>Jul 24</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">Map Generation in Games livestream</h3>
        <h3>Jul 10</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">Linux Introductory session</h3>
        <h3>Feb 11</h3>
      </div>
    </div>

    <div class="flex flex-col gap-5 mt-8">
      <h2 class="text-2xl font-bold">2020</h2>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">Python Mini Project</h3>
        <h3>Dec 16</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">Introduction to Python</h3>
        <h3>Nov 26</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">2020 Batch Orientation</h3>
        <h3>Nov 19</h3>
      </div>
      <div class="flex justify-between">
        <h3 class="w-60 lg:w-auto">Hacktoberfest 2020 Introduction</h3>
        <h3>Oct 28</h3>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
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
