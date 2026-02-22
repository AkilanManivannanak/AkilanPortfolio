<template>
  <div class="nf-bg-root">
    <transition-group name="bg-fade" tag="div" class="nf-bg-container">
      <div
        v-for="(img, i) in images"
        v-show="i === current"
        :key="img"
        class="nf-bg-slide"
        :style="{ backgroundImage: `url(${img})` }"
      ></div>
    </transition-group>
    <div class="nf-bg-gradient"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class NetflixBackground extends Vue {
  images = ['/backgrounds/bg1.jpg', '/backgrounds/bg2.jpg', '/backgrounds/bg3.jpg', '/backgrounds/bg4.jpg'];
  current = 0;
  timer: any = null;

  mounted() {
    this.timer = setInterval(() => {
      this.current = (this.current + 1) % this.images.length;
    }, 6000);
  }

  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}
</script>

<style scoped>
.nf-bg-root {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
.nf-bg-container {
  position: absolute; inset: 0;
}
.nf-bg-slide {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  opacity: 0.18;
}
.nf-bg-gradient {
  position: absolute; inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(20,20,20,0.5) 0%,
    rgba(20,20,20,0.3) 30%,
    rgba(20,20,20,0.7) 70%,
    #141414 100%
  );
}
.bg-fade-enter-active, .bg-fade-leave-active { transition: opacity 1.5s ease; }
.bg-fade-enter, .bg-fade-leave-to { opacity: 0 !important; }
</style>
