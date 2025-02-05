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
      <div class="right">
        <div class="links">
          <button @click="scrollElement('about')" class="link">About</button>
          <button @click="scrollElement('skills')" class="link">Skills</button>
          <button @click="scrollElement('directions')" class="link">
            Directions
          </button>
          <button @click="scrollElement('projects')" class="link">
            Projects
          </button>
          <button @click="scrollElement('contact')" class="link">
            Contact
          </button>
        </div>

        <div class="lang">
          <button class="langer">
            Ru
            <Icon class="icon" icon="material-symbols:chevron-right-rounded" />
          </button>
          <div class="popup">
            <button class="l">
              Русский <Icon class="flag" icon="circle-flags:ru" />
            </button>
            <button class="l">
              English <Icon class="flag" icon="circle-flags:en" />
            </button>
            <button class="l">
              O'zbekcha <Icon class="flag" icon="circle-flags:uz" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

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
.l svg {
  width: 20px;
  height: 20px;
  border: 1px solid var(--border);
  border-radius: 50%;
}
@media screen and (max-width: 1024px) {
}
</style>
