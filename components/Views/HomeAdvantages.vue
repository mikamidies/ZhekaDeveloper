<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <SectionTitle class="sec_tit" :title="`Advantages`" :number="`05`" />
        <p class="subtitle">Why you should work with me?</p>
      </div>

      <div class="items" data-aos="fade-up" data-aos-duration="300">
        <div class="item">
          <div class="logo">
            <Icon icon="ic:twotone-computer" />
          </div>
          <h4 class="title">Professional</h4>
          <p class="sub">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            officia laudantium tenetur impedit consequatur cumque a aperiam
            aliquam hic consectetur.
          </p>
        </div>

        <div class="item">
          <div class="logo">
            <Icon icon="ic:round-stars" />
          </div>
          <h4 class="title">Experience</h4>
          <p class="sub">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            officia laudantium tenetur impedit consequatur cumque a aperiam
            aliquam hic consectetur.
          </p>
        </div>

        <div class="item">
          <div class="logo">
            <Icon icon="ic:outline-settings-suggest" />
          </div>
          <h4 class="title">Equipment</h4>
          <p class="sub">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            officia laudantium tenetur impedit consequatur cumque a aperiam
            aliquam hic consectetur.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  background: white;
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
  z-index: 1;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 72px;
}
.title {
  position: relative;
  display: block;
  margin: 0 0 15px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.sub {
  margin: 0;
  font-size: 15px;
  line-height: 24px;
  max-width: 95%;
}
.logo svg {
  width: 64px;
  height: 64px;
}
.logo {
  margin-bottom: 24px;
}
.logo :deep(path) {
  fill: var(--blue);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sec_tit {
  width: 50%;
}
.item {
  background: var(--border);
  padding: 24px 32px;
  border-right: 1px solid white;
  transform: translateX(1px);
}
.item:first-child {
  margin-left: -1px;
}
.item:last-child {
  margin-right: -1px;
}
@media screen and (max-width: 1024px) {
  .container {
    padding: 32px 12px;
  }
  .subtitle {
    display: none;
  }
  .sec_tit {
    width: 100%;
  }
  .header {
    padding-bottom: 16px;
  }
  .items {
    padding-top: 0px;
    grid-template-columns: repeat(1, 1fr);
    border-top: 1px solid var(--border);
  }
  .item {
    background: white;
    padding: 16px 0 16px 0;
    border-bottom: 1px solid var(--border);
  }
  .logo {
    margin-bottom: 8px;
  }
  .sub {
    font-size: 14px;
    max-width: 100%;
  }
}
</style>
