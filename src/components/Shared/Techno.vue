<template>
  <Popin
    :theme="technoContent.color"
    v-if="technoContent"
    class="Techno"
    mode="hover"
    :debounce="false"
  >
    <template #content>
      <span class="text-w250 text-shadow px-3 py-2">{{ technoContent.title }}</span>
    </template>
    <template #button>
      <div
        @click.stop="toSearchLocation"
        class="techno-img-wrap"
        :style="{ backgroundColor: technoContent.color }"
      >
        <img :src="technoContent.logo" :alt="technoContent.title" class="techno-img" />
      </div>
    </template>
  </Popin>
</template>

<script lang="ts">
import { TechnosConstant, TechnosList } from '@constants';
import { BreakpointMixin } from '@mixins';
import { routerPagesNames } from '@models';
import { Component, Prop } from 'nuxt-property-decorator';

@Component({})
export default class TechnoItem extends BreakpointMixin {
  @Prop({ required: true }) techno!: TechnosList;
  @Prop({ default: 'lg' }) size!: 'sm' | 'md' | 'lg';

  get imgSize() {
    if (this.size === 'lg') return 50;
    if (this.size === 'md') return 36;
    return 26;
  }

  toSearchLocation() {
    if (!this.isMobile) {
      this.$router.push({ name: routerPagesNames.search, query: { q: this.techno } });
    }
  }

  get technoContent() {
    return TechnosConstant.find((f) => f.title === this.techno);
  }
}
</script>

<style lang="postcss" scoped>
.Techno { &:first-child { margin-left: -5%; } }
.techno-img-wrap {
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  width: 46px; height: 46px; cursor: pointer;
  transition: transform 0.15s;
  &:hover { transform: scale(1.1); }
}
.techno-img {
  width: 68%; height: 68%; object-fit: contain;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.4));
}
</style>
