<template>
  <div class="wrap" id="about">
    <div class="container">
      <div class="grid">
        <div class="left" data-aos="fade-right">
          <div class="image">
            <div class="block">
              <img src="/public/assets/img/about.jpg" alt="" class="pic" />
              <div class="numbers">
                <p class="num">6</p>
                <p class="sub">{{ t("main.about_xp") }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right" data-aos="fade-left">
          <SectionTitle :title="t('main.about')" :number="`01`" />
          <h4 class="title">
            {{ t("main.about_title") }}
          </h4>
          <p class="text">
            {{ t("main.about_txt") }}
          </p>
        </div>
      </div>

      <div class="items">
        <div class="item" data-aos="fade-up" data-aos-duration="300">
          <div class="logo">
            <Icon icon="material-symbols:nest-clock-farsight-analog-outline" />
          </div>
          <p class="value">{{ t("main.about_card-t1") }}</p>
          <p class="desc">
            {{ t("main.about_card-s1") }}
          </p>
        </div>
        <div class="item" data-aos="fade-up" data-aos-duration="400">
          <div class="logo">
            <Icon icon="material-symbols:download-done-rounded" />
          </div>
          <p class="value">{{ t("main.about_card-t2") }}</p>
          <p class="desc">
            {{ t("main.about_card-s2") }}
          </p>
        </div>
        <div class="item" data-aos="fade-up" data-aos-duration="500">
          <div class="logo">
            <Icon icon="material-symbols:sentiment-very-satisfied-outline" />
          </div>
          <p class="value">{{ t("main.about_card-t3") }}</p>
          <p class="desc">
            {{ t("main.about_card-s3") }}
          </p>
        </div>
        <div class="item" data-aos="fade-up" data-aos-duration="500">
          <div class="logo">
            <Icon icon="material-symbols:counter-4-outline" />
          </div>
          <p class="value">{{ t("main.about_card-t4") }}</p>
          <p class="desc">
            {{ t("main.about_card-s4") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTranslationsStore } from "~/stores/translations";
const translationsStore = useTranslationsStore();
const { t } = translationsStore;
</script>

<style scoped>
.wrap {
  background: white;
  overflow: hidden;
}
.container {
  border-inline: 1px solid var(--border);
  padding: 104px 0;
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
.grid {
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 108px;
}
.image {
  position: relative;
}
.block {
  width: 380px;
  height: 504px;
  position: relative;
  z-index: 3;
  transform: translate(72px, 72px);
}
.image::after {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  border: 263px solid transparent;
  border-left: 271px solid var(--blue);
  border-top: 232px solid var(--blue);
  content: "";
  z-index: 2;
}
.pic {
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.numbers {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.num {
  display: block;
  margin: 0 0 10px;
  font-size: 204px;
  font-weight: 700;
  line-height: 200px;
  color: white;
  text-align: center;
}
.sub {
  display: block;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  line-height: 36px;
  color: white;
  text-align: center;
}
.right {
  padding: 32px 0;
  position: relative;
}
.title {
  display: block;
  margin: 24px 0 24px 0;
  font: 36px "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 46px;
  max-width: 500px;
}
.text {
  font: 16px "Montserrat", sans-serif;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.5px;
  position: relative;
  padding-left: 116px;
  max-width: 95%;
}
.text::after {
  position: absolute;
  display: block;
  width: 90px;
  height: 1px;
  top: 15px;
  left: -5px;
  background: var(--blue);
  content: "";
}
.items {
  padding-top: 168px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}
.item {
  background: var(--border);
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  transition: 0.4s;
}
.item:hover {
  transform: translateY(-10px);
  cursor: default;
}
.logo svg {
  width: 56px;
  height: 56px;
  opacity: 0.7;
}
.value {
  display: block;
  color: var(--blue);
  font: 24px "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 120%;
}
.desc {
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  opacity: 0.8;
}
@media screen and (max-width: 1024px) {
  .container {
    padding-block: 32px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
  .image::after {
    display: none;
  }
  .block {
    transform: translate(0);
    width: 100%;
    height: 220px;
  }
  .num {
    font-size: 120px;
    line-height: 110%;
  }
  .sub {
    font-size: 14px;
  }
  .right {
    padding: 0;
  }
  .title {
    font-size: 26px;
    line-height: 34px;
    margin: 16px 0;
  }
  .text {
    font-size: 14px;
    line-height: 180%;
    padding: 0;
  }
  .text::after {
    display: none;
  }
  .items {
    grid-template-columns: repeat(2, 1fr);
    padding: 32px 0;
    gap: 12px;
  }
  .item {
    padding: 24px 12px;
  }
  .value {
    font-size: 20px;
  }
  .desc {
    font-size: 12px;
  }
}
</style>
