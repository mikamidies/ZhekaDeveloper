<template>
  <div class="wrap">
    <div class="container">
      <SectionTitle class="white_num" :title="`My Partners`" :number="`07`" />

      <div class="el">
        <div class="partnersPrev">
          <Icon icon="ic:round-chevron-left" />
        </div>

        <div class="partnersSwiper" data-aos="fade-up" data-aos-duration="300">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="/assets/img/part-1.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/img/part-2.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/img/part-3.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/img/part-4.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/img/part-5.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/img/part-6.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/img/part-7.png" alt="" class="pic" />
            </div>
            <div class="swiper-slide">
              <img src="/assets/img/part-8.png" alt="" class="pic" />
            </div>
          </div>
        </div>

        <div class="partnersNext">
          <Icon icon="ic:round-chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

onMounted(() => {
  new Swiper(".partnersSwiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".partnersNext",
      prevEl: ".partnersPrev",
    },
  });
});
</script>

<style scoped>
.container {
  border-inline: 1px solid white;
  padding: 104px 0 72px 0;
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
  border-left: 1px solid white;
  border-right: 1px solid white;
  content: "";
  z-index: 1;
}
.wrap {
  background: var(--border);
}
.white_num {
  text-align: center;
}
.white_num :deep(.txt) {
  width: 100%;
}
.white_num :deep(.num) {
  color: white;
}
.partnersSwiper {
  margin-top: 48px;
  overflow: hidden;
  position: relative;
  z-index: 3;
  margin-left: 0px;
  margin-right: -3px;
}
.swiper-slide {
  border: 1px solid white;
  height: 148px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--border);
}
.swiper-slide:nth-child(1),
.swiper-slide:nth-child(5) {
  margin-left: -1px;
}
.pic {
  width: 60%;
  height: 60%;
  object-fit: contain;
  opacity: 0.8;
  transition: 0.4s;
}
.swiper-slide:hover .pic {
  mix-blend-mode: initial;
  opacity: 1;
}
.el {
  position: relative;
}
.partnersNext,
.partnersPrev {
  display: flex;
  align-items: center;
  justify-content: center;
}
.partnersPrev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -16px;
  background: var(--blue);
  z-index: 4;
  cursor: pointer;
}
.partnersNext {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -16px;
  background: var(--blue);
  z-index: 4;
  cursor: pointer;
}
.partnersNext svg,
.partnersPrev svg {
  width: 32px;
  height: 32px;
}
.partnersNext :deep(path),
.partnersPrev :deep(path) {
  fill: white;
}
</style>
