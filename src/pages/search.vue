<template>
  <div class="relative block w-full pt-40 pb-20">
    <div v-if="results.length" class="ProjectGrid / sm:px-2 sm:gap-1 grid justify-center px-12">
      <component
        :is="componentType(data)"
        :showProgress="false"
        v-for="data of results"
        :key="data.id"
        :data="data"
        :inCarrousel="false"
        class="!mr-0"
      />
    </div>
    <div v-else-if="q.length" class="flex flex-col items-center pt-10">
      <span class="text-xl text-gray-400">{{ $t($messages.Search.NoResults) }} "{{ q }}"</span>
      <br />
      <span class="text-gray-500">Try: a project name, tech stack, or skill</span>
    </div>
    <div v-else class="flex flex-col items-center pt-10">
      <span class="text-xl text-gray-400">Search projects, skills, experience...</span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ProjectPlaceholder,
  MobileProjectPlaceholder,
  ExperiencePlaceholder,
  MobileExperiencePlaceholder,
} from '@components';
import { allExperiences, allProjects } from '@data';
import { BreakpointMixin } from '@mixins';
import { Project } from '@models';
import { isExperience, isProject } from '@utils';
import { deburr } from 'lodash';
import { Experience } from 'models/xp.model';
import { Component, Watch } from 'nuxt-property-decorator';

@Component({
  components: {
    ProjectPlaceholder,
    MobileProjectPlaceholder,
    ExperiencePlaceholder,
    MobileExperiencePlaceholder,
  },
})
export default class Search extends BreakpointMixin {
  public results: (Project | Experience)[] = [];
  public q = '';

  head() {
    return { title: this.$t(this.$messages.Search.Title) };
  }

  get routeQuery() {
    return this.$route.query.q;
  }

  get isDesktop() {
    return this.windowWidth > 639;
  }

  componentType(data: Project | Experience) {
    if (!this.isDesktop) {
      if (isProject(data)) return 'MobileProjectPlaceholder';
      if (isExperience(data)) return 'MobileExperiencePlaceholder';
    } else {
      if (isProject(data)) return 'ProjectPlaceholder';
      if (isExperience(data)) return 'ExperiencePlaceholder';
    }
  }

  @Watch('routeQuery', { immediate: true }) queryChanged(q: string) {
    if (typeof q === 'string') {
      this.q = q;
      const lowQ = deburr(q.toLowerCase());

      // Search projects by title, type, technos, description
      const projectResults = allProjects.filter((project) => {
        if (deburr(project.title.toLowerCase()).includes(lowQ)) return true;
        if (project.type.some((s) => deburr(s.toLowerCase()).includes(lowQ))) return true;
        if (project.technos.some((s) => deburr(s.toLowerCase()).includes(lowQ))) return true;
        if (project.description && deburr(project.description.toLowerCase()).includes(lowQ)) return true;
        return false;
      });

      // Search experience
      const experienceResults = allExperiences.filter((experience) => {
        if (deburr(experience.title.toLowerCase()).includes(lowQ)) return true;
        if (experience.technos.some((s) => deburr(s.toLowerCase()).includes(lowQ))) return true;
        if (experience.role && deburr(experience.role.toLowerCase()).includes(lowQ)) return true;
        return false;
      });

      this.results = [...projectResults, ...experienceResults];
    } else {
      this.q = '';
      this.results = [];
    }
  }
}
</script>

<style lang="postcss" scoped>
div.ProjectGrid {
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fit, 230px);
  grid-auto-flow: row dense;
  @screen sm {
    grid-template-columns: repeat(auto-fill, 8rem);
  }
}
</style>
