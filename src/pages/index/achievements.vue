<template>
  <div class="ach-page">
    <h2 class="ach-title">Achievements</h2>
    <div class="ach-list">

      <!-- Achievement 1: IIT Madras -->
      <div class="ach-card">
        <div class="ach-cover" style="background-image:url('/achievements/images.jpeg')">
          <div class="ach-cover-ov"></div>
          <div class="ach-number">01</div>
          <div class="ach-tag">Machine Learning & Research</div>
        </div>
        <div class="ach-body">
          <h3 class="ach-heading">Researcher — IIT Madras IMPULSE 2k23</h3>
          <p class="ach-sub">Sign Language Recognition using CNN Algorithm with Machine Learning Techniques</p>
          <ul class="ach-bullets">
            <li>🏆 Developed a deep learning system using CNN to bridge communication barriers for the deaf and hard-of-hearing community.</li>
            <li>⚙️ Engineered a pipeline involving image preprocessing, feature extraction, and gesture detection to decode sign language into text and audio.</li>
            <li>🛠 Tech Stack: Python, CNN, LSTM, Computer Vision</li>
          </ul>
          <a href="https://github.com/AkilanManivannanak/Sign-Language-Regonization-using-CNN-Algorithm-with-Meachine-Learning-Techniques-Paper" target="_blank" class="ach-link">
            ⌨ View Research Paper on GitHub →
          </a>
        </div>
      </div>

      <!-- Achievement 2: IDEATHON 2022 -->
      <div class="ach-card">
        <div class="ach-cover" style="background-image:url('/achievements/ideathon.png')">
          <div class="ach-cover-ov"></div>
          <div class="ach-number">02</div>
          <div class="ach-tag">Innovation & Design</div>
        </div>
        <div class="ach-body">
          <h3 class="ach-heading">IDEATHON 2022 — Panimalar Engineering College</h3>
          <p class="ach-sub">Traffic Sense – Adaptive Smart City Traffic Management</p>
          <ul class="ach-bullets">
            <li>💡 Designed a two-stage ML pipeline to predict near-term congestion (5–15 minutes ahead) and recommend optimal signal timing.</li>
            <li>📊 Utilized supervised learning to analyze historical patterns, vehicle counts, and intersection attributes to reduce urban delay and fuel waste.</li>
            <li>🚦 Developed a scalable model for proactive congestion control and emergency vehicle priority.</li>
          </ul>
          <a href="https://github.com/AkilanManivannanak/Traffic-Sense-Ideathon" target="_blank" class="ach-link">
            📥 View Presentation on GitHub →
          </a>
        </div>
      </div>

      <!-- Achievement 3: Mr. Tamil Nadu -->
      <div class="ach-card">
        <div class="ach-cover" style="background-image:url('/achievements/Mr Tamil Nadu.jpg')">
          <div class="ach-cover-ov"></div>
          <div class="ach-number">03</div>
          <div class="ach-tag">Athletics</div>
        </div>
        <div class="ach-body">
          <h3 class="ach-heading">Mr. Tamil Nadu Men's Physique — State Level 🥈</h3>
          <p class="ach-sub">Silver Medal / Runner-up — State Level Championship</p>
          <ul class="ach-bullets">
            <li>🥈 Secured Silver Medal in a highly competitive state-level Men's Physique championship.</li>
            <li>💪 Demonstrated world-class discipline, rigorous time management, and the mental resilience required to compete at the highest tier of physical excellence.</li>
            <li>🔄 The "Engineer's Edge": I apply the same 1% daily improvement philosophy from my athletic career to my codebase — ensuring every project is optimized, disciplined, and high-performing.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
@Component({})
export default class Achievements extends Vue {
  head() { return { title: 'Achievements' }; }
}
</script>

<style lang="postcss" scoped>
.ach-page {
  padding: 10rem 2.5rem 5rem; min-height: 100vh;
  @screen sm { padding: 7rem 1rem 4rem; }
}
.ach-title {
  font-size: 2rem; font-weight: 700; color: #fff;
  margin-bottom: 2.5rem; letter-spacing: 0.03em;
  border-left: 4px solid #e50914; padding-left: .75rem;
}
.ach-list { display: flex; flex-direction: column; gap: 2.5rem; max-width: 1000px; }
.ach-card {
  background: #1a1a1a; border-radius: 16px; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  display: flex; transition: transform 0.2s, box-shadow 0.2s;
  @screen sm { flex-direction: column; }
}
.ach-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(229,9,20,0.15);
  border-color: rgba(229,9,20,0.3);
}
.ach-cover {
  width: 280px; flex-shrink: 0; position: relative;
  background-size: cover; background-position: center; min-height: 220px;
  @screen sm { width: 100%; min-height: 180px; }
}
.ach-cover-ov { position: absolute; inset: 0; background: rgba(0,0,0,0.45); }
.ach-number {
  position: absolute; top: 1rem; left: 1rem;
  font-size: 3.5rem; font-weight: 900; color: rgba(229,9,20,0.7);
  font-family: Impact, sans-serif; line-height: 1; z-index: 1;
}
.ach-tag {
  position: absolute; bottom: 1rem; left: 1rem; z-index: 1;
  background: rgba(229,9,20,0.9); color: #fff;
  font-size: 0.72rem; font-weight: 700; padding: 0.28rem 0.7rem;
  border-radius: 12px; letter-spacing: 0.08em; text-transform: uppercase;
}
.ach-body { padding: 1.6rem; flex: 1; }
.ach-heading { font-size: 1.15rem; font-weight: 700; color: #fff; margin-bottom: 0.35rem; }
.ach-sub { color: #e50914; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
.ach-bullets {
  list-style: none; padding: 0; margin: 0 0 1rem;
  display: flex; flex-direction: column; gap: 0.6rem;
}
.ach-bullets li { color: #ccc; font-size: 0.85rem; line-height: 1.6; }
.ach-link {
  display: inline-block; color: #4fc3f7; text-decoration: none;
  font-size: 0.85rem; font-weight: 600;
  padding: 0.4rem 1rem; border-radius: 8px;
  background: rgba(79,195,247,0.1); border: 1px solid rgba(79,195,247,0.3);
  transition: all 0.2s;
  &:hover { background: rgba(79,195,247,0.2); color: #fff; }
}
</style>
