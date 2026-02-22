<template>
  <NuxtLink
    :to="toPreviewLink"
    class="MobileSkillPlaceholder / flex-0 justify-self-center flex w-32 h-48 mr-2 overflow-hidden rounded cursor-pointer"
  >
    <div class="center flex flex-col w-full h-full p-4 rounded" :style="{ backgroundColor: data.color }">
      <img :src="logo" :alt="data.title" class="mob-skill-img" />
      <span class="text-md text-white text-center mt-2 text-xs font-bold">{{ data.title }}</span>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { routerPagesNames, Skill } from '@models';
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Location } from 'vue-router';

@Component({})
export default class MobileSkillPlaceholder extends Vue {
  @Prop() data!: Skill;

  get logo() { return this.data.logo; }

  get toPreviewLink(): Location {
    return { path: routerPagesNames.search, query: { q: this.data.title } };
  }
}
</script>

<style lang="postcss" scoped>
.MobileSkillPlaceholder { scroll-snap-align: start; }
.mob-skill-img {
  width: 65%; height: auto; object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}
</style>
