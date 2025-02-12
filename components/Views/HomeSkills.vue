<template>
  <div class="wrap">
    <div class="anchor" id="skills"></div>
    <img class="bg" src="/public/assets/img/bg-waves-banner.png" alt="" />
    <div class="container">
      <div class="header">
        <SectionTitle
          :title="`Mastered Skills`"
          :number="`02`"
          class="white_num"
        />
        <p class="subtitle">Skills that I mastered!</p>
      </div>

      <div class="aoser" data-aos="fade-up">
        <Swiper :skills="skills" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  skills: {
    type: Array,
    required: true,
  },
});

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
.anchor {
  transform: translateY(-120px);
}
.white_num {
  width: 50%;
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
  pointer-events: none;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 32px 0;
  }
  .subtitle {
    display: none;
  }
  .white_num {
    width: 100%;
  }
}
</style>
