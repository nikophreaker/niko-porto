<script lang="ts" setup>
import type { Container } from '@tsparticles/engine'
const urlParticleOptions = useRequestURL() + 'options_particles.json'

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
const me = useState('me', () => this == null ? true : !this);
// const onClickMe = () => { me = false }
// defineProps({ onClickMe })
</script>

<template>
  <div class="bg-primary">
    <Header />
    <div class="absolute flex flex-col items-center justify-center bg-transparent w-full h-screen">
      <img
        class="w-60 md:w-96 rounded-full shadow-md shadow-green-400 hover:shadow-xl hover:shadow-green-500 hover:cursor-pointer"
        src="~/assets/image/nikx.jpg" />
      <div>
        <h2 class="text-white" :hidden="me">Niko Prayoga Wiratama</h2>
      </div>
    </div>
    <NuxtParticles id="tsparticles" :url=urlParticleOptions @load="onLoad" class="w-full h-screen">
    </NuxtParticles>
  </div>
  <!-- <div class="image"
    style="visibility: visible;opacity: 1;transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transition: all 0.2s linear 0s, opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
    <img draggable="false" class="tilt" src="~/assets/image/nikx.jpg" alt=""
      style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
  </div> -->
</template>

<style scoped></style>
