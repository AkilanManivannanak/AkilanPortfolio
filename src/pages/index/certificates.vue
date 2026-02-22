<template>
  <div class="sm:px-2 sm:flex sm:justify-center sm:flex-col relative block w-full px-10 pt-40 pb-20">
    <h2 class="sm:text-center mb-8 font-semibold">{{ $t($messages.Nav.Certificates) }}</h2>
    <div class="cert-grid">
      <a
        v-for="cert in certificates"
        :key="cert.id"
        :href="cert.url"
        target="_blank"
        rel="noopener noreferrer"
        class="cert-card group"
      >
        <div class="cert-icon">
          <img :src="cert.logo" :alt="cert.issuer" class="cert-logo" />
        </div>
        <div class="cert-body">
          <span class="cert-issuer">{{ cert.issuer }}</span>
          <h3 class="cert-title">{{ cert.title }}</h3>
          <div class="cert-footer">
            <span class="cert-link">View Credential →</span>
          </div>
        </div>
        <div class="cert-glow"></div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  logo: string;
  url: string;
}

@Component({})
export default class Certificates extends Vue {
  head() {
    return { title: 'Certificates' };
  }

  certificates: Certificate[] = [
    {
      id: 'google-ai-essentials',
      title: 'Google AI Essentials',
      issuer: 'Google / Coursera',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
      url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/Z9LEABFXBCPR',
    },
    {
      id: 'google-ai-ml-gcp',
      title: 'Introduction to AI and Machine Learning on Google Cloud',
      issuer: 'Google Cloud / Coursera',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png',
      url: 'https://www.coursera.org/account/accomplishments/records/GLY44CSLXO3F',
    },
    {
      id: 'jpmorgan-quant',
      title: 'Quantitative Research Job Simulation',
      issuer: 'J.P. Morgan / Forage',
      logo: '/JPMorgan.png',
      url: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_69598376f76d215bcfcb5af0_1767490272332_completion_certificate.pdf',
    },
    {
      id: 'jpmorgan-swe',
      title: 'Software Engineering Job Simulation',
      issuer: 'J.P. Morgan / Forage',
      logo: '/JPMorgan.png',
      url: 'https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_69598376f76d215bcfcb5af0_1768425023732_completion_certificate.pdf',
    },
  ];
}
</script>

<style lang="postcss" scoped>
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.cert-card {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 1.25rem;
  text-decoration: none;
  color: white;
  transition: border-color 0.25s ease, transform 0.2s ease, background 0.25s ease;
  overflow: hidden;
  cursor: pointer;
}

.cert-card:hover {
  border-color: rgba(228, 9, 19, 0.5);
  background: rgba(228, 9, 19, 0.05);
  transform: translateY(-3px);
}

.cert-glow {
  position: absolute;
  inset: 0;
  border-radius: 8px;
  background: radial-gradient(circle at 50% 0%, rgba(228, 9, 19, 0.12), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.cert-card:hover .cert-glow {
  opacity: 1;
}

.cert-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.cert-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cert-body {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
}

.cert-issuer {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #e40913;
  opacity: 0.85;
}

.cert-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
  margin: 0;
}

.cert-footer {
  margin-top: 0.4rem;
}

.cert-link {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  transition: color 0.2s ease;
}

.cert-card:hover .cert-link {
  color: rgba(255, 255, 255, 0.85);
}

@screen sm {
  .cert-grid {
    grid-template-columns: 1fr;
  }
}
</style>
