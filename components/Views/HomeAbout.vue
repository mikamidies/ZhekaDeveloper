<template>
  <div class="wrap">
    <div class="container">
      <div class="grid">
        <div class="left">
          <div class="image">
            <div class="block">
              <img src="/public/assets/img/about.jpg" alt="" class="pic" />
              <div class="numbers">
                <p class="num">6</p>
                <p class="sub">Years of experience!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <SectionTitle />
          <h4 class="title">
            High quality <br />
            projects since 2019
          </h4>
          <p class="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            officia harum aliquid enim recusandae sapiente omnis laboriosam
            nostrum sequi, quidem tempore eius a doloribus. Sed recusandae
            nostrum dolore repellendus nulla praesentium culpa?
          </p>
        </div>
      </div>

      <div class="items">
        <div class="item">
          <div class="logo">
            <Icon icon="material-symbols:nest-clock-farsight-analog-outline" />
          </div>
          <p class="value">5+ Years</p>
          <p class="desc">
            Creating technical expertise with creative vision to bring unique
            ideas to life.
          </p>
        </div>
        <div class="item">
          <div class="logo">
            <Icon icon="material-symbols:download-done-rounded" />
          </div>
          <p class="value">50+ Projects</p>
          <p class="desc">
            I’ve successfully delivered over 50 projects to satisfied clients
            worldwide.
          </p>
        </div>
        <div class="item">
          <div class="logo">
            <Icon icon="material-symbols:sentiment-very-satisfied-outline" />
          </div>
          <p class="value">100% Clients</p>
          <p class="desc">
            Focus on quality and personalized approach ensures every client gets
            a solution for their needs
          </p>
        </div>
        <div class="item">
          <div class="logo">
            <Icon icon="material-symbols:counter-3-outline" />
          </div>
          <p class="value">3 Core Areas</p>
          <p class="desc">
            From websites and games to Telegram bots and graphic designs
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
