<template>
  <div class="skills-page">
    <h2 class="skills-title">{{ $t($messages.Skills.Title) }}</h2>
    <div class="skills-grid">
      <div
        v-for="skill in skills"
        :key="skill.id"
        class="skill-cell"
        :style="{ backgroundColor: skill.color }"
        @click="toggleName(skill.id)"
        @mouseenter="hoveredId = skill.id"
        @mouseleave="hoveredId = null"
      >
        <img :src="skill.logo" :alt="skill.title" class="skill-img" />
        <transition name="name-pop">
          <div v-if="hoveredId === skill.id || clickedId === skill.id" class="skill-name-badge">
            {{ skill.title }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TechnosConstant } from '@constants';
import { BreakpointMixin } from '@mixins';
import { Component } from 'nuxt-property-decorator';

@Component({})
export default class Skills extends BreakpointMixin {
  head() {
    return { title: this.$t(this.$messages.Nav.Skills) };
  }
  public skills = TechnosConstant;
  public hoveredId: string | null = null;
  public clickedId: string | null = null;

  toggleName(id: string) {
    this.clickedId = this.clickedId === id ? null : id;
  }
}
</script>

<style lang="postcss" scoped>
.skills-page {
  padding: 8rem 2.5rem 5rem; min-height: 100vh;
  @screen sm { padding: 6rem 0.75rem 4rem; }
}
.skills-title {
  font-size: 2rem; font-weight: 700; color: #fff;
  margin-bottom: 1.5rem;
  border-left: 4px solid #e50914; padding-left: .75rem;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  @screen sm { grid-template-columns: repeat(auto-fill, minmax(85px, 1fr)); gap: 8px; }
}
.skill-cell {
  position: relative; border-radius: 14px; aspect-ratio: 1;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; overflow: visible;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover { transform: scale(1.07); box-shadow: 0 6px 24px rgba(0,0,0,0.5); z-index: 5; }
}
.skill-img {
  width: 62%; height: 62%; object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}
.skill-name-badge {
  position: absolute; bottom: calc(100% + 8px); left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.95); color: #fff;
  font-size: 0.72rem; font-weight: 700; padding: 0.32rem 0.75rem;
  border-radius: 8px; white-space: nowrap;
  border: 1px solid rgba(255,255,255,0.15);
  pointer-events: none; z-index: 10;
  box-shadow: 0 4px 12px rgba(0,0,0,0.6);
  &::after {
    content: ''; position: absolute; top: 100%; left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent; border-top-color: rgba(0,0,0,0.95);
  }
}
.name-pop-enter-active, .name-pop-leave-active { transition: opacity 0.15s, transform 0.15s; }
.name-pop-enter, .name-pop-leave-to { opacity: 0; transform: translateX(-50%) translateY(4px); }
</style>
