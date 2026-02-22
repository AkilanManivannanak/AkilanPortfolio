<template>
  <footer class="nf-footer">
    <span class="nf-footer-text">Made by <strong>Akilan Manivannan</strong></span>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({})
export default class FooterComponent extends Vue {}
</script>

<style lang="postcss" scoped>
.nf-footer {
  position: sticky;
  top: 100%;
  width: 100%;
  padding: 1.5rem 2.5rem;
  background: #0a0a0a;
  border-top: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nf-footer-text {
  color: #666;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
}
.nf-footer-text strong {
  color: #999;
  font-weight: 600;
}
</style>
