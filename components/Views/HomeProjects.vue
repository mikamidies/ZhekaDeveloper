<template>
  <div class="wrap">
    <div class="anchor" id="projects"></div>
    <div class="container">
      <div class="left">
        <SectionTitle :title="t('main.projects')" :number="`04`" />
      </div>

      <button @click="scrollElement('contact')" class="about">
        <p>{{ t("main.contact") }}</p>
      </button>
    </div>
    <div class="slider">
      <ProjectsSwiper :projects="projects" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useTranslationsStore } from "~/stores/translations";
const translationsStore = useTranslationsStore();
const { t } = translationsStore;

function scrollHeader() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY >= 50) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
}

onMounted(() => {
  window.addEventListener("scroll", scrollHeader);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHeader);
});

const menuHandle = ref(false);

const scrollElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  menuHandle.value = false;
};

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.wrap {
  background: white;
}
.anchor {
  transform: translateY(-140px);
}
.container {
  border-inline: 1px solid var(--border);
  position: relative;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container::after {
  position: absolute;
  display: block;
  width: 33.33%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 0.5px solid var(--border);
  border-right: 0.5px solid var(--border);
  content: "";
  z-index: -1;
}
.left {
  width: 50%;
}
.about {
  position: relative;
  margin: 0;
  padding: 14px 48px;
  border: 0;
  background: var(--blue);
  border-radius: 0;
  transition: all 0.4s linear;
  overflow: hidden;
  border: 2px solid var(--blue);
}
.about p {
  color: #fff;
  font: 14px "Montserrat", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  position: relative;
  z-index: 2;
  transition: 0.3s;
}
.about::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1;
  transition: 0.4s;
  transform: translateX(-102%);
}
.about:hover::after {
  transform: translateX(0);
}
.about:hover p {
  color: var(--blue);
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 32px 0;
  }
  .about {
    display: none;
  }
  .left {
    width: 100%;
  }
}
</style>
