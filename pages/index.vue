<script lang="ts" setup>
useSeoMeta({
  title: 'NIKO PRAYOGA WIRATAMA - Portofolio',
  description: 'NIKO PRAYOGA WIRATAMA - Portofolio Website. Personal website and portfolio about NIKO PRAYOGA WIRATAMA, a software engineer based in Jakarta, Indonesia.'
})
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    }
  },
})
</script>

<template>
  <Home :scrollToAnchor="scrollToAnchor" />
  <AboutMe />
  <Skill />
  <Education />
  <Project />
  <Experience />
  <Contact />
</template>

<style scoped></style>
