<template>
  <div class="skills-section">
    <h2 class="ss-title">{{ $t($messages.Skills.Title) }}</h2>
    <div class="ss-grid">
      <div
        v-for="skill in topSkills"
        :key="skill.id"
        class="ss-cell"
        :style="{ backgroundColor: skill.color }"
        @mouseenter="hoveredId = skill.id"
        @mouseleave="hoveredId = null"
        @click="toggleClick(skill.id)"
      >
        <img :src="skill.logo" :alt="skill.title" class="ss-img" />
        <transition name="badge-pop">
          <div v-if="hoveredId === skill.id || clickedId === skill.id" class="ss-badge">
            {{ skill.title }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TechnosConstant } from '@constants';
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class SkillsSection extends Vue {
  hoveredId: string | null = null;
  clickedId: string | null = null;
  topSkills = TechnosConstant.slice(0, 18);
  toggleClick(id: string) { this.clickedId = this.clickedId === id ? null : id; }
}
</script>

<style lang="postcss" scoped>
.skills-section {
  padding: 1rem 2.5rem 1.5rem;
  background: rgba(14,14,14,0.85);
  @screen sm { padding: 0.75rem 0.75rem 1rem; }
}
.ss-title {
  font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 0.9rem;
}
.ss-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  @screen sm { grid-template-columns: repeat(auto-fill, minmax(75px, 1fr)); gap: 7px; }
}
.ss-cell {
  position: relative; border-radius: 10px; aspect-ratio: 1;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; overflow: visible;
  transition: transform .2s, box-shadow .2s;
  &:hover { transform: scale(1.08); box-shadow: 0 4px 20px rgba(0,0,0,.5); z-index: 5; }
}
.ss-img {
  width: 62%; height: 62%; object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}
.ss-badge {
  position: absolute; bottom: calc(100% + 6px); left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,.95); color: #fff;
  font-size: 0.7rem; font-weight: 700; padding: .28rem .65rem;
  border-radius: 6px; white-space: nowrap; z-index: 10;
  border: 1px solid rgba(255,255,255,.15);
  box-shadow: 0 3px 10px rgba(0,0,0,.6);
  pointer-events: none;
  &::after {
    content: ''; position: absolute; top: 100%; left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent; border-top-color: rgba(0,0,0,.95);
  }
}
.badge-pop-enter-active, .badge-pop-leave-active { transition: opacity .15s, transform .15s; }
.badge-pop-enter, .badge-pop-leave-to { opacity: 0; transform: translateX(-50%) translateY(4px); }
</style>
