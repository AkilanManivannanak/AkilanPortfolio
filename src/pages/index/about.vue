<template>
  <div class="about-page">

    <!-- Hero Section -->
    <div class="about-hero">
      <img src="/users/akilan.png" class="about-hero-img" @error="onImgErr" alt="Akilan Manivannan" />
      <div class="about-hero-info">
        <h1 class="about-hero-name">Akilan Manivannan</h1>
        <p class="about-hero-role">AI / ML Engineer</p>
        <p class="about-hero-tag">Building the Future of Intelligent Systems</p>
        <div class="about-hero-links">
          <a href="https://github.com/AkilanManivannanak" target="_blank" class="hero-link">⌨ GitHub</a>
          <a href="https://www.linkedin.com/in/akilan-manivannan-a178212a7/" target="_blank" class="hero-link">💼 LinkedIn</a>
          <a href="mailto:ak.akilan.smart22@gmail.com" class="hero-link">✉ ak.akilan.smart22@gmail.com</a>
          <a href="tel:+13472217162" class="hero-link">📞 +1 347 221 7162</a>
        </div>
      </div>
    </div>

    <!-- Bio -->
    <section class="about-section">
      <h2 class="section-title">About Me</h2>
      <p class="about-bio-text">I specialize in bridging the gap between cutting-edge research and production-grade engineering. My work as an AI/ML Engineer is driven by a single goal: architecting scalable, high-performance systems that transform complex data into actionable intelligence.</p>
      <p class="about-bio-text">With a deep focus on the full ML lifecycle — from RAG-enhanced forecasting to real-time computer vision — I thrive on solving high-stakes problems that require both mathematical rigor and robust software engineering. I apply the same 1% daily improvement philosophy from my athletic career to my codebase — ensuring every project is optimized, disciplined, and high-performing.</p>
    </section>

    <!-- Technical Highlights -->
    <section class="about-section">
      <h2 class="section-title">Technical Highlights</h2>
      <div class="highlights-grid">
        <div v-for="h in highlights" :key="h.icon" class="highlight-card">
          <div class="hl-card-icon">{{ h.icon }}</div>
          <h3 class="hl-card-title">{{ h.title }}</h3>
          <p class="hl-card-body">{{ h.body }}</p>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="about-section">
      <h2 class="section-title">🎓 Education</h2>
      <div class="edu-cards">
        <div v-for="e in education" :key="e.school" class="edu-card">
          <img :src="e.cover" class="edu-card-cover" :alt="e.school" @error="onCoverErr" />
          <div class="edu-card-overlay"></div>
          <div class="edu-card-body">
            <span class="edu-deg-badge">{{ e.degree }}</span>
            <h3 class="edu-school">{{ e.school }}</h3>
            <p class="edu-field">{{ e.field }}</p>
            <p class="edu-loc">📍 {{ e.location }}</p>
            <div class="edu-meta-row">
              <span class="edu-meta-chip">🗓 {{ e.years }}</span>
              <span class="edu-meta-chip">🎓 CGPA: {{ e.cgpa }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class About extends Vue {
  head() { return { title: 'About — Akilan Manivannan' }; }

  onImgErr(e: Event) {
    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=AM&background=141414&color=e50914&size=256&bold=true';
  }
  onCoverErr(e: Event) {
    (e.target as HTMLImageElement).style.display = 'none';
  }

  education = [
    { degree: "M.S.", school: "Long Island University, Brooklyn", field: "Masters in Artificial Intelligence", location: "Brooklyn, NY, USA", years: "2025–2027", cgpa: "3.9–4.0", cover: "/Education/LIU.png" },
    { degree: "B.E.", school: "Panimalar Engineering College", field: "Bachelor of Engineering – Computer Science", location: "Chennai, TN, India", years: "2021–2024", cgpa: "7.5–10", cover: "/Education/panimalar Engineering college.jpeg" },
    { degree: "Dip.", school: "Panimalar Polytechnic College", field: "Diploma in Computer Science", location: "Chennai, TN, India", years: "2015–2018", cgpa: "7.23–10", cover: "/Education/panimalar Polytechnic college.png" },
  ];

  highlights = [
    { icon: '📈', title: 'Financial Intelligence & RAG', body: 'Stock Forecasting System (AAPL) — LSTM networks with strictly-grounded RAG merging quantitative time-series data with qualitative market insights via FastAPI.' },
    { icon: '🎯', title: 'Scalable Personalization', body: 'Two-Stage Recommender System (ALS + LambdaRank reranker) simulating the architecture used by Netflix and Amazon for massive-scale discovery.' },
    { icon: '👁', title: 'Real-Time Computer Vision', body: 'CNN-based ASL Alphabet Recognition (A–Z) for real-time webcam inference with low-latency OpenCV overlay, early stopping, and LR scheduling.' },
    { icon: '🏥', title: 'Healthcare & Signal Processing', body: 'Noise-Robust KWS for distress detection + AI-Powered Multi-Disease Risk Predictor (17 conditions) with Random Forest, CNN, and SHAP explainability.' },
    { icon: '🔧', title: 'Full-Stack Engineering', body: 'Guardian Drive stress detection on WESAD physio signals + Library/Pharmacy management systems — end-to-end production engineering.' },
  ];
}
</script>

<style lang="postcss" scoped>
.about-page {
  padding: 8rem 2.5rem 5rem;
  min-height: 100vh; max-width: 1100px; margin: 0 auto;
  @screen sm { padding: 6rem 1rem 4rem; }
}

.about-hero {
  display: flex; gap: 2.5rem; align-items: center;
  margin-bottom: 3.5rem;
  @screen sm { flex-direction: column; text-align: center; }
}
.about-hero-img {
  width: 180px; height: 180px; border-radius: 50%;
  object-fit: cover; object-position: top center;
  border: 4px solid #e50914;
  box-shadow: 0 0 40px rgba(229,9,20,.3);
  flex-shrink: 0;
}
.about-hero-name { font-size: clamp(1.8rem,3vw,2.8rem); font-weight: 800; color: #fff; }
.about-hero-role { color: #e50914; font-size: 1.1rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin: .3rem 0; }
.about-hero-tag { color: #999; font-size: .95rem; font-style: italic; margin-bottom: 1rem; }
.about-hero-links { display: flex; flex-wrap: wrap; gap: .5rem; @screen sm { justify-content: center; } }
.hero-link {
  color: #ccc; text-decoration: none; font-size: .82rem;
  padding: .35rem .9rem; background: rgba(255,255,255,.07);
  border-radius: 20px; border: 1px solid rgba(255,255,255,.12);
  transition: all .2s;
  &:hover { color: #fff; background: rgba(229,9,20,.2); border-color: rgba(229,9,20,.4); }
}

.about-section { margin-bottom: 3rem; }
.section-title {
  font-size: 1.6rem; font-weight: 700; color: #fff;
  margin-bottom: 1.5rem;
  border-left: 4px solid #e50914; padding-left: .75rem;
}

.about-bio-text { color: #bbb; line-height: 1.8; font-size: .95rem; margin-bottom: 1rem; }

.highlights-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.2rem;
  @screen sm { grid-template-columns: 1fr; }
}
.highlight-card {
  background: #1a1a1a; border: 1px solid rgba(255,255,255,.07);
  border-radius: 14px; padding: 1.4rem;
  transition: transform .2s, border-color .2s;
  &:hover { transform: translateY(-3px); border-color: rgba(229,9,20,.3); }
}
.hl-card-icon { font-size: 1.8rem; margin-bottom: .5rem; }
.hl-card-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: .4rem; }
.hl-card-body { color: #aaa; font-size: .83rem; line-height: 1.6; }

.edu-cards { display: flex; flex-direction: column; gap: 1.5rem; }
.edu-card {
  position: relative; border-radius: 16px; overflow: hidden;
  background: #1a1a1a; border: 1px solid rgba(255,255,255,.08);
  display: flex; align-items: stretch; min-height: 140px;
  transition: transform .2s, box-shadow .2s;
  &:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(229,9,20,.15); border-color: rgba(229,9,20,.3); }
  @screen sm { flex-direction: column; }
}
.edu-card-cover {
  width: 240px; flex-shrink: 0;
  object-fit: cover; object-position: center;
  @screen sm { width: 100%; height: 130px; }
}
.edu-card-overlay {
  position: absolute; left: 0; top: 0;
  width: 240px; height: 100%;
  background: linear-gradient(90deg, rgba(0,0,0,.3), transparent);
  @screen sm { display: none; }
}
.edu-card-body {
  padding: 1.4rem; flex: 1;
}
.edu-deg-badge {
  display: inline-block; background: #e50914; color: #fff;
  padding: .2rem .65rem; border-radius: 20px; font-size: .72rem;
  font-weight: 700; text-transform: uppercase; letter-spacing: .08em; margin-bottom: .5rem;
}
.edu-school { font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: .2rem; }
.edu-field { color: #e50914; font-size: .85rem; font-weight: 600; margin-bottom: .4rem; }
.edu-loc { color: #888; font-size: .8rem; margin-bottom: .6rem; }
.edu-meta-row { display: flex; gap: 1rem; flex-wrap: wrap; }
.edu-meta-chip { color: #ccc; font-size: .8rem; background: rgba(255,255,255,.07); padding: .25rem .7rem; border-radius: 8px; }
</style>
