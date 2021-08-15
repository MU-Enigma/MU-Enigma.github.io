<template>
  <Header :gallery="true" />
  <div class="flex-grow my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl uppercase">Gallery</h1>
    <div class="flex flex-col gap-14">
      <div class="flex flex-col gap-6 mt-4">
        <h2 class="text-2xl">Enigma hosted events</h2>
        <h2 class="mt-8">

          <div class="grid grid-cols-5 gap-4">
            <div v-for="(img, index) in imgs" :key="img">
              <img :srcset="img" class="h-40 cursor-pointer rounded-xl transform ease-in-out duration-200 hover:scale-90" @click="showMultiple(index)">
            </div>
          </div>

          <!-- all props & events -->
          <vue-easy-lightbox
            scrollDisabled
            moveDisabled
            :visible="visible"
            :imgs="imgs"
            :index="index"
            @hide="handleHide"
            class="backdrop-filter backdrop-blur" />
        </h2>
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
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  components: {
      VueEasyLightbox
  },
  data() {
      return {
        imgs: [
          'https://github.com/AndroBuddy/TestBase/raw/img/3P6A2461.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P6A2468.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P6A2473.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P6A2485.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P6A2509.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P7A4377.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P7A4452.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P7A4493.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P7A4720.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P7A4722.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P7A4748.JPG',
          'https://github.com/AndroBuddy/TestBase/raw/img/3P7A4717.JPG'
        ],
        visible: false,
        index: 0
      }
    },
    methods: {
      showMultiple(index) {
        this.index = index
        this.show()
      },
      show() {
        this.visible = true
      },
      handleHide() {
        this.visible = false
      }
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

#gallery {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: #FFF;
}
</style>
