<template>
  <Header :about="true" class="font-mono" />
  <div class="my-20 ml-10 lg:ml-44 mr-10 lg:mr-44">
    <h1 class="text-accent font-bold text-4xl  uppercase">About</h1>
    <div class="flex flex-col gap-14">
      <div class="flex flex-col gap-6 mt-4">
        <h2 class="text-2xl">Know us</h2>
        <h2 class="flex flex-col gap-4 font-thin text-justify">
          <span>The Computer Science Club at <a href="https://www.mahindraecolecentrale.edu.in/" class="underline">Mahindra University</a> is a student-run organization affiliated 
            with the Computer Science and Engineering Department. It provides learning, networking and career 
            opportunities to the members of Enigma.</span>

          <span>We are an organization dedicated to providing MU students 
            with a tight-knit community of friends and mentors to promote and advocate computer science and 
            working with tech. Community events include study breaks, social outings, meet and greets between 
            different classes. We also provide many professional resources for members including company-sponsored 
            informational and networking events, resume review and algorithm challenge sessions, study breaks, 
            social outings, and tech workshops. Two of our most popular initiatives are Weekly Sessions and HackWeek. 
            No membership fee or annual dues.</span>

          <span>Our club faculty advisor is <a href="https://www.mahindraecolecentrale.edu.in/faculty/88/Prafulla-Kalapatapu.html" class="underline">Prof. Prafulla Kalapatapu</a>.</span>
        </h2>
      </div>

      <div class="flex flex-col gap-6 mt-4">
        <h2 class="text-2xl">Our mission</h2>
        <h2 class="flex flex-col gap-4 font-thin text-justify">
          <span>Our mission is to create a community of mentors and friends and partner with companies to provide 
            the best resources for students to explore computer science and software. We hope you’ll join us during 
            the school year and join our community! If you want to learn more, feel free to message this year’s 
            President - <a href="https://github.com/SrikerPaturi" class="underline">Sriker Paturi</a>, Vice-President - <a href="https://srikar.tech" class="underline">Ananta Srikar</a>.</span>

          <span><h3 class="font-bold">Previous Heads:</h3>
            <ul class="list-inside list-disc">
              <li><a href="https://github.com/athishrao" class="underline">Athish Rahul Rao</a> | <a href="https://github.com/FlasHRender" class="underline">Thalatam Sainath</a> | Batch - 2015</li>
              <li><a href="https://github.com/rahulkumaran" class="underline">Rahul Arulkumaran</a> | Batch - 2016</li>
              <li><a href="https://rochan-a.github.io/" class="underline">Rochan AV</a> | <a href="https://icecereal.github.io/" class="underline">Raghav NS</a> | Batch - 2017</li>
              <!-- <li><a href="https://github.com/SrikerPaturi" class="underline">Sriker Paturi</a> | <a href="" class="underline">Sakshi R</a> | Batch - 2018</li> -->
            </ul>
          </span>
        </h2>
      </div>

      <div class="flex flex-col gap-6 mt-4">
        <h2 class="text-2xl">Sounds interesting?</h2>
        <h2 class="flex flex-col gap-4 font-thin text-justify">
          <span>We have a Discord server for general CS-related questions and discussion. If you want to reach out 
            to alumni, ask curriculum related questions, or talk about rad hackathon projects, please join! Sign up <a href="https://discord.gg/5eJwmkV" class="underline">here</a>.</span>

          <span>While you’re here, be sure to check out our <a href="" class="underline">past projects</a> and other <a href="" class="underline">events / blog posts</a> we have coming up.</span>

          <span>Finally, if you have any suggestions for cool things for the club to do (whether for career development or just 
            something fun), then please <a href="https://discord.gg/5eJwmkV" class="underline">contact us</a>!</span>
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

#about {
  /* font-family: 'Roboto Mono', monospace; */
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: #FFF;
}
</style>
