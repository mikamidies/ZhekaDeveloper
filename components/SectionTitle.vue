<template>
  <div class="wrapper">
    <p class="txt">{{ title }}</p>
    <p class="num">{{ number }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    number: "",
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
}
.txt {
  display: block;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 10px;
  color: var(--blue);
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 22px;
}
.num {
  display: block;
  color: var(--border);
  font: 120px "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 90px;
}
.txt::after {
  position: relative;
  display: inline-block;
  margin: 0 0 0 15px;
  width: 70px;
  height: 1px;
  top: -2px;
  vertical-align: middle;
  background: var(--blue);
  content: "";
}
</style>
