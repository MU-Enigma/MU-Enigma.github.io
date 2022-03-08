<template>
  <Header :gallery="true" />
  <div class="flex-grow my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl uppercase">Gallery</h1>
    <div class="flex flex-col gap-14">
      <div class="flex flex-col gap-6 mt-4">
        <h2 class="text-2xl">Enigma hosted events</h2>
        <div class="mt-8 flex justify-center items-center z-0">

          <div class="grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 sm:grid-cols-2 lg:gap-4 gap-6 justify-items-center">
            <div v-for="(img, index) in imgs" :key="img">
              <img :srcset="img" class="lg:h-36 md:h-40 sm:h-56 w-56 cursor-pointer rounded-xl transform ease-in-out duration-200 hover:scale-90" @click="showMultiple(index)">
            </div>
          </div>

          <!-- all props & events -->
          <vue-easy-lightbox
            scrollDisabled
            :visible="visible"
            :imgs="imgs"
            :index="index"
            @hide="handleHide"
            class="backdrop-filter backdrop-blur" />
        </div>
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
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P6A2461.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P6A2468.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P6A2473.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P6A2485.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P6A2509.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P7A4377.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P7A4453.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P7A4493.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P7A4720.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P7A4722.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/Mozilla-Hackathon/3P7A4748.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_5769.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_5770.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_5780.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9876.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9885.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9887.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9906.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9916.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9943.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9946.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9953.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9955.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9963.JPG',
          'https://github.com/MU-Enigma/MU-Enigma.github.io/raw/master/src/assets/images/All/IMG_9968.JPG',
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
