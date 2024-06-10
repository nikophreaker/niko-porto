<script lang="ts" setup>
const experiences = [
  {
    title: 'Freelance Developer',
    duration: 'Oct 2023 - Present',
    company: '',
    location: 'East Jakarta, Jakarta, Indonesia · WFH'
  },
  {
    title: 'Mobile Apps & Web Game Developer',
    duration: 'May 2023 - Dec 2023 · 8 mos',
    company: 'PT. Provido Indo Digital',
    location: 'North Jakarta, Jakarta, Indonesia · On-site'
  },
  {
    title: 'Mobile Apps Developer',
    duration: 'Mar 2021 - May 2023 · 2 yrs 3 mos',
    company: 'PT. Provido Indo Digital',
    location: 'North Jakarta, Jakarta, Indonesia · On-site'
  },
  {
    title: 'Game Developer',
    duration: 'Feb 2021 - Feb 2021 · 1 mo',
    company: 'PT. Inovasi Digital Edukasi · Internship',
    location: 'North Jakarta, Jakarta, Indonesia · On-site'
  }
];
</script>

<template>
  <div class="min-h-screen bg-white" id="experience">
    <div class="text-center py-20 flex flex-col items-center">
      <fa icon="fa-fa-briefcase" size="3x" color="green" />
      <span class="text-3xl font-bold font-mono max-[450px]:text-2xl"><a class="text-green-700">My Exp</a>erience</span>
      <div v-for="(item, index) in experiences" :key="index" class="items-center w-[60%] max-[450px]:w-[85%] rounded-xl mx-auto d-block flex flex-row max-[450px]:flex-col border shadow-lg shadow-gray-400
        my-5 max-[450px]:mx-5">
        <div
          class="flex flex-col gap-2 py-5 ps-5 pe-12 items-start font-mono max-[450px]:pe-5 max-[450px]:items-center">
          <span class="text-2xl max-[1024px]:text-xl max-[450px]:text-lg text-green-700 font-bold">
            {{
              item.title
            }}
          </span>
          <span class="text-lg max-[450px]:text-md font-semibold font-mono">
            {{
              item.company
            }}
          </span>
          <span class="font-mono font-medium">
            {{
              item.duration
            }}
          </span>
          <span class="font-mono font-medium">
            {{
              item.location
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
