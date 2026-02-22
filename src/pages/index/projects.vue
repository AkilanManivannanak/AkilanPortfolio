<template>
  <div class="flex flex-col w-full pb-20">
    <CoverBanner :data="coverProject" />

    <component
      v-if="continueProjects.length"
      :is="isDesktop ? 'ProjectList' : 'MobileProjectList'"
      :projects="continueProjects"
      show-progress
    >{{ $t($messages.Home.ContinueWithProfile) }}</component>

    <component
      v-if="wishList.length"
      :is="isDesktop ? 'ProjectList' : 'MobileProjectList'"
      :projects="wishList"
    >{{ $t($messages.Home.MyList) }}</component>

    <component :is="isDesktop ? 'ProjectList' : 'MobileProjectList'" :projects="allProjectsList">
      All Projects
    </component>

    <component :is="isDesktop ? 'ProjectList' : 'MobileProjectList'" :projects="aiProjects">
      AI Projects
    </component>

    <component
      v-if="libraryProjects.length"
      :is="isDesktop ? 'ProjectList' : 'MobileProjectList'"
      :projects="libraryProjects"
    >Libraries & Tools</component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { CoverBanner, MobileProjectList, ProjectList } from '@components';
import { allProjects, stockForecastingProject } from '@data';
import { BreakpointMixin } from '@mixins';
import { BreakPointsValues, Project, ProjectType } from '@models';
import { VideoProgressModule } from '@store';
import { groupBy, shuffle } from 'lodash';

@Component({ components: { CoverBanner, MobileProjectList, ProjectList } })
export default class Projects extends BreakpointMixin {
  head() { return { title: this.$t(this.$messages.Nav.Projects) }; }

  public coverProject = stockForecastingProject;

  get continueProjects() {
    const progressList = VideoProgressModule.state.progressList;
    const grouped = groupBy(progressList, ({ video }) => video.projectId);
    return Object.entries(grouped)
      .filter(([, v]) => v.some(s => s.timestamp < s.duration - 5))
      .map(([key]) => allProjects.find(f => f.id === key))
      .filter((f): f is Project => !!f);
  }

  get allProjectsList() { return shuffle(allProjects); }
  get aiProjects() { return shuffle(allProjects.filter(f => f.type.includes(ProjectType.App))); }
  get libraryProjects() { return allProjects.filter(f => f.type.includes(ProjectType.Library)); }
  get wishList() { return VideoProgressModule.state.wishList; }
  get isDesktop() { return this.windowWidth > BreakPointsValues.Small; }
}
</script>
