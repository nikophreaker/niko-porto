<script lang="ts" setup></script>

<template>
  <div class="min-h-screen bg-white" id="about">
    <div class="text-center py-20 flex flex-col items-center">
      <fa icon="fa-user" size="3x" color="green" />
      <span class="text-3xl font-bold font-mono max-[450px]:text-2xl">About <a class="text-green-700">Me</a></span>
      <img src="~/assets/image/nikx.jpg"
        class="rounded-xl mx-auto d-block h-48 w-48 border shadow-lg shadow-gray-400 my-5">
      <p
        class="text-xl max-[640px]:text-md md:text-md sm:text-md mx-[20%] md:mx-[20%] sm:max-md:mx-[5%] max-[640px]:mx-[5%] font-medium font-mono text-start">
        Hi there 👋, I'm <a class="text-green-700">
          Niko
          Prayoga
          Wiratama </a>a software engineer based in Jakarta, Indonesia. I'm an Information Technology undergraduate from
        <a class="text-green-700" href="https://unindra.ac.id/" target="_blank">UNINDRA</a>. Currently work for mobile &
        web development,
        and sometimes build game using phaser HTML5 game framework. Beside my programming experience, i can oprate
        photoshop, figma, ai and xd. I have experience with deploy mobile app to PlayStore & AppStore and for web server
        in ECS Alibaba Cloud, Hostinger, Plesk, etc.
        Always practice and produce several projects which I saved on github.
      </p>
      <a class="w-56 mt-9 bg-black hover:bg-green-500 text-white rounded-full py-3 px-5 text-[17px] ms-5 max-[1024px]:ms-0 hover:cursor-pointer [&>*]:hover:animate-bounce hover:shadow-rounded hover:shadow-green-500"
        href="https://drive.google.com/file/d/1HcG801wLwRdcFRxED8mTM6F17slQ0bV_/view" target="_blank">
        <span>Download Resume</span>
        <fa-layers class="ms-3 fa-1x">
          <fa icon="fa-square-caret-down"></fa>
        </fa-layers>
      </a>
    </div>
  </div>
</template>

<style scoped></style>
