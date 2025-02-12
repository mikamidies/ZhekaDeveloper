<template>
  <div class="site">
    <TheHeader />
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeSkills :skills="skills" />
      <HomeDirections :directions="directions" />
      <HomeProjects :projects="projects" />
      <HomeAdvantages />
      <HomeForm />
      <HomePartners :partners="partners" />
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
import { ref, onMounted } from "vue";

const directions = ref([]);
const skills = ref([]);
const partners = ref([]);
const projects = ref([]);

const fetchItems = async () => {
  try {
    const directionsData = await useNuxtApp().$axios.get("/reasons");
    directions.value = directionsData.data.results;

    const skillsData = await useNuxtApp().$axios.get("/workers");
    skills.value = skillsData.data.results;

    const partnersData = await useNuxtApp().$axios.get("/reviews");
    partners.value = partnersData.data.results;

    const projectsData = await useNuxtApp().$axios.get("/tarifs");
    projects.value = projectsData.data.results;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

onMounted(() => {
  fetchItems();
});
</script>
