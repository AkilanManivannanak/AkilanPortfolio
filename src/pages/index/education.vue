<template>
  <div class="edu-page">
    <h2 class="edu-title">Education</h2>
    <div class="edu-grid">
      <div v-for="edu in educations" :key="edu.id" class="edu-card">
        <div class="edu-cover" :style="{ backgroundImage: `url('${edu.cover}')` }">
          <div class="edu-cover-overlay"></div>
          <div class="edu-badge">{{ edu.degree }}</div>
        </div>
        <div class="edu-body">
          <h3 class="edu-school">{{ edu.school }}</h3>
          <p class="edu-field">{{ edu.field }}</p>
          <p class="edu-location">📍 {{ edu.location }}</p>
          <div class="edu-meta">
            <span class="edu-chip">🗓 {{ edu.years }}</span>
            <span class="edu-chip">🎓 CGPA: {{ edu.cgpa }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Education extends Vue {
  head() { return { title: 'Education' }; }

  educations = [
    {
      id: 1, degree: "M.S.",
      school: "Long Island University, Brooklyn",
      field: "Masters in Artificial Intelligence",
      location: "Brooklyn, NY, USA",
      years: "2025 – 2027", cgpa: "3.9 – 4.0",
      cover: "/Education/LIU.png",
    },
    {
      id: 2, degree: "B.E.",
      school: "Panimalar Engineering College",
      field: "Bachelor of Engineering – Computer Science",
      location: "Chennai, TN, India",
      years: "2021 – 2024", cgpa: "7.5 – 10",
      cover: "/Education/panimalar Engineering college.jpeg",
    },
    {
      id: 3, degree: "Dip.",
      school: "Panimalar Polytechnic College",
      field: "Diploma in Computer Science",
      location: "Chennai, TN, India",
      years: "2015 – 2018", cgpa: "7.23 – 10",
      cover: "/Education/panimalar Polytechnic college.png",
    },
  ];
}
</script>

<style lang="postcss" scoped>
.edu-page {
  padding: 10rem 2.5rem 5rem; min-height: 100vh;
  @screen sm { padding: 7rem 1rem 4rem; }
}
.edu-title {
  font-size: 2rem; font-weight: 700; color: #fff;
  margin-bottom: 2.5rem;
  border-left: 4px solid #e50914; padding-left: .75rem;
}
.edu-grid { display: flex; flex-direction: column; gap: 2rem; max-width: 950px; }
.edu-card {
  background: #1a1a1a; border-radius: 16px; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; transition: transform 0.2s, box-shadow 0.2s;
  @screen sm { flex-direction: column; }
}
.edu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(229,9,20,0.15);
  border-color: rgba(229,9,20,0.3);
}
.edu-cover {
  width: 260px; flex-shrink: 0; position: relative;
  background-size: cover; background-position: center; min-height: 170px;
  @screen sm { width: 100%; min-height: 150px; }
}
.edu-cover-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1));
}
.edu-badge {
  position: absolute; bottom: 1rem; left: 1rem; z-index: 1;
  background: #e50914; color: #fff; font-weight: 700;
  font-size: 0.8rem; padding: 0.3rem 0.8rem;
  border-radius: 20px; letter-spacing: 0.08em; text-transform: uppercase;
}
.edu-body { padding: 1.5rem; flex: 1; }
.edu-school { font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 0.3rem; }
.edu-field { color: #e50914; font-size: 0.9rem; font-weight: 600; letter-spacing: 0.06em; margin-bottom: 0.6rem; }
.edu-location { color: #888; font-size: 0.85rem; margin-bottom: 0.8rem; }
.edu-meta { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.edu-chip { color: #ccc; font-size: 0.85rem; background: rgba(255,255,255,0.07); padding: 0.3rem 0.8rem; border-radius: 8px; }
</style>
