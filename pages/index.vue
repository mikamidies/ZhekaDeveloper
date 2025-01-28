<template>
  <div class="site">
    <TheHeader />
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeSkills />
    </main>
  </div>
</template>

<script setup>
import HomeAbout from "~/components/Views/HomeAbout.vue";
import HomeHero from "~/components/Views/HomeHero.vue";
import HomeSkills from "~/components/Views/HomeSkills.vue";
</script>
