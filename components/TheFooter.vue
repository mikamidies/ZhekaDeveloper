<template>
  <div class="wrap">
    <img src="/assets/img/bg-waves-banner.png" alt="" class="back" />
    <div class="container">
      <div class="grid">
        <div class="item">
          <h4 class="title">About me</h4>
          <p class="sub">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quia
            quasi iusto. Molestiae a temporibus aut impedit nostrum repudiandae
            tempore.
          </p>
          <div class="socials">
            <a href="#" class="soc">
              <Icon icon="simple-icons:instagram" />
            </a>
            <a href="#" class="soc">
              <Icon icon="simple-icons:telegram" />
            </a>
            <a href="#" class="soc">
              <Icon icon="simple-icons:github" />
            </a>
            <a href="#" class="soc">
              <Icon icon="simple-icons:linkedin" />
            </a>
          </div>
        </div>
        <div class="item">
          <h4 class="title">Menu</h4>
          <div class="links">
            <button @click="scrollElement('about')" class="link">
              <Icon icon="ic:round-chevron-right" />
              About me
            </button>
            <button @click="scrollElement('skills')" class="link">
              <Icon icon="ic:round-chevron-right" />
              Mastered skills
            </button>
            <button @click="scrollElement('directions')" class="link">
              <Icon icon="ic:round-chevron-right" />
              Directions of work
            </button>
            <button @click="scrollElement('projects')" class="link">
              <Icon icon="ic:round-chevron-right" />
              My Projects
            </button>
            <button @click="scrollElement('contact')" class="link">
              <Icon icon="ic:round-chevron-right" />
              Contact me
            </button>
          </div>
        </div>
        <div class="item">
          <h4 class="title">Contacts</h4>
          <div class="contacts">
            <div class="con">
              <Icon icon="material-symbols:home-outline-rounded" />
              Tashkent, Uzbekistan
            </div>
            <div class="con">
              <Icon icon="material-symbols:mail-outline" />
              info@zhekadeveloper.com
            </div>
            <div class="con">
              <Icon icon="material-symbols:phone-in-talk-outline" />
              +998 90 140 00 00
            </div>
            <div class="con">
              <Icon
                icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
              />
              24 / 7
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <p class="info">ZhekaDeveloper @ 2025 All rights reserved</p>
        <a href="#" target="_blank" class="info"
          >Terms of Personal data usage</a
        >
      </div>
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
</script>

<style scoped>
.wrap {
  background: rgba(0, 0, 0, 0.4);
  position: relative;
}
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  z-index: 1;
  pointer-events: none;
}
.grid {
  padding: 80px 0;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.title {
  position: relative;
  display: block;
  margin: 0 0 20px;
  padding: 0 0 12px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.4px;
}
.title::before {
  position: absolute;
  display: block;
  width: 30px;
  height: 2px;
  left: 0;
  bottom: 0;
  background: var(--blue);
  content: "";
}
.title::after {
  position: absolute;
  display: block;
  height: 1px;
  left: 40px;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  content: "";
}
.sub {
  margin: 0 0 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: normal;
  max-width: 90%;
}
.socials {
  display: flex;
  align-items: center;
  gap: 8px;
}
.soc {
  background: var(--border);
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.soc svg {
  width: 20px;
  height: 20px;
}
.soc :deep(path) {
  fill: var(--blue);
}
.links,
.contacts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}
.link svg {
  width: 16px;
  height: 16px;
}
.link {
  font-size: 16px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 8px;
}
.con svg {
  width: 20px;
  height: 20px;
}
.con {
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.con :deep(path) {
  fill: var(--blue);
}
.bottom {
  padding: 16px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  z-index: 9;
  position: relative;
  z-index: 2;
}
.bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info {
  font-size: 16px;
  color: var(--black);
  opacity: 0.6;
}
@media screen and (max-width: 1024px) {
  .wrap {
    background: rgba(0, 0, 0, 0.25);
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    padding: 32px 0;
  }
  .soc {
    background: transparent;
    border: 1px solid var(--border);
  }
  .bottom .container {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .info {
    font-size: 12px;
  }
}
</style>
