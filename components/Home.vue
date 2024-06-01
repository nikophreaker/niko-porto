<script lang="ts" setup>
import type { Container } from '@tsparticles/engine'
const urlParticleOptions = useRequestURL() + 'options_particles.json'

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}

const showMe = useState('showMe', () => this == null ? false : !this);

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
    setTimeout(typingWriter, 50);
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
    setTimeout(typingWriter, 1500);
  }
}


defineProps({
  scrollToAnchor: {
    type: Function,
  }
});

onMounted(() => {
  typingWriter();
  if (window.scrollY == 0) {
    showMe.value = true;
  }
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 0 && window.scrollY <= 600) {
      showMe.value = true;
    }
    if (window.scrollY >= 700) {
      showMe.value = false;
    }
  });
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
  <div class="bg-primary" id="home">
    <Header :scrollToAnchor="scrollToAnchor" />
    <div class="absolute flex flex-col justify-center bg-transparent w-full h-screen">
      <div class="self-center font-mono z-10 max-[1024px]:text-center">
        <div class="transition ease-in-out flex flex-col text-5xl max-[450px]:text-lg max-[1024px]:text-2xl"
          :class="showMe ? 'translate-x-[22rem] max-[1024px]:translate-y-[18vh] max-[1024px]:-translate-x-[0rem] max-[450px]:translate-y-[22vh] max-[450px]:-translate-x-[0rem] opacity-100' : 'opacity-0'">
          <span class="text-white z-10">I'm Niko, a</span>
          <div class="max-[1024px]:-ms-[60%] max-[450px]:-ms-[50%]">
            <span
              class="absolute animate-blink overflow-hidden whitespace-nowrap border-r-4 border-r-green-500 text-green-500 z-10">
              {{ myRole }}
            </span>
          </div>
          <div class="mt-12">
            <a class="bg-black hover:bg-green-500 text-white rounded-full py-3 px-5 text-[17px] me-5 max-[1024px]:me-0 hover:cursor-pointer [&>*]:hover:animate-bounce hover:shadow-rounded hover:shadow-green-500"
              @click="scrollToAnchor?.('about')">
              <span>About Me</span>
              <fa-layers class="ms-3 fa-1x">
                <fa icon="id-badge"></fa>
              </fa-layers>
            </a>
            <a class="bg-green-700 hover:bg-green-500 text-white rounded-full py-3 px-5 text-[17px] hover:cursor-pointer [&>*]:hover:animate-bounce hover:shadow-rounded hover:shadow-green-500"
              @click="scrollToAnchor?.('about')">
              <span>Reach Me</span>
              <fa-layers class="ms-3 fa-1x">
                <fa icon="hand-point-down"></fa>
              </fa-layers>
            </a>
          </div>
        </div>
      </div>
      <div class="absolute self-center socials">
        <ul class="social-icons bg-transparent w-auto">
          <li>
            <a class="absolute linkedin transition ease-in-out z-10 rounded-full bg-black hover:bg-green-500 hover:shadow-rounded hover:shadow-green-500"
              :class="showMe ? '-translate-x-[15rem] -translate-y-[10rem] max-[1024px]:-translate-x-[15rem] max-[1024px]:-translate-y-[5rem] max-[450px]:-translate-x-[10.5rem] max-[450px]:-translate-y-[2.5rem]' : 'opacity-0'"
              aria-label="LinkedIn" href="https://www.linkedin.com/in/niko-prayoga-wiratama-184b37133/" target="_blank">
              <fa-layers class="fa-4x">
                <fa :icon="['fab', 'linkedin']" transform="shrink-6" :style="{ color: 'white' }"
                  viewBox="0 0 512 512" />
              </fa-layers>
            </a>
          </li>
          <li><a
              class="absolute github transition ease-in-out z-10 rounded-full bg-black hover:bg-green-500 hover:shadow-rounded hover:shadow-green-500"
              :class="showMe ? '-translate-x-[16.8rem] -translate-y-[5rem] max-[1024px]:-translate-x-[12.5rem] max-[1024px]:-translate-y-[10rem] max-[450px]:-translate-x-[9rem] max-[450px]:-translate-y-[7.5rem]' : 'opacity-0'"
              aria-label="GitHub" href="https://github.com/nikophreaker" target="_blank">
              <fa-layers class="fa-4x">
                <fa :icon="['fab', 'github']" transform="shrink-6" :style="{ color: 'white' }" viewBox="0 0 512 512" />
              </fa-layers>
            </a>
          </li>
          <li><a
              class="absolute twitter transition ease-in-out z-10 rounded-full bg-black hover:bg-green-500 hover:shadow-rounded hover:shadow-green-500"
              :class="showMe ? '-translate-x-[17rem] translate-y-[0.2rem] max-[1024px]:-translate-x-[8.5rem] max-[1024px]:-translate-y-[14rem] max-[450px]:-translate-x-[5rem] max-[450px]:-translate-y-[11rem]' : 'opacity-0'"
              aria-label="Twitter" href="https://twitter.com/nikxpw" target="_blank">
              <fa-layers class="fa-4x">
                <fa :icon="['fab', 'twitter']" transform="shrink-6" :style="{ color: 'white' }" viewBox="0 0 512 512" />
              </fa-layers>
            </a>
          </li>
          <li><a
              class="absolute facebook transition ease-in-out z-10 rounded-full bg-black hover:bg-green-500 hover:shadow-rounded hover:shadow-green-500"
              :class="showMe ? '-translate-x-[15.5rem] translate-y-[5.3rem] max-[1024px]:translate-x-[3.5rem] max-[1024px]:-translate-y-[14rem] max-[450px]:translate-x-[1rem] max-[450px]:-translate-y-[11rem]' : 'opacity-0'"
              aria-label="Facebook" href="https://www.facebook.com/what.youyogafristone" target="_blank">
              <fa-layers class="fa-4x">
                <fa :icon="['fab', 'facebook']" transform="shrink-6" :style="{ color: 'white' }"
                  viewBox="0 0 512 512" />
              </fa-layers>
            </a>
          </li>
          <li><a
              class="absolute instagram transition ease-in-out z-10 rounded-full bg-black hover:bg-green-500 hover:shadow-rounded hover:shadow-green-500"
              :class="showMe ? '-translate-x-[12.6rem] translate-y-[9.6rem] max-[1024px]:translate-x-[8.2rem] max-[1024px]:-translate-y-[10rem] max-[450px]:translate-x-[5rem] max-[450px]:-translate-y-[7.5rem]' : 'opacity-0'"
              aria-label="Instagram" href="https://www.instagram.com/nikxpw" target="_blank">
              <fa-layers class="fa-4x">
                <fa :icon="['fab', 'instagram']" transform="shrink-6" :style="{ color: 'white' }"
                  viewBox="0 0 512 512" />
              </fa-layers>
            </a>
          </li>
          <li><a
              class="absolute medium transition ease-in-out z-10 rounded-full bg-black hover:bg-green-500 hover:shadow-rounded hover:shadow-green-500"
              :class="showMe ? '-translate-x-[8.4rem] translate-y-[12.6rem] max-[1024px]:translate-x-[10.5rem] max-[1024px]:-translate-y-[5rem] max-[450px]:translate-x-[6.5rem] max-[450px]:-translate-y-[2.5rem]' : 'opacity-0'"
              aria-label="Medium" href="https://medium.com/@nikx449" target="_blank">
              <fa-layers class="fa-4x">
                <fa :icon="['fab', 'medium']" transform="shrink-8" :style="{ color: 'white' }" viewBox="0 0 512 512" />
              </fa-layers>
            </a>
          </li>
        </ul>
      </div>
      <img
        class="absolute self-center z-30 w-96 max-[1024px]:w-80 max-[450px]:w-48 rounded-full shadow-rounded hover:shadow-rounded2 hover:shadow-green-500 hover:cursor-pointer select-none"
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
