<template>
  <footer class="flex justify-center items-center px-8 py-5">
    <ul class="flex lg:flex-row flex-col items-center gap-4 lg:gap-12">
      <li class="text-accent hidden">
        <a href="mailto:engima@mahindrauniversity.edu.in">
          <div class="flex gap-2">
            <span class="material-icons">mail</span>
            <div>engima@mahindrauniversity.edu.in</div>
          </div>
        </a>
      </li>
      <li class="text-accent">Copyright © 2021 ENIGMA CS CLUB</li>
      <li>Made with ❤️ by Anirudh and Rahul</li>
      <li><Social /></li>
    </ul>
  </footer>
</template>

<script setup>
import Social from './Social.vue'
</script>

<style>
footer {
  background: #111827;
  font-family: 'Roboto Mono', monospace;
}
</style>
