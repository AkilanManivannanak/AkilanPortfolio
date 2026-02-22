<template>
  <div class="Profile">

    <!-- ── INTRO: uses the EXACT akilan_intro.html as iframe ── -->
    <div v-if="!introDone" class="intro-frame-wrap">
      <iframe
        src="/akilan_intro.html"
        class="intro-frame"
        frameborder="0"
        scrolling="no"
        title="Intro"
      ></iframe>
    </div>

    <!-- ── PROFILE SELECTOR ── -->
    <transition name="fade-profiles">
      <div v-if="introDone" class="profile-selector">
        <div class="ps-logo">
          <span class="ps-logo-a">AKILAN</span><span class="ps-logo-f">FLIX</span>
        </div>
        <h1 class="ps-title">Who's Watching?</h1>
        <div class="ps-grid">

          <!-- Akilan Manivannan -->
          <button class="ps-card" type="button" @click="showAbout = true">
            <div class="ps-img-wrap">
              <img src="/users/akilan.png" class="ps-img" @error="onImgErr($event)" alt="Akilan" />
              <div class="ps-overlay"><span>👤</span></div>
            </div>
            <span class="ps-name">Akilan Manivannan</span>
            <span class="ps-role">AI Engineer</span>
          </button>

          <!-- Home -->
          <button class="ps-card" type="button" @click="go('home')">
            <div class="ps-img-wrap ps-icon" style="background:linear-gradient(135deg,#e50914,#7b0d0d)">
              <span class="ps-emoji">🏠</span>
              <div class="ps-overlay"><span>▶</span></div>
            </div>
            <span class="ps-name">Home</span>
            <span class="ps-role">Portfolio</span>
          </button>

          <!-- Projects -->
          <button class="ps-card" type="button" @click="go('projects')">
            <div class="ps-img-wrap ps-icon" style="background:linear-gradient(135deg,#1a237e,#3949ab)">
              <span class="ps-emoji">🚀</span>
              <div class="ps-overlay"><span>▶</span></div>
            </div>
            <span class="ps-name">Projects</span>
            <span class="ps-role">8 AI/ML Projects</span>
          </button>

          <!-- Skills -->
          <button class="ps-card" type="button" @click="go('skills')">
            <div class="ps-img-wrap ps-icon" style="background:linear-gradient(135deg,#1b5e20,#388e3c)">
              <span class="ps-emoji">⚡</span>
              <div class="ps-overlay"><span>▶</span></div>
            </div>
            <span class="ps-name">Skills</span>
            <span class="ps-role">35 Technologies</span>
          </button>

        </div>
      </div>
    </transition>

    <!-- ── ABOUT MODAL ── -->
    <transition name="modal-fade">
      <div v-if="showAbout" class="about-backdrop" @click.self="showAbout = false">
        <div class="about-box">
          <button class="about-x" type="button" @click="showAbout = false">✕</button>

          <div class="about-top">
            <img src="/users/akilan.png" class="about-photo" @error="onImgErr($event)" alt="Akilan" />
            <div class="about-top-right">
              <h2 class="about-name">Akilan Manivannan</h2>
              <p class="about-job">AI Engineer</p>
              <div class="about-links">
                <a href="https://github.com/AkilanManivannanak" target="_blank" class="alink">⌨ GitHub</a>
                <a href="https://www.linkedin.com/in/akilan-manivannan-a178212a7/" target="_blank" class="alink">💼 LinkedIn</a>
                <a href="mailto:ak.akilan.smart22@gmail.com" class="alink">✉ Email</a>
                <a href="tel:+13472217162" class="alink">📞 +1 347 221 7162</a>
              </div>
            </div>
          </div>

          <p class="about-tag">Building the Future of Intelligent Systems | AI/ML Engineer</p>
          <p class="about-bio">I specialize in bridging the gap between cutting-edge research and production-grade engineering. My work as an AI/ML Engineer is driven by a single goal: architecting scalable, high-performance systems that transform complex data into actionable intelligence. With a deep focus on the full ML lifecycle — from RAG-enhanced forecasting to real-time computer vision — I thrive on solving high-stakes problems that require both mathematical rigor and robust software engineering.</p>

          <div class="about-hls">
            <h3 class="about-hls-title">🔬 Technical Highlights</h3>
            <div v-for="h in highlights" :key="h.icon" class="about-hl">
              <span class="hl-icon">{{ h.icon }}</span>
              <div><strong>{{ h.title }}:</strong> {{ h.body }}</div>
            </div>
          </div>

          <div class="about-edu-wrap">
            <h3 class="about-hls-title" style="margin-top:1.2rem">🎓 Education</h3>
            <div v-for="e in education" :key="e.school" class="edu-mini">
              <span class="edu-mini-deg">{{ e.degree }}</span>
              <div>
                <div class="edu-mini-school">{{ e.school }}</div>
                <div class="edu-mini-meta">{{ e.years }} · CGPA: {{ e.cgpa }}</div>
              </div>
            </div>
          </div>

          <div class="about-actions">
            <button class="btn-red" type="button" @click="go('home')">Enter Portfolio ▶</button>
            <button class="btn-gray" type="button" @click="go('about')">Full Profile →</button>
            <button class="btn-gray" type="button" @click="showAbout = false">Close</button>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script lang="ts">
import { usersConstant } from '@constants';
import { routerPagesNames } from '@models';
import { AuthModule } from '@store';
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class ProfileSelect extends Vue {
  introDone = false;
  showAbout = false;

  // Total intro duration: ~6.5 seconds for the full animation
  INTRO_DURATION_MS = 6500;

  education = [
    { degree: "M.S.", school: "Long Island University, Brooklyn, NY", years: "2025–2027", cgpa: "3.9–4.0" },
    { degree: "B.E.", school: "Panimalar Engineering College, Chennai", years: "2021–2024", cgpa: "7.5–10" },
    { degree: "Dip.", school: "Panimalar Polytechnic, Chennai", years: "2015–2018", cgpa: "7.23–10" },
  ];

  highlights = [
    { icon: '📈', title: 'Financial Intelligence & RAG', body: 'Stock Forecasting System (AAPL) — LSTM networks with RAG merging quantitative time-series data with qualitative market insights.' },
    { icon: '🎯', title: 'Scalable Personalization', body: 'Two-Stage Recommender System (ALS + LambdaRank) simulating the architecture used by Netflix and Amazon for massive-scale discovery.' },
    { icon: '👁', title: 'Real-Time Computer Vision', body: 'CNN-based ASL Alphabet Recognition (A–Z) for real-time webcam inference with low-latency OpenCV overlay.' },
    { icon: '🏥', title: 'Healthcare & Signal Processing', body: 'Noise-Robust KWS for distress detection + AI-Powered Multi-Disease Risk Predictor (17 conditions) with SHAP explainability.' },
    { icon: '🔧', title: 'Full-Stack Engineering', body: 'Guardian Drive stress detection pipeline + Library/Pharmacy management systems — end-to-end production engineering.' },
  ];

  onImgErr(e: Event) {
    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=AM&background=141414&color=e50914&size=256&bold=true';
  }

  login() {
    AuthModule.actions.connexionRequest(usersConstant[0]);
  }

  go(dest: string) {
    this.showAbout = false;
    this.login();
    this.$nextTick(() => {
      if (dest === 'home') this.$router.push({ name: routerPagesNames.index.index });
      else if (dest === 'projects') this.$router.push({ name: routerPagesNames.index.projects });
      else if (dest === 'skills') this.$router.push({ name: routerPagesNames.index.skills });
      else if (dest === 'about') this.$router.push({ name: routerPagesNames.index.about });
    });
  }

  mounted() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    // Wait for the full intro animation duration then show profile cards
    setTimeout(() => {
      this.introDone = true;
    }, this.INTRO_DURATION_MS);
  }

  destroyed() {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'relative';
  }
}
</script>

<style lang="postcss" scoped>
.Profile {
  position: fixed; left: 0; right: 0; top: 0; bottom: 0;
  z-index: 20000; background: #000; color: #fff; height: 100vh;
}

/* ── INTRO IFRAME ── */
.intro-frame-wrap {
  position: absolute; inset: 0; z-index: 10; background: #000;
}
.intro-frame {
  width: 100%; height: 100%; border: none; display: block; background: #000;
}

/* ── PROFILE SELECTOR ── */
.profile-selector {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  width: 100%; height: 100%;
  background: radial-gradient(ellipse at center, #141414 0%, #000 100%);
  gap: 2rem; padding: 2rem 1rem; position: relative;
}

.ps-logo {
  font-family: Impact, 'Arial Narrow Bold', sans-serif;
  font-size: 2.8rem; letter-spacing: 3px;
  position: absolute; top: 1.5rem; left: 2rem;
}
.ps-logo-a { color: #fff; }
.ps-logo-f { color: #e50914; text-shadow: 0 0 20px rgba(229,9,20,.5); }

.ps-title { font-size: clamp(1.8rem,3vw,2.8rem); font-weight: 300; color: #fff; }

.ps-grid {
  display: flex; flex-direction: row;
  gap: 2rem; flex-wrap: wrap; justify-content: center;
}

.ps-card {
  display: flex; flex-direction: column; align-items: center;
  gap: .65rem; cursor: pointer; background: none; border: none;
  padding: 0; transition: transform .2s;
}
.ps-card:hover { transform: scale(1.08); }
.ps-card:hover .ps-img-wrap { border-color: #fff; }
.ps-card:hover .ps-overlay { opacity: 1; }
.ps-card:hover .ps-name { color: #fff; }

.ps-img-wrap {
  position: relative; width: 148px; height: 148px;
  border-radius: 8px; overflow: hidden;
  border: 3px solid transparent; transition: border-color .2s;
}
.ps-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.ps-icon { display: flex; align-items: center; justify-content: center; }
.ps-emoji { font-size: 4rem; line-height: 1; }
.ps-overlay {
  position: absolute; inset: 0; background: rgba(0,0,0,.4);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity .2s; font-size: 2.5rem;
}
.ps-name { color: #aaa; font-size: 1rem; font-weight: 500; letter-spacing: .04em; transition: color .2s; text-align: center; }
.ps-role { color: #555; font-size: .72rem; letter-spacing: .06em; }

/* ── ABOUT MODAL ── */
.about-backdrop {
  position: fixed; inset: 0; z-index: 30000;
  background: rgba(0,0,0,.88);
  display: flex; align-items: center; justify-content: center;
  padding: 1rem; overflow-y: auto;
}
.about-box {
  background: #1c1c1c; border: 1px solid rgba(229,9,20,.3);
  border-radius: 16px; max-width: 680px; width: 100%;
  padding: 2rem; position: relative;
  max-height: 90vh; overflow-y: auto;
  scrollbar-width: thin; scrollbar-color: #333 transparent;
}
.about-x {
  position: absolute; top: 1rem; right: 1rem;
  background: rgba(255,255,255,.08); border: none; color: #fff;
  width: 34px; height: 34px; border-radius: 50%; cursor: pointer;
  font-size: .95rem; display: flex; align-items: center; justify-content: center;
  transition: background .2s;
}
.about-x:hover { background: rgba(229,9,20,.5); }
.about-top { display: flex; gap: 1.5rem; align-items: flex-start; margin-bottom: 1.25rem; }
.about-photo {
  width: 110px; height: 110px; border-radius: 10px;
  object-fit: cover; object-position: top center;
  border: 2px solid rgba(229,9,20,.5); flex-shrink: 0;
}
.about-name { font-size: 1.7rem; font-weight: 700; color: #fff; margin-bottom: .2rem; }
.about-job { color: #e50914; font-size: .9rem; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; margin-bottom: .7rem; }
.about-links { display: flex; flex-wrap: wrap; gap: .4rem; }
.alink {
  color: #aaa; text-decoration: none; font-size: .78rem;
  padding: .28rem .65rem; background: rgba(255,255,255,.07);
  border-radius: 20px; border: 1px solid rgba(255,255,255,.1);
  transition: all .2s; display: inline-block;
}
.alink:hover { color: #fff; background: rgba(229,9,20,.2); border-color: rgba(229,9,20,.4); }
.about-tag { color: #e50914; font-style: italic; font-size: .9rem; margin-bottom: .75rem; }
.about-bio { color: #bbb; line-height: 1.7; font-size: .87rem; margin-bottom: 1.2rem; }
.about-hls-title {
  color: #fff; font-size: 1rem; font-weight: 600; margin-bottom: .7rem;
  border-bottom: 1px solid rgba(229,9,20,.25); padding-bottom: .5rem;
}
.about-hl { display: flex; gap: .7rem; color: #bbb; font-size: .83rem; line-height: 1.6; margin-bottom: .65rem; }
.hl-icon { font-size: 1rem; flex-shrink: 0; margin-top: .1rem; }
.edu-mini { display: flex; gap: .75rem; align-items: flex-start; margin-bottom: .6rem; color: #bbb; font-size: .83rem; }
.edu-mini-deg {
  background: rgba(229,9,20,.15); color: #e50914;
  padding: .2rem .5rem; border-radius: 6px; font-weight: 700;
  font-size: .72rem; flex-shrink: 0; border: 1px solid rgba(229,9,20,.3); margin-top: .1rem;
}
.edu-mini-school { font-weight: 600; color: #ddd; margin-bottom: .1rem; }
.edu-mini-meta { color: #888; font-size: .78rem; }
.about-actions { display: flex; gap: .8rem; margin-top: 1.5rem; flex-wrap: wrap; }
.btn-red {
  background: #e50914; color: #fff; border: none;
  padding: .7rem 1.4rem; border-radius: 8px;
  font-size: .95rem; font-weight: 600; cursor: pointer; transition: background .2s;
}
.btn-red:hover { background: #b20710; }
.btn-gray {
  background: rgba(255,255,255,.1); color: #fff;
  border: 1px solid rgba(255,255,255,.18);
  padding: .7rem 1.4rem; border-radius: 8px;
  font-size: .95rem; cursor: pointer; transition: background .2s;
}
.btn-gray:hover { background: rgba(255,255,255,.17); }

/* ── TRANSITIONS ── */
.fade-profiles-enter-active { transition: opacity .8s ease, transform .8s ease; }
.fade-profiles-enter { opacity: 0; transform: scale(1.03); }
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity .2s; }
.modal-fade-enter, .modal-fade-leave-to { opacity: 0; }

@media (max-width: 600px) {
  .ps-grid { gap: 1rem; }
  .ps-img-wrap { width: 105px; height: 105px; }
  .about-top { flex-direction: column; align-items: center; text-align: center; }
  .about-links { justify-content: center; }
  .ps-logo { font-size: 2rem; top: 1rem; left: 1rem; }
}
</style>
