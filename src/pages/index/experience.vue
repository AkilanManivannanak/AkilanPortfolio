<template>
  <div class="sm:px-2 sm:flex sm:justify-center sm:flex-col relative block w-full px-10 pt-40 pb-20">

    <!-- Work Experience -->
    <h2 class="sm:text-center mb-5 font-semibold">Work Experience</h2>
    <div class="ProjectGrid sm:gap-1 sm:self-center grid justify-start mb-12">
      <component
        :is="isMobile ? 'MobileExperiencePlaceholder' : 'ExperiencePlaceholder'"
        v-for="experience of workExperiences"
        :key="experience.id"
        :data="experience"
        :in-carrousel="false"
        class="!mr-0"
      />
    </div>

    <!-- Volunteer Experience -->
    <h2 class="sm:text-center mb-5 font-bold volunteer-heading">Volunteer Experience (Full Stack Development - (Unpaid))</h2>
    <div class="ProjectGrid sm:gap-1 sm:self-center grid justify-start">
      <component
        :is="isMobile ? 'MobileExperiencePlaceholder' : 'ExperiencePlaceholder'"
        v-for="experience of volunteerExperiences"
        :key="experience.id"
        :data="experience"
        :in-carrousel="false"
        class="!mr-0"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { allExperiences } from '@data';
import { BreakpointMixin } from '@mixins';
import { Component } from 'nuxt-property-decorator';
import { ExperiencePlaceholder, MobileExperiencePlaceholder } from '@components';
import { ExperienceType } from '@models';

@Component({
  components: {
    ExperiencePlaceholder,
    MobileExperiencePlaceholder,
  },
})
export default class Experience extends BreakpointMixin {
  head() {
    return {
      title: 'Experience',
    };
  }

  get workExperiences() {
    return allExperiences.filter(e => e.type === ExperienceType.Job);
  }

  get volunteerExperiences() {
    return allExperiences.filter(e => e.type === ExperienceType.Volunteer);
  }
}
</script>

<style lang="postcss" scoped>
div.ProjectGrid {
  gap: 8px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 230px));
  grid-auto-flow: row dense;

  @screen sm {
    gap: 6px;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 8rem));
  }
}

.volunteer-heading {
  color: #e40913;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2rem;
}
</style>
