<script lang="ts" setup>
const skillUrl = "https://skillicons.dev/icons?i="
const skills = [
  {
    name: "Java", url: skillUrl + 'java'
  },
  {
    name: "Kotlin", url: skillUrl + 'kotlin'
  },
  {
    name: "Swift", url: skillUrl + 'swift'
  },
  {
    name: "HTML", url: skillUrl + 'html'
  },
  {
    name: "CSS", url: skillUrl + 'css'
  },
  {
    name: "JavaScript", url: skillUrl + 'js'
  },
  {
    name: "TypeScript", url: skillUrl + 'ts'
  },
  {
    name: "PHP", url: skillUrl + 'php'
  },
  {
    name: "Python", url: skillUrl + 'python'
  },
  {
    name: "Flutter", url: skillUrl + 'flutter'
  },
  {
    name: "Vue.js", url: skillUrl + 'vuejs'
  },
  {
    name: "Nuxt.js", url: skillUrl + 'nuxtjs'
  },
  {
    name: "ReactJS", url: skillUrl + 'react'
  },
  {
    name: "Next.js", url: skillUrl + 'nextjs'
  },
  {
    name: "TailwindCSS", url: skillUrl + 'tailwindcss'
  },
  {
    name: "Laravel", url: skillUrl + 'laravel'
  },
  {
    name: "Phaser", url: 'https://cdn.phaser.io/images/logo/logo-download.png'
  },
  {
    name: "Construct", url: 'https://construct-static.com/images/v1228/r/global/construct-3-logo_v43.png'
  },
  {
    name: "MongoDB", url: skillUrl + 'mongodb'
  },
  {
    name: "MySql", url: skillUrl + 'mysql'
  },
  {
    name: "Firebase", url: skillUrl + 'firebase'
  },
  {
    name: "NodeJs", url: skillUrl + 'nodejs'
  },
  {
    name: "Bun", url: skillUrl + 'bun'
  },
  {
    name: "Git", url: skillUrl + 'git'
  },
  {
    name: "GitHub", url: skillUrl + 'github'
  }
];
</script>

<template>
  <div class="bg-green-700 min-h-screen" id="skill">
    <div class="flex flex-col items-center py-20 text-center select-none">
      <fa icon="fa-code" size="3x" color="white" />
      <span class="text-3xl text-white font-mono max-[450px]:text-2xl">My Skills</span>
      <div
        class="mx-52 my-5 max-[1024px]:mx-4 max-[450px]:mx-4 grid grid-cols-8 gap-4 max-[1024px]:grid-cols-5 max-[450px]:grid-cols-3">
        <div v-for="(skill, index) in skills" :key="index"
          class="bg-green-800 p-3 rounded text-center items-center justify-center content-center hover:cursor-pointer [&>*]:hover:animate-bounce hover:shadow-rounded hover:bg-green-500 hover:shadow-green-500 transition duration-300 ">
          <p align="center">
            <img class="w-12" :src=skill.url />
          </p>
          <span class="text-white max-[450px]:text-sm mt-3 font-mono">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
