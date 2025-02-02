<template>
  <div class="wrap">
    <div class="container">
      <SectionTitle class="white_num" :title="`My Partners`" :number="`07`" />
      <div class="items">
        <div class="item">
          <img src="/assets/img/part-1.png" alt="" class="pic" />
        </div>
        <div class="item">
          <img src="/assets/img/part-2.png" alt="" class="pic" />
        </div>
        <div class="item">
          <img src="/assets/img/part-3.png" alt="" class="pic" />
        </div>
        <div class="item">
          <img src="/assets/img/part-4.png" alt="" class="pic" />
        </div>
        <div class="item">
          <img src="/assets/img/part-5.png" alt="" class="pic" />
        </div>
        <div class="item">
          <img src="/assets/img/part-6.png" alt="" class="pic" />
        </div>
        <div class="item">
          <img src="/assets/img/part-7.png" alt="" class="pic" />
        </div>
        <div class="item">
          <img src="/assets/img/part-8.png" alt="" class="pic" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-inline: 1px solid white;
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
  border-left: 1px solid white;
  border-right: 1px solid white;
  content: "";
  z-index: 1;
}
.wrap {
  background: var(--border);
}
.white_num :deep(.num) {
  color: white;
}
.items {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-right: -1px;
  position: relative;
  z-index: 2;
}
.item {
  border: 1px solid white;
  height: 128px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--border);
}
.item:nth-child(1),
.item:nth-child(5) {
  margin-left: -1px;
}
.pic {
  width: 60%;
  height: 60%;
  object-fit: contain;
  mix-blend-mode: luminosity;
  opacity: 0.8;
  transition: 0.4s;
}
.item:hover .pic {
  mix-blend-mode: initial;
  opacity: 1;
}
</style>
