<template>
  <div class="site">
    <TheHeader />
    <main>
      <HomeHero />
      <HomeAbout />
    </main>
  </div>
</template>

<script setup>
import HomeAbout from "~/components/Views/HomeAbout.vue";
import HomeHero from "~/components/Views/HomeHero.vue";
</script>
