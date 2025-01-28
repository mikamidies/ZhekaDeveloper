<template>
  <div class="wrap">
    <img class="bg" src="/public/assets/img/bg-waves-banner.png" alt="" />
    <div class="container">
      <SectionTitle class="white_num" />
      <Swiper :slides="slides" />
    </div>
  </div>
</template>

<script setup>
const slides = [
  {
    sup: "Frontend",
    title: "Vue/NuxtJs",
    image: "/assets/img/skill-1.png",
  },
  {
    sup: "Backend",
    title: "Python/Jango",
    image: "/assets/img/skill-2.png",
  },
  {
    sup: "Game Dev",
    title: "Unity 3D",
    image: "/assets/img/skill-3.png",
  },
  {
    sup: "Web Design",
    title: "Figma",
    image: "/assets/img/skill-4.png",
  },
  {
    sup: "Graphic design",
    title: "Canva Pro",
    image: "/assets/img/skill-5.png",
  },
];
</script>

<style scoped>
.wrap {
  background: var(--border);
  padding: 72px 0;
  position: relative;
}
.white_num :deep(.num) {
  color: white;
}
.bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.2;
}
</style>
