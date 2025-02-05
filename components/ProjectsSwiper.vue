<template>
  <div class="comp" data-aos="fade-up">
    <img class="bg" src="/public/assets/img/bg-waves-banner.png" alt="" />
    <div class="projectsSwiper">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="cont">
            <div class="left" data-swiper-parallax="-200">
              <p class="sup">
                {{ project.sup }}
              </p>
              <h4 class="title">
                {{ project.title }}
              </h4>
              <p class="desc">
                {{ project.desc }}
              </p>
              <a
                :href="project.link"
                target="_blank"
                rel="nofollow"
                class="link"
              >
                <p>
                  {{ project.link }}
                </p>
              </a>
            </div>
          </div>
          <div class="right">
            <img :src="project.image" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="progress-bar">
        <div class="progress"></div>
      </div>
    </div>
    <div class="projectsPagination"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import { Autoplay, Pagination, Parallax } from "swiper/modules";

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
});

const swiperInstance = ref(null);

onMounted(() => {
  swiperInstance.value = new Swiper(".projectsSwiper", {
    modules: [Autoplay, Pagination, Parallax],
    slidesPerView: 1,
    loop: true,
    parallax: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: ".projectsPagination",
      clickable: true,
    },
    on: {
      slideChange: () => {
        startProgressBar();
      },
      init: () => {
        startProgressBar();
      },
    },
  });
});

function startProgressBar() {
  const progressBar = document.querySelector(".progress");
  progressBar.style.transition = "none";
  progressBar.style.width = "0%";

  void progressBar.offsetWidth;

  progressBar.style.transition = "width 5s linear";
  progressBar.style.width = "100%";
}
</script>

<style scoped>
.projectsSwiper {
  margin-bottom: -10px;
}
.progress-bar {
  width: 560px !important;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 10;
  transform: translateY(-72px);
  position: relative;
}
.progress {
  width: 0%;
  height: 100%;
  background-color: var(--blue); /* Progress bar color */
}
.comp {
  position: relative;
  overflow: hidden;
  background: var(--border);
}
.cont {
  max-width: 1180px;
  min-width: 1180px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.swiper-slide {
  height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
}
.right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-90px, -50%);
  height: 100%;
  z-index: 1;
  width: 52%;
  overflow: hidden;
}
.right::after {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  content: "";
}
.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.4);
  transition: 3s;
}
.swiper-slide-active .right img {
  transform: scale(1);
}
.sup {
  position: relative;
  display: block;
  margin: 0 0 12px;
  padding: 0 0 0 32px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
.sup::after {
  position: absolute;
  display: block;
  margin: -1.5px 0 0;
  width: 25px;
  height: 3px;
  top: 50%;
  left: 0;
  background: var(--blue);
  content: "";
}
.title {
  display: block;
  margin: 0 0 20px;
  font-size: 72px;
  line-height: 100%;
  font-weight: 700;
  color: var(--blue);
  max-width: 640px;
}
.desc {
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 32px;
  max-width: 420px;
}
.link {
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
.link p {
  color: #fff;
  font: 14px "Montserrat", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  position: relative;
  z-index: 2;
  transition: 0.3s;
}
.link::after {
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
.link:hover::after {
  transform: translateX(0);
}
.link:hover p {
  color: var(--blue);
}
.bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.2;
}
.projectsPagination {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 64px;
  width: 12px;
  left: auto;
  right: 1.5%;
  align-items: flex-end;
}
.projectsPagination :deep(.swiper-pagination-bullet) {
  width: 12px;
  border-radius: 0;
  height: 3px;
}
.projectsPagination :deep(.swiper-pagination-bullet-active) {
  background: var(--blue);
  width: 20px;
}
@media screen and (max-width: 1024px) {
  .swiper-slide {
    height: auto;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .cont {
    max-width: 100%;
    min-width: initial;
  }
  .right {
    position: static;
    transform: translate(0);
    width: 100%;
    height: 260px;
  }
  .left {
    padding: 24px 12px;
  }
  .title {
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .sup {
    font-size: 12px;
    margin-bottom: 8px;
  }
  .desc {
    margin-bottom: 16px;
  }
  .link {
    padding: 12px 24px;
  }
  .link p {
    font-size: 12px;
  }
  .progress-bar {
    display: none;
  }
  .projectsPagination {
    display: none;
  }
}
</style>
