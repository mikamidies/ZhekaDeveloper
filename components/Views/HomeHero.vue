<template>
  <div class="wrap" id="hero">
    <video
      src="/public/assets/video/video.mp4"
      autoplay
      loop
      playsinline
      muted
      class="video"
    ></video>
    <div class="container">
      <h4 class="title">Independent <span>Frontend</span> Developer</h4>
      <button class="about">About me</button>
    </div>
    <button @click="scrollElement('about')" class="down">
      <img src="/public/assets/img/to-bottom.png" alt="" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.wrap::after {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  z-index: 1;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  position: relative;
  z-index: 3;
}
.title {
  color: white;
  display: block;
  font-size: 70px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
}
.title span {
  color: var(--blue);
}
.about {
  position: relative;
  margin: 0;
  padding: 16px 48px;
  color: #fff;
  font: 14px "Montserrat", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border: 0;
  background: var(--blue);
  border-radius: 0;
  transition: all 0.4s linear;
}
.down {
  position: absolute;
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0px;
  animation: jump 1.4s infinite;
}
@keyframes jump {
  0% {
    bottom: 56px;
  }
  50% {
    bottom: 48px;
  }
  100% {
    bottom: 56px;
  }
}
</style>
