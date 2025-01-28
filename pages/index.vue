<template>
  <div class="site">
    <TheHeader />
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeSkills />
      <HomeDirections />
    </main>
  </div>
</template>

<script setup>
import HomeAbout from "~/components/Views/HomeAbout.vue";
import HomeDirections from "~/components/Views/HomeDirections.vue";
import HomeHero from "~/components/Views/HomeHero.vue";
import HomeSkills from "~/components/Views/HomeSkills.vue";
</script>
