<script lang="ts" setup>
// const skillUrl = "https://skillicons.dev/icons?i="
const projects = [
  {
    title: "Game Wish | Construct 2",
    desc: "Basic platformer game based on html5, build using construct2",
    img: "https://i.ibb.co.com/CtnvcjN/GameWish.png",
    source: "https://drive.google.com/file/d/1aFvk5QvwCVaOQDDGCDvJWqSR43D5MEeo/view?usp=sharing",
    url: "https://drive.google.com/file/d/1SBNGEkQzY_ic8K6ejybKqgcTVZGn3F2B/view?usp=sharing"
  },
  {
    title: "Suryakost | Android Java",
    desc: "A rent room app using android java & firebase.",
    img: "_nuxt/assets/image/suryakost.png",
    source: "https://github.com/nikophreaker/Suryakost",
    url: "https://github.com/nikophreaker/Suryakost"
  },
  {
    title: "Cash Management | Desktop Java",
    desc: "A Cash Management Desktop app using java & mysql. Material in use rojerusan",
    img: "_nuxt/assets/image/kas.jpg",
    source: "https://github.com/nikophreaker/Program-Java-Desktop-Kas-RT",
    url: "https://drive.google.com/file/d/1KxnD-Wj1zFuJw-_OrfUkggY8kG8m64JV/view?usp=sharing"
  },
  {
    title: "Msportsid | KMM",
    desc: "A sport news portal for android & ios platform. It's developed with kmm (Kotlin Multiplatform Mobile) & model MVVM architecture.",
    img: "_nuxt/assets/image/msportsid.png",
    source: "https://github.com/mgoaldev/MSportsKMM",
    url: "https://apkpure.com/id/msportsid/com.providoindodigital.mgoal"
  },
  {
    title: "Funwash POS | Android & Laravel",
    desc: "A Point of Sales app for vehicle wash using android kotlin with jetpack compose & Laravel (API) dashboard in use HopeUI. ",
    img: "_nuxt/assets/image/funwash_pos_dashboard.png",
    source: "https://github.com/nikophreaker/FunWashPos",
    url: "https://funwash.fun/login"
  },
  {
    title: "Simple Weather | Flutter",
    desc: "A Simple Weather app using flutter.",
    img: "_nuxt/assets/image/weather.png",
    source: "https://github.com/nikophreaker/wheater_app",
    url: "https://drive.google.com/file/d/1Yeg47LT_-Tz0Z9hbdmtX8vgjauSCSXmM/view?usp=sharing"
  },
  {
    title: "Promotion Page | Laravel",
    desc: "Promotional page for gambling games, Develop with laravel",
    img: "https://i.ibb.co.com/fr5MLvC/promosi.png",
    source: "https://github.com/oriegenbi27/promosi88-laravel",
    url: "https://spiffy-rolypoly-f980c5.netlify.app/"
  },
  {
    title: "Mini Game Android | Flutter",
    desc: "A minigame for android platform using flutter framework. Games built with phaser",
    img: "https://i.ibb.co.com/1KXZnNp/Aku-Mau-Juara.png",
    source: "https://github.com/nikophreaker/aku_juara",
    url: "https://apkpure.com/id/aku-mau-juara/com.akumaujuara.mini_games_4_you"
  },
  {
    title: "Mini Game Backend | VueJS & Firestore",
    desc: "A minigame backend using VueJS & Firestore. Games built with phaser",
    img: "_nuxt/assets/image/dashboard_game.png",
    source: "https://github.com/nikophreaker/admin-page",
    url: "https://flourishing-alpaca-703881.netlify.app/#!"
  },
  {
    title: "Ticket App Frontend | NextJS",
    desc: "A ticketing app built with NextJS (Desktop view only). Discontinue project",
    img: "_nuxt/assets/image/ticket.png",
    source: "https://github.com/nikophreaker/ticket-app",
    url: "https://ticket-app-indol.vercel.app/"
  },
  {
    title: "LP Fantasy League",
    desc: "Landing Page for Fantasy League Update using native html, js & css.",
    img: "_nuxt/assets/image/lp_fantasy.png",
    source: "#",
    url: "https://chipper-shortbread-6239d6.netlify.app/"
  },
  {
    title: "Fortune Wheel | Phaser",
    desc: "This fortune wheel is a game built with Phaser.",
    img: "_nuxt/assets/image/fortune.png",
    source: "https://github.com/nikophreaker/fortune-wheel",
    url: "https://mobile--sprightly-youtiao-662b0f.netlify.app/?game=spin"
  },
  {
    title: "Scratch & Win | Phaser",
    desc: "This Scratch & Win is a game built with Phaser.",
    img: "_nuxt/assets/image/scratch.png",
    source: "https://github.com/nikophreaker/scratch-js",
    url: "https://friendly-crisp-89dfaf.netlify.app/?game=scratch"
  },
  {
    title: "Pinball | Phaser",
    desc: "This Pinball is a game built with Phaser.",
    img: "_nuxt/assets/image/pinball.png",
    source: "https://github.com/nikophreaker/pinball-js",
    url: "https://darling-selkie-c23084.netlify.app/"
  },
  {
    title: "TiktokBot | Python (not work for now)",
    desc: "This TiktokBot for view is built with Python.",
    img: "https://c.files.bbci.co.uk/FD0D/production/_128018746_gettyimages-1235604538.jpg",
    source: "https://github.com/nikophreaker/TikBot",
    url: "https://github.com/nikophreaker/TikBot"
  }
];

function getMoreProjects() {
  isMoreProjects.value = !isMoreProjects.value;
  return loadProjects.value = projects;
}

const loadProjects = useState('loadProjects', () => projects.slice(0, projects.length > 6 ? 6 : projects.length));
const isMoreProjects = useState('isMoreProjects', () => projects.length > 3);
</script>

<template>
  <div class="bg-green-700 min-h-screen" id="project">
    <div class="flex flex-col items-center py-20">
      <fa icon="fa-laptop-code" size="3x" color="white" />
      <span class="text-3xl text-white font-mono max-[450px]:text-2xl">Projects</span>
      <div
        class="mx-40 my-5 max-[1024px]:mx-4 max-[450px]:mx-4 grid grid-cols-3 gap-4 max-[1024px]:grid-cols-2 max-[450px]:grid-cols-1">
        <div v-for="(project, index) in loadProjects" :key="index"
          class="h-56 w-96 max-[800px]:w-80 max-[355px]:w-72 bg-green-800 rounded-xl hover:bg-green-500 hover:shadow-rounded hover:shadow-green-500 transition duration-300 hover:cursor-default overflow-hidden [&>div>#desc]:hover:-translate-y-[90%]">
          <div class="relative">
            <div class="absolute z-30 bg-black/75 text-center w-full">
              <span class="text-white text-lg max-[450px]:text-sm font-mono font-semibold">
                {{
                  project.title
                }}
              </span>
            </div>
            <img class="relative z-0 h-56 w-96 max-[800px]:w-80 max-[355px]:w-72" :src=project.img />
            <div class="absolute bg-black/65 transition duration-300 h-full w-full z-20 flex-col text-center" id="desc">
              <p class="text-white max-[450px]:text-sm p-5 font-mono font-medium">{{ project.desc }}</p>
              <div class="flex-row">
                <a class="bg-black hover:bg-green-500 text-white rounded-full py-3 px-5 text-[17px] ms-5 max-[1024px]:ms-0 hover:cursor-pointer [&>*]:hover:animate-bounce hover:shadow-rounded hover:shadow-green-500"
                  :href=project.url target="_blank">
                  <fa-layers class="me-3 fa-1x">
                    <fa icon="fa-eye"></fa>
                  </fa-layers>
                  <span>View</span>
                </a>
                <a class="bg-black hover:bg-green-500 text-white rounded-full py-3 px-5 text-[17px] ms-5 max-[1024px]:ms-0 hover:cursor-pointer [&>*]:hover:animate-bounce hover:shadow-rounded hover:shadow-green-500"
                  :href=project.source target="_blank">
                  <fa-layers class="me-3 fa-1x">
                    <fa icon="fa-code"></fa>
                  </fa-layers>
                  <span>Source</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="items-center bg-black hover:bg-green-500 text-white rounded-full py-3 px-5 text-[17px] ms-5 max-[1024px]:ms-0 hover:cursor-pointer [&>*]:hover:animate-bounce hover:shadow-rounded hover:shadow-green-500"
        @click="getMoreProjects" :hidden="!isMoreProjects">
        <span>Load More</span>
        <fa-layers class="ms-3 fa-1x">
          <fa icon="fa-square-caret-down"></fa>
        </fa-layers>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
