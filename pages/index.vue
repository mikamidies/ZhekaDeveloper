<template>
  <div class="site">
    <transition name="fade" mode="out-in">
      <Spinner v-if="!isReady || isLoading" />
    </transition>

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
import { ref, computed, onMounted } from "vue";
import { useTranslationsStore } from "~/stores/translations";
import { storeToRefs } from "pinia";
import Spinner from "~/components/Spinner.vue";

const translationsStore = useTranslationsStore();
const { isLoading, currentLang } = storeToRefs(translationsStore);
const isReady = ref(false);

const t = (key) => {
  return translationsStore.t(key);
};

const initialize = async () => {
  if (process.client) {
    translationsStore.hydrate();
  }
  await translationsStore.fetchTranslations(
    translationsStore.currentLang || "en"
  );
  isReady.value = true;
};

initialize();

const changeLanguage = async (lang) => {
  isReady.value = false;
  await translationsStore.setLanguage(lang);
  isReady.value = true;
};

onMounted(async () => {
  fetchItems();
});

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

    const projectsData = await useNuxtApp().$axios.get("/projects");
    projects.value = projectsData.data.results;
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
