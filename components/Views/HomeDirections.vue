<template>
  <div class="wrap">
    <div class="anchor" id="directions"></div>
    <div class="container">
      <div class="left">
        <SectionTitle :title="`Directions of work`" :number="`03`" />
      </div>

      <button @click="scrollElement('contact')" class="about">
        <p>Contact me!</p>
      </button>
    </div>
    <div class="items" data-aos="fade-up">
      <div class="item">
        <img src="/public/assets/img/serv-1.jpg" alt="" class="pic" />
        <div class="content">
          <p class="sup">Solutions</p>
          <h4 class="title">Frontend</h4>
        </div>
      </div>
      <div class="item">
        <img src="/public/assets/img/serv-2.jpg" alt="" class="pic" />
        <div class="content">
          <p class="sup">Solutions</p>
          <h4 class="title">Backend</h4>
        </div>
      </div>
      <div class="item">
        <img src="/public/assets/img/serv-3.jpg" alt="" class="pic" />
        <div class="content">
          <p class="sup">Solutions</p>
          <h4 class="title">Game Dev</h4>
        </div>
      </div>
      <div class="item">
        <img src="/public/assets/img/serv-4.jpg" alt="" class="pic" />
        <div class="content">
          <p class="sup">Solutions</p>
          <h4 class="title">Graphic design</h4>
        </div>
      </div>
    </div>
    <div class="container" style="padding-bottom: 28px"></div>
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
  background: white;
}
.anchor {
  transform: translateY(-100px);
}
.container {
  border-inline: 1px solid var(--border);
  padding: 72px 0;
  position: relative;
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
.items {
  display: flex;
}
.item {
  width: 25%;
  height: 640px;
  overflow: hidden;
  position: relative;
  transition: 0.7s;
}
.item::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  transition: 0.4s;
}
.pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
  transition: 0.5s;
}
.content {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;
  transition: 0.4s;
  padding: 32px;
}
.title {
  display: block;
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 36px;
  transition: 0.3s;
}
.sup {
  position: relative;
  display: block;
  margin: 0 0 12px;
  padding: 0 0 0 60px;
  color: var(--blue);
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: none;
}
.sup::after {
  position: absolute;
  display: block;
  width: 45px;
  height: 1px;
  top: 8px;
  left: 0;
  background: var(--blue);
  content: "";
}
.item:hover {
  width: 33%;
}
.item:hover::after {
  opacity: 0.4;
}
.item:hover .pic {
  transform: scale(1.15);
}
.item:hover .content {
  bottom: 32px;
  left: 44px;
}
.item:hover .title {
  font-size: 44px;
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
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left {
  width: 50%;
}
</style>
