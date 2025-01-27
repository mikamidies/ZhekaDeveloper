<template>
  <div class="wrap">
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

<script setup></script>

<style scoped>
.wrap {
  padding: 24px 0;
  position: fixed;
  width: 100%;
  z-index: 99;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1766px;
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
