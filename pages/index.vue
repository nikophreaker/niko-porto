<script lang="ts" setup>
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
</template>

<style scoped></style>
