<template>
  <header class="nf-header" :class="{ opaque, hideNavBar }">
    <div class="nf-header-inner">
      <!-- Left: Logo + Desktop Nav -->
      <div class="nf-left">
        <NuxtLink v-if="!hideNavBar" to="/" class="nf-logo-link">
          <span class="nf-logo">AKILAN<span class="nf-logo-red">FLIX</span></span>
        </NuxtLink>
        <NuxtLink v-else :to="previousLink" class="nf-back-link">
          <SvgIcon src="videos/back" :size="34" />
        </NuxtLink>

        <!-- Desktop nav (hidden on tablet/mobile) -->
        <nav v-if="!hideNavBar" class="nf-desktop-nav">
          <NuxtLink
            v-for="r of navRoutes"
            :key="r.label"
            :to="r.link"
            :exact="r.exact"
            class="nf-nav-link"
          >{{ $t(r.label) }}</NuxtLink>
        </nav>
      </div>

      <!-- Right: Icons + User -->
      <div class="nf-right">
        <SearchBar />
        <a href="https://github.com/AkilanManivannanak" target="_blank" class="nf-icon-link">
          <SvgIcon src="social/github" :size="20" />
        </a>
        <a href="https://www.linkedin.com/in/akilan-manivannan-a178212a7/" target="_blank" class="nf-icon-link">
          <SvgIcon src="social/linkedin" :size="20" />
        </a>
        <UserPopup />
        <!-- Hamburger for tablet/mobile -->
        <button v-if="!hideNavBar" class="nf-burger" @click="mobileOpen = !mobileOpen" type="button">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown nav -->
    <transition name="mob-slide">
      <div v-if="mobileOpen && !hideNavBar" class="nf-mobile-menu">
        <NuxtLink
          v-for="r of navRoutes"
          :key="r.label"
          :to="r.link"
          :exact="r.exact"
          class="nf-mob-link"
          @click.native="mobileOpen = false"
        >{{ $t(r.label) }}</NuxtLink>
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import { BreakpointMixin } from '@mixins';
import { navRoutes } from '@models';
import { AuthModule, RouterModule } from '@store';
import { Component } from 'nuxt-property-decorator';
import { RawLocation } from 'vue-router';
import SearchBar from './SearchBar.vue';
import UserPopup from './UserPopup.vue';

@Component({ components: { SearchBar, UserPopup } })
export default class HeaderComponent extends BreakpointMixin {
  public navRoutes = navRoutes;
  public opaque = false;
  public mobileOpen = false;

  get hideNavBar() { return AuthModule.state.hideNav; }

  get previousLink(): RawLocation {
    const { jbv, xp, ...rest } = this.$route.query;
    return { path: this.$route.path, params: this.$route.params, query: rest };
  }

  checkOpaque() {
    this.opaque = window.pageYOffset > 0;
  }

  mounted() {
    window.addEventListener('scroll', this.checkOpaque);
    window.addEventListener('resize', this.checkOpaque);
  }
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkOpaque);
    window.removeEventListener('resize', this.checkOpaque);
  }
}
</script>

<style lang="postcss">
.nf-header {
  position: fixed; top: 0; left: 0; width: 100%;
  z-index: 10003;
  transition: background-color 0.3s ease;
  background: transparent;

  &.opaque { background: var(--bg1, #141414); }
  &.hideNavBar { background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0)); }
}

.nf-header-inner {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.85rem 2.5rem;
  @media (max-width: 900px) { padding: 0.75rem 1.2rem; }
}

.nf-left { display: flex; align-items: center; gap: 2rem; }

.nf-logo-link { text-decoration: none; }
.nf-logo {
  font-family: Impact, 'Arial Narrow Bold', sans-serif;
  font-size: 1.7rem; font-weight: 900; color: #fff;
  letter-spacing: 0.04em;
}
.nf-logo-red { color: #e50914; }
.nf-back-link { color: #fff; }

.nf-desktop-nav {
  display: flex; gap: 0.8rem; align-items: center;
  @media (max-width: 900px) { display: none; }
}

.nf-nav-link {
  color: #ccc; text-decoration: none; font-size: 0.78rem;
  font-weight: 500; transition: color 0.2s; white-space: nowrap;
  &:hover { color: #fff; }
  &.nuxt-link-active { color: #fff; font-weight: 700; }
  &.nuxt-link-exact-active { color: #fff; font-weight: 700; }
}

.nf-right {
  display: flex; align-items: center; gap: 0.75rem;
}

.nf-icon-link {
  color: #ccc; transition: color 0.2s;
  &:hover { color: #fff; }
  @media (max-width: 600px) { display: none; }
}

.nf-burger {
  display: none;
  flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
  @media (max-width: 900px) { display: flex; }
}
.nf-burger span {
  display: block; width: 22px; height: 2px;
  background: #fff; border-radius: 2px;
  transition: transform 0.2s;
}

.nf-mobile-menu {
  display: flex; flex-direction: column;
  background: rgba(15,15,15,0.97);
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 0.5rem 0 0.75rem;
}
.nf-mob-link {
  color: #ccc; text-decoration: none;
  padding: 0.75rem 1.5rem; font-size: 0.95rem; font-weight: 500;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: background 0.15s, color 0.15s;
  &:hover { background: rgba(255,255,255,0.05); color: #fff; }
  &.nuxt-link-active, &.nuxt-link-exact-active { color: #e50914; font-weight: 700; }
}

.mob-slide-enter-active, .mob-slide-leave-active { transition: opacity 0.2s, transform 0.2s; }
.mob-slide-enter, .mob-slide-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
