<script lang="ts" setup></script>

<template>
  <div class="bg-green-700 min-h-24" id="contact">
    <div class="flex flex-col items-center py-20 text-center select-none">
      <fa icon="fa-envelope" size="3x" color="white" />
      <span class="text-3xl text-white font-mono max-[450px]:text-2xl mb-5">Contact Me</span>
      <div
        class="mx-52 my-5 max-[1024px]:mx-4 max-[450px]:mx-4 grid grid-cols-4 gap-4 max-[1024px]:grid-cols-4 max-[450px]:grid-cols-1">
        <div
          class="bg-green-800 p-3 col-span-2 max-[1024px]:col-span-2 max-[450px]:col-span-0 rounded text-center items-center justify-center content-center flex flex-row hover:cursor-pointer hover:shadow-rounded hover:bg-green-500 hover:shadow-green-500 transition duration-300 ">
          <fa class="me-3" icon="fa-envelope" size="lg" style="color: white;" />
          <span class="text-white max-[450px]:text-sm font-mono">nikx448@gmail.com</span>
        </div>
        <div
          class="bg-green-800 p-3 col-span-2 max-[1024px]:col-span-2 max-[450px]:col-span-0 rounded text-center items-center justify-center content-center flex flex-row hover:cursor-pointer hover:shadow-rounded hover:bg-green-500 hover:shadow-green-500 transition duration-300 ">
          <fa class="me-3" icon="fa-phone" size="lg" style="color: white;" />
          <span class="text-white max-[450px]:text-sm font-mono">+62 85x-xxxx-xx23</span>
        </div>
        <div
          class="bg-green-800 p-3 col-start-2 col-span-2 max-[1024px]:col-span-2 max-[450px]:col-span-0rounded text-center items-center justify-center content-center flex flex-row hover:cursor-pointer hover:shadow-rounded hover:bg-green-500 hover:shadow-green-500 transition duration-300 ">
          <fa class="me-3" icon="fa-map-location-dot" size="lg" style="color: white;" />
          <span class="text-white max-[450px]:text-sm font-mono">Jakarta, Indonesia</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
