<template>
  <div class="wrap" id="navbar">
    <img src="/public/assets/img/header-bg.png" alt="" class="back" />
    <div class="container">
      <div class="left">
        <button class="brand">Logo</button>
      </div>
      <div class="right">
        <div class="links">
          <button class="link">About</button>
          <button class="link">Skills</button>
          <button class="link">Advantages</button>
          <button class="link">Directions</button>
          <button class="link">Projects</button>
          <button class="link">Contacts</button>
        </div>

        <div class="lang">
          <button class="langer">
            Ru
            <Icon class="icon" icon="material-symbols:chevron-right-rounded" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

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
.brand {
  font-size: 48px;
  font-weight: 700;
  color: var(--blue);
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
.langer {
  display: flex;
  align-items: center;
}
.icon {
  transform: rotate(90deg);
}
</style>
