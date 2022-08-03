<template>
  <div class="flex-grow my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-3xl">Gallery</h1>
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
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  components: {
      VueEasyLightbox
  },
  data() {
      return {
        imgs: [
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P6A2461.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P6A2468.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P6A2473.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P6A2485.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P6A2509.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P7A4377.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P7A4453.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P7A4493.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P7A4720.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P7A4722.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/Mozilla-Hackathon/3P7A4748.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_5769.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_5770.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_5780.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9876.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9885.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9887.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9906.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9916.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9943.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9946.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9953.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9955.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9963.JPG',
          'https://raw.githubusercontent.com/MU-Enigma/store/master/gallery/All/IMG_9968.JPG',
        ],
        visible: false,
        index: 0
      }
    },
    created() {
      window.scrollTo(0, 0)
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
