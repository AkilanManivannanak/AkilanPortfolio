<template>
  <div class="flex flex-col w-full pb-20">

    <!-- Hero Cover Banner -->
    <CoverBanner :data="coverProject" />

    <!-- Continue watching -->
    <component
      v-if="continueProjects.length"
      :is="isDesktop ? 'ProjectList' : 'MobileProjectList'"
      :projects="continueProjects"
      show-progress
    >{{ $t($messages.Home.ContinueWithProfile) }}</component>

    <!-- My List -->
    <component
      v-if="wishList.length"
      :is="isDesktop ? 'ProjectList' : 'MobileProjectList'"
      :projects="wishList"
    >{{ $t($messages.Home.MyList) }}</component>

    <!-- Popular Projects -->
    <component :is="isDesktop ? 'ProjectList' : 'MobileProjectList'" :projects="popularProjects">
      {{ $t($messages.Home.Popular) }}
    </component>

    <!-- Featured Projects -->
    <component :is="isDesktop ? 'ProjectList' : 'MobileProjectList'" :projects="featuredProjectsList">
      {{ $t($messages.Home.Featured) }}
    </component>

    <!-- Most Used Technologies -->
    <SkillsSection />

    <!-- Solid block - kills background bleed-through gaps -->
    <div class="home-content-block">

      <!-- Experience Preview -->
      <section class="home-section">
        <div class="home-section-header">
          <h2 class="home-section-title">Experience</h2>
          <NuxtLink to="/experience" class="home-see-all">See All →</NuxtLink>
        </div>
        <div class="home-xp-grid">
          <NuxtLink
            v-for="xp in experiences"
            :key="xp.id"
            to="/experience"
            class="home-xp-card"
          >
            <img :src="xp.logo" :alt="xp.title" class="home-xp-logo" @error="onImgErr" />
            <div class="home-xp-info">
              <div class="home-xp-title">{{ xp.title }}</div>
              <div class="home-xp-role">{{ xp.role }}</div>
              <div class="home-xp-loc">📍 {{ xp.location }}</div>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Education Preview -->
      <section class="home-section">
        <div class="home-section-header">
          <h2 class="home-section-title">Education</h2>
          <NuxtLink to="/education" class="home-see-all">See All →</NuxtLink>
        </div>
        <div class="home-edu-grid">
          <NuxtLink
            v-for="edu in educationList"
            :key="edu.id"
            to="/education"
            class="home-edu-card"
            :style="{ backgroundImage: `url('${edu.cover}')` }"
          >
            <div class="home-edu-ov"></div>
            <div class="home-edu-badge">{{ edu.degree }}</div>
            <div class="home-edu-body">
              <div class="home-edu-school">{{ edu.school }}</div>
              <div class="home-edu-years">{{ edu.years }}</div>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Certificates Preview -->
      <section class="home-section">
        <div class="home-section-header">
          <h2 class="home-section-title">Certificates</h2>
          <NuxtLink to="/certificates" class="home-see-all">See All →</NuxtLink>
        </div>
        <div class="home-cert-grid">
          <a
            v-for="cert in certList"
            :key="cert.id"
            :href="cert.url"
            target="_blank"
            class="home-cert-card"
          >
            <div class="home-cert-icon">
              <img :src="cert.logo" :alt="cert.issuer" @error="onImgErr" />
            </div>
            <div class="home-cert-body">
              <div class="home-cert-issuer">{{ cert.issuer }}</div>
              <div class="home-cert-title">{{ cert.title }}</div>
            </div>
          </a>
        </div>
      </section>

      <!-- Achievements Preview -->
      <section class="home-section">
        <div class="home-section-header">
          <h2 class="home-section-title">Achievements</h2>
          <NuxtLink to="/achievements" class="home-see-all">See All →</NuxtLink>
        </div>
        <div class="home-ach-grid">
          <NuxtLink
            v-for="a in achievementList"
            :key="a.id"
            to="/achievements"
            class="home-ach-card"
            :style="{ backgroundImage: `url('${a.cover}')` }"
          >
            <div class="home-ach-ov"></div>
            <div class="home-ach-tag">{{ a.tag }}</div>
            <div class="home-ach-title">{{ a.title }}</div>
          </NuxtLink>
        </div>
      </section>

    </div>

  </div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import { CoverBanner, MobileProjectList, ProjectList } from '@components';
import { allProjects, allExperiences, featuredProjects, stockForecastingProject } from '@data';
import { BreakpointMixin } from '@mixins';
import { BreakPointsValues, Project } from '@models';
import { VideoProgressModule } from '@store';
import { groupBy, shuffle } from 'lodash';
import SkillsSection from '@components/Shared/SkillsSection.vue';

@Component({ components: { CoverBanner, MobileProjectList, ProjectList, SkillsSection } })
export default class Home extends BreakpointMixin {
  head() { return { title: 'Home — AkilanFlix' }; }

  public coverProject = stockForecastingProject;

  get continueProjects(): Project[] {
    const grouped = groupBy(VideoProgressModule.state.progressList, ({ video }) => video.projectId);
    return Object.entries(grouped)
      .filter(([, v]) => v.some(s => s.timestamp < s.duration - 5))
      .map(([key]) => allProjects.find(f => f.id === key))
      .filter((f): f is Project => !!f);
  }

  get popularProjects() { return shuffle([...allProjects]).slice(0, 8); }
  get featuredProjectsList() { return featuredProjects; }
  get wishList() { return VideoProgressModule.state.wishList; }
  get isDesktop() { return this.windowWidth > BreakPointsValues.Small; }
  get experiences() { return allExperiences; }

  onImgErr(e: Event) {
    const img = e.target as HTMLImageElement;
    img.style.display = 'none';
  }

  educationList = [
    { id: 1, degree: 'M.S.', school: 'Long Island University, Brooklyn', years: '2025–2027', cover: '/Education/LIU.png' },
    { id: 2, degree: 'B.E.', school: 'Panimalar Engineering College', years: '2021–2024', cover: '/Education/panimalar Engineering college.jpeg' },
    { id: 3, degree: 'Dip.', school: 'Panimalar Polytechnic College', years: '2015–2018', cover: '/Education/panimalar Polytechnic college.png' },
  ];

  certList = [
    { id: 'g1', title: 'Google AI Essentials', issuer: 'Google / Coursera', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png', url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/Z9LEABFXBCPR' },
    { id: 'g2', title: 'Intro to AI/ML on Google Cloud', issuer: 'Google Cloud / Coursera', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png', url: 'https://www.coursera.org/account/accomplishments/records/GLY44CSLXO3F' },
    { id: 'j1', title: 'Quantitative Research Simulation', issuer: 'J.P. Morgan / Forage', logo: '/JPMorgan.png', url: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_69598376f76d215bcfcb5af0_1767490272332_completion_certificate.pdf' },
    { id: 'j2', title: 'Software Engineering Simulation', issuer: 'J.P. Morgan / Forage', logo: '/JPMorgan.png', url: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_69598376f76d215bcfcb5af0_1768425023732_completion_certificate.pdf' },
  ];

  achievementList = [
    { id: 1, title: 'Researcher — IIT Madras IMPULSE 2k23', tag: 'Research', cover: '/achievements/images.jpeg' },
    { id: 2, title: 'IDEATHON 2022 — Traffic Sense', tag: 'Innovation', cover: '/achievements/ideathon.png' },
    { id: 3, title: "Mr. Tamil Nadu Men's Physique 🥈", tag: 'Athletics', cover: '/achievements/Mr Tamil Nadu.jpg' },
  ];
}
</script>

<style lang="postcss" scoped>
.home-content-block {
  background: #141414;
  position: relative;
  z-index: 1;
}
.home-section {
  padding: 0.75rem 2.5rem 1rem;
  @screen sm { padding: 0.5rem 0.75rem 0.75rem; }
}
.home-section-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 0.75rem;
}
.home-section-title {
  font-size: 1.5rem; font-weight: 700; color: #fff;
}
.home-see-all {
  color: #e50914; font-size: 0.85rem; font-weight: 600;
  text-decoration: none; transition: opacity 0.2s;
  &:hover { opacity: 0.75; }
}
/* Experience */
.home-xp-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;
  @screen sm { grid-template-columns: 1fr; }
}
.home-xp-card {
  display: flex; gap: 1rem; align-items: center;
  background: #1a1a1a; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px; padding: 1rem; text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
  &:hover { border-color: rgba(229,9,20,0.3); transform: translateY(-2px); }
}
.home-xp-logo {
  width: 52px; height: 52px; object-fit: contain; border-radius: 8px;
  background: #fff; padding: 4px; flex-shrink: 0;
}
.home-xp-info { flex: 1; min-width: 0; }
.home-xp-title { font-weight: 700; color: #fff; font-size: 0.95rem; }
.home-xp-role { color: #e50914; font-size: 0.8rem; font-weight: 600; margin: 0.15rem 0; }
.home-xp-loc { color: #888; font-size: 0.75rem; }
/* Education */
.home-edu-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;
  @screen sm { grid-template-columns: 1fr; }
}
.home-edu-card {
  position: relative; height: 140px; border-radius: 14px; overflow: hidden;
  background-size: cover; background-position: center;
  display: block; text-decoration: none; transition: transform 0.2s;
  &:hover { transform: scale(1.02); }
}
.home-edu-ov { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2)); }
.home-edu-badge {
  position: absolute; top: 0.75rem; left: 0.75rem;
  background: #e50914; color: #fff; font-size: 0.7rem; font-weight: 700;
  padding: 0.2rem 0.6rem; border-radius: 12px; z-index: 1; letter-spacing: 0.06em;
}
.home-edu-body { position: absolute; bottom: 0.9rem; left: 0.9rem; z-index: 1; }
.home-edu-school { color: #fff; font-weight: 700; font-size: 0.9rem; line-height: 1.3; }
.home-edu-years { color: #aaa; font-size: 0.75rem; margin-top: 0.2rem; }
/* Certificates */
.home-cert-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.9rem;
  @screen sm { grid-template-columns: 1fr; }
}
.home-cert-card {
  display: flex; gap: 0.85rem; align-items: center;
  background: #1a1a1a; border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px; padding: 0.9rem; text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
  &:hover { border-color: rgba(229,9,20,0.3); transform: translateY(-2px); }
}
.home-cert-icon {
  width: 44px; height: 44px; background: #fff; border-radius: 6px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  img { width: 100%; height: 100%; object-fit: contain; padding: 4px; }
}
.home-cert-issuer { color: #e50914; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; }
.home-cert-title { color: #ddd; font-size: 0.83rem; font-weight: 600; margin-top: 0.15rem; line-height: 1.3; }
/* Achievements */
.home-ach-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;
  @screen sm { grid-template-columns: 1fr; }
}
.home-ach-card {
  position: relative; height: 150px; border-radius: 14px; overflow: hidden;
  background-size: cover; background-position: center top;
  display: block; text-decoration: none; transition: transform 0.2s;
  &:hover { transform: scale(1.02); }
}
.home-ach-ov { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.25)); }
.home-ach-tag {
  position: absolute; top: 0.75rem; left: 0.75rem; z-index: 1;
  background: rgba(229,9,20,0.9); color: #fff; font-size: 0.68rem; font-weight: 700;
  padding: 0.2rem 0.6rem; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.07em;
}
.home-ach-title {
  position: absolute; bottom: 0.9rem; left: 0.9rem; right: 0.9rem; z-index: 1;
  color: #fff; font-weight: 700; font-size: 0.9rem; line-height: 1.3;
}
</style>
