<script lang="ts" setup>
import type { Container } from '@tsparticles/engine'
const urlParticleOptions = useRequestURL() + 'options_particles.json'

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
const showMe = useState('showMe', () => this == null ? true : !this);
function toggleShow(ev: Event) { showMe.value = !showMe.value; }
// const myRole = ["Mobile Developer", "Web Developer", "Game Developer"];
// const myRoleFinal = useState('myRoleFinal', () => '');
// const i = useState('myRole', () => 0);

const myRole = useState('typingText', () => '');
const typingWords = ["Mobile Developer", "Web Developer", "Game Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingWriter = () => {
  const currentWord = typingWords[wordIndex];

  if (isDeleting && charIndex > 0) {
    myRole.value = currentWord.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typingWriter, 100);
  } else if (!isDeleting && charIndex < currentWord.length) {
    myRole.value = currentWord.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typingWriter, 100);
  } else {
    isDeleting = !isDeleting

    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % typingWords.length;
      charIndex = 0;
    }
    setTimeout(typingWriter, 2000);
  }
}

typingWriter()
// setTimeout(() => { i.value++ }, 9000);
onMounted(() => {
  // setInterval(() => { i.value == (myRole.length - 1) ? i.value = 0 : i.value++ }, 6000); console
  //   .log(i.value)
  // setInterval(() => { myRoleFinal.value = myRole[i.value].substring(0, 2) }, 1000);
});

onUpdated(() => {
});
// const onClickMe = () => { me = false }
// defineProps({ onClickMe })
</script>

<template>
  <div class="bg-primary">
    <Header />
    <div class="absolute flex flex-col justify-center bg-transparent w-full h-screen">
      <div class="ms-[50%] self-start font-mono">
        <div class="-mt-12 transition ease-in-out flex flex-col"
          :class="showMe ? 'translate-x-[13rem] text-5xl opacity-100' : 'opacity-0'">
          <span class="text-white z-10" :hidden="false">I'm Niko, a</span>
          <span
            class="absolute mt-12 animate-blink overflow-hidden whitespace-nowrap border-r-4 border-r-green-500 text-green-500 z-10"
            :hidden="false">{{ myRole }}</span>
        </div>
        <!-- <div class="transition ease-in-out" :class="showMe ? 'translate-x-96 text-5xl opacity-100' : 'opacity-0'">
          <a class="text-white z-10" :hidden="false">Mobile Developer</a>
        </div>
        <div class="transition ease-in-out" :class="showMe ? 'translate-x-96 text-5xl opacity-100' : 'opacity-0'">
          <a class="text-white z-10" :hidden="false">Mobile Developer</a>
        </div> -->
      </div>
      <img
        class="absolute self-center z-30 w-60 md:w-96 rounded-full shadow-md shadow-green-400 hover:shadow-xl hover:shadow-green-500 hover:cursor-pointer"
        src="~/assets/image/nikx.jpg" @click="toggleShow" draggable="false" />
    </div>
    <NuxtParticles id="tsparticles" :url=urlParticleOptions @load="onLoad" class="w-full relative h-screen">
    </NuxtParticles>
  </div>
  <!-- <div class="image"
    style="visibility: visible;opacity: 1;transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);transition: all 0.2s linear 0s, opacity 1s cubic-bezier(0.5, 0, 0, 1) 0.4s, transform 1s cubic-bezier(0.5, 0, 0, 1) 0.4s;">
    <img draggable="false" class="tilt" src="~/assets/image/nikx.jpg" alt=""
      style="will-change: transform; transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
  </div> -->
</template>

<style scoped></style>
