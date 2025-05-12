<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100vh;
}

.loading span {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: gray;
  border-radius: 50%;
  animation: loading_ani 1s linear infinite;
}

.loading span:nth-child(1) {
  background-color: orangered;
  animation-delay: 0s;
}
.loading span:nth-child(2) {
  background-color: skyblue;
  animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  background-color: blueviolet;
  animation-delay: 0.4s;
}

@keyframes loading_ani {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}
</style>
