<template>
  <div class="site">
    <TheHeader />
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeSkills />
      <HomeDirections />
      <HomeProjects />
      <HomeAdvantages />
      <HomeForm />
      <HomePartners />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import HomeAbout from "~/components/Views/HomeAbout.vue";
import HomeDirections from "~/components/Views/HomeDirections.vue";
import HomeHero from "~/components/Views/HomeHero.vue";
import HomeSkills from "~/components/Views/HomeSkills.vue";
import HomeProjects from "~/components/Views/HomeProjects.vue";
import HomeAdvantages from "~/components/Views/HomeAdvantages.vue";
import HomeForm from "~/components/Views/HomeForm.vue";
import HomePartners from "~/components/Views/HomePartners.vue";
</script>
