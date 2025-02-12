<template>
  <div class="comp">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in skills" :key="index">
          <div class="left">
            <p class="sup">
              <Icon icon="ic:baseline-settings" />
              {{ slide.text }}
            </p>
            <h3 class="title">{{ slide.title }}</h3>
          </div>
          <div class="right">
            <img class="img" :src="slide.image" :alt="slide.title" />
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

const props = defineProps({
  skills: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  new Swiper(".swiper", {
    modules: [Autoplay, Pagination],
    slidesPerView: 1.3,
    spaceBetween: 12,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
});
</script>

<style scoped>
.comp {
  position: relative;
  padding-bottom: 48px;
}
.swiper {
  width: 100%;
  margin-top: 56px;
  overflow-y: visible;
}

.swiper-slide {
  padding: 28px;
  background: white;
  height: 208px;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid var(--border);
}

.title {
  display: block;
  font: 22px "Montserrat", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 34px;
}

.sup {
  position: relative;
  display: block;
  margin: 0 0 12px;
  color: var(--blue);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.sup svg {
  width: 24px;
  height: 24px;
}
.img {
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  width: 128px;
  height: 128px;
  object-fit: contain;
}
.swiper-pagination {
  bottom: 0px;
}
.swiper-pagination :deep(.swiper-pagination-bullet-active) {
  background: var(--blue);
}
@media screen and (max-width: 1024px) {
  .swiper {
    margin-top: 16px;
  }
  .comp {
    padding-bottom: 32px;
  }
  .img {
    width: 80px;
    height: 80px;
  }
  .swiper-slide {
    height: 160px;
    padding: 24px;
  }
  .title {
    font-size: 18px;
  }
  .sup {
    font-size: 13px;
    margin-bottom: 4px;
  }
}
</style>
