<template>
  <div class="comp">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.comp {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.spinner {
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--blue);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
