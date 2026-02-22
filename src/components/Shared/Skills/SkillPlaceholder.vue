<template>
  <PlaceholderAnimatedItem :baseInfo="data" :showProgress="false" :inCarrousel="inCarrousel">
    <template #card>
      <div class="center flex w-full h-full rounded" :style="{ backgroundColor: data.color }">
        <img :src="logo" :alt="data.title" class="skill-ph-img" />
      </div>
    </template>
    <template #picture>
      <div class="center flex w-full h-full rounded-tl rounded-tr" :style="{ backgroundColor: data.color }">
        <img :src="logo" :alt="data.title" class="skill-ph-img skill-ph-img--preview" />
      </div>
    </template>
    <template #previewBlock>
      <div class="Block / flex-nowrap flex flex-row">
        <div class="flex flex-col flex-1">
          <h4 class="leading-5">{{ data.title }}</h4>
          <span class="text-w160 text-xs">{{ $tc($messages.Skills.Project, projectConcerned) }}</span>
        </div>
        <div class="flex-nowrap flex-0 flex flex-row items-center ml-1">
          <Popin mode="hover" :offset="2" theme="text1">
            <template #content>
              <span class="text-bg1 px-3 py-1">Search</span>
            </template>
            <template #button>
              <div @click.stop="toSearchLocation" class="center text-bg1 bg-text1 border-text1 flex p-1 border-2 rounded-full">
                <SvgIcon src="actions/search" :size="20" />
              </div>
            </template>
          </Popin>
        </div>
      </div>
    </template>
  </PlaceholderAnimatedItem>
</template>

<script lang="ts">
import { allProjects } from '@data';
import { routerPagesNames, Skill } from '@models';
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import PlaceholderAnimatedItem from '../PlaceholderAnimatedItem.vue';

@Component({ components: { PlaceholderAnimatedItem } })
export default class SkillPlaceholder extends Vue {
  @Prop() data!: Skill;
  @Prop({ default: false }) inCarrousel!: boolean;

  toSearchLocation() {
    this.$router.push({ name: routerPagesNames.search, query: { q: this.data.title } });
  }

  get projectConcerned() {
    return allProjects.filter((f) => f.technos.includes(this.data.title)).length;
  }

  get logo() { return this.data.logo; }
}
</script>

<style lang="postcss" scoped>
.skill-ph-img {
  width: 60%; height: 60%; object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}
.skill-ph-img--preview {
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
</style>
