<template>
  <div class="wrap" id="navbar">
    <img src="/public/assets/img/header-bg.png" alt="" class="back" />
    <div class="container">
      <div class="left">
        <button @click="scrollElement('hero')" class="brand">
          <img src="/assets/img/brand.png" class="original" alt="" />
          <img src="/assets/img/brand-white.png" class="white" alt="" />
        </button>
      </div>
      <div class="burger" @click="menuHandle = !menuHandle">
        <div class="stick"></div>
      </div>
      <div class="right" :class="{ active: menuHandle }">
        <div class="mobile_brand">
          <img src="/assets/img/brand.png" class="mobile_original" alt="" />

          <div class="x" @click="menuHandle = false">
            <div class="x_stick"></div>
          </div>
        </div>

        <div class="links">
          <button @click="scrollElement('about')" class="link">
            {{ t("main.about") }}
          </button>
          <button @click="scrollElement('skills')" class="link">
            {{ t("main.skills") }}
          </button>
          <button @click="scrollElement('directions')" class="link">
            {{ t("main.directions") }}
          </button>
          <button @click="scrollElement('projects')" class="link">
            {{ t("main.projects") }}
          </button>
          <button @click="scrollElement('contact')" class="link">
            {{ t("main.contact") }}
          </button>
        </div>

        <div v-if="isReady" class="lang">
          <button class="langer">
            {{ currentLang }}
            <Icon class="icon" icon="material-symbols:chevron-right-rounded" />
          </button>
          <div class="popup">
            <button
              class="l"
              v-for="lang in languages"
              :key="lang.code"
              @click="changeLanguage(lang.code)"
              :class="{ active: lang.code === currentLang }"
              :disabled="isLoading"
            >
              {{ lang.name }} <Icon :icon="lang.icon" />
            </button>
          </div>
        </div>

        <div v-if="isReady" class="mobile_lang">
          <button
            @click="changeLanguage('ru'), (menuHandle = false)"
            class="mobile_l"
            :class="{ active: currentLang == 'ru' }"
          >
            Русский
          </button>
          <button
            @click="changeLanguage('en'), (menuHandle = false)"
            class="mobile_l"
            :class="{ active: currentLang == 'en' }"
          >
            English
          </button>
          <button
            @click="changeLanguage('uz'), (menuHandle = false)"
            class="mobile_l"
            :class="{ active: currentLang == 'uz' }"
          >
            O'zbekcha
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useTranslationsStore } from "~/stores/translations";
import { storeToRefs } from "pinia";

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

const translationsStore = useTranslationsStore();
const { isLoading } = storeToRefs(translationsStore);
const { t } = translationsStore;
const currentLang = computed(() => translationsStore.currentLang);
const isReady = ref(false);

onMounted(async () => {
  await translationsStore.hydrate();
  isReady.value = true;
});

const languages = [
  { code: "en", name: "English", icon: "circle-flags:gb" },
  { code: "ru", name: "Russian", icon: "circle-flags:ru" },
  { code: "uz", name: "Uzbek", icon: "circle-flags:uz" },
];

const changeLanguage = async (lang) => {
  await translationsStore.setLanguage(lang);
};
</script>

<style scoped>
.wrap {
  padding: 24px 0;
  position: fixed;
  width: 100%;
  z-index: 99;
  transition: 0.4s;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
  object-fit: cover;
  display: none;
}
.scroll {
  background: white;
  border-bottom: 1px solid var(--border);
  padding: 10px 0;
}
.scroll .link,
.scroll .langer {
  color: var(--black);
}
.scroll .back {
  opacity: 1;
  visibility: visible;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90%;
  position: relative;
  z-index: 2;
}
.brand img {
  width: 160px;
  height: auto;
  object-fit: contain;
}
.original {
  display: none;
}
.scroll .original {
  display: flex;
}
.scroll .white {
  display: none;
}
.links {
  display: flex;
  align-items: center;
  gap: 32px;
}
.link,
.langer {
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 18px;
  letter-spacing: 0.8px;
  list-style-type: none;
  color: white;
}
.right {
  display: flex;
  align-items: center;
  gap: 64px;
}
.lang {
  position: relative;
  padding: 12px;
  cursor: pointer;
}
.langer {
  display: flex;
  align-items: center;
}
.icon {
  transform: rotate(90deg);
}
.popup {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  padding: 12px;
  -webkit-box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.1);
  -moz-box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.1);
  box-shadow: 0px 1px 8px 0px rgba(34, 60, 80, 0.1);
  border: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  width: 140px;
  transform: translateY(-100px);
  opacity: 0;
  visibility: hidden;
  transition: 0.4s;
  pointer-events: none;
}
.lang:hover .popup {
  pointer-events: initial;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.l {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  width: 100%;
}
.l.active {
  color: var(--blue);
}
.l svg {
  width: 20px;
  height: 20px;
  border: 1px solid var(--border);
  border-radius: 50%;
}
.mobile_l,
.mobile_brand,
.burger {
  display: none;
}
@media screen and (max-width: 1024px) {
  .mobile_l,
  .mobile_brand {
    display: flex;
  }
  .container {
    max-width: 100%;
    padding: 0 24px;
  }
  .brand {
    width: 120px;
  }
  .right {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 9;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px 24px;
    gap: 32px;
    transition: 0.4s;
    transform: translateX(-100%);
  }
  .right.active {
    transform: translateX(0);
  }
  .links {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 0;
  }
  .link {
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
    color: var(--black);
    text-align: start;
  }
  .lang {
    display: none;
  }
  .mobile_original {
    width: 120px;
  }
  .mobile_lang {
    width: 100%;
    background: var(--border);
    padding: 12px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .mobile_l {
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 0;
    border-radius: 4px;
  }
  .mobile_l.active {
    background: white;
    color: var(--blue);
    font-weight: 500;
  }
  .burger {
    display: flex;
  }
  .stick {
    width: 32px;
    height: 2px;
    background: white;
    position: relative;
  }
  .stick::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 24px;
    height: 2px;
    background: white;
  }
  .stick::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 28px;
    height: 2px;
    background: white;
  }
  .scroll .stick,
  .scroll .stick::after,
  .scroll .stick::before {
    background: var(--black);
  }
  .mobile_brand {
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
  .x_stick {
    width: 30px;
    height: 2px;
    background: var(--black);
    transform: rotate(45deg);
  }
  .x_stick::after {
    width: 30px;
    height: 2px;
    background: var(--black);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(90deg);
  }
  .scroll {
    padding: 16px 0;
  }
  .left {
    display: flex;
    align-items: center;
  }
}
</style>
