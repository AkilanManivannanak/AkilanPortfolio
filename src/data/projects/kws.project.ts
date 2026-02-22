import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const kwsProject: Project = {
  title: 'Noise-Robust Keyword Spotting for Distress Detection',
  picture: '/project-covers/noise_cover_image.png',
  placeholder: '/project-covers/noise_cover_image.png',
  slogan: 'End-to-end noise-robust KWS pipeline for emergency/distress intent detection',
  description: `Built an end-to-end noise-robust keyword spotting pipeline that detects emergency/distress intent in real-world noisy audio (streets/vehicles/crowds).

Implemented feature extraction (log-Mel + MFCC), robustness training (noise mixing + SpecAugment), and evaluated performance across SNR buckets (clean/20 dB/10 dB/0 dB) with deployability stats (model size + p95 latency).

Technical Stack:
- Python, Jupyter/Colab
- PyTorch + torchaudio, soundfile
- NumPy / pandas, scikit-learn (reports + confusion matrix), matplotlib`,
  duration: 1,
  logo: 'kws.svg',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'GitHub Repository',
      link: 'https://github.com/AkilanManivannanak/noise-robust-kws-distress-detection',
    },
  ],
  type: [ProjectType.App],
  context: ProjectContext.Personal,
  id: 'kws1',
  technos: [
    TechnosList.Python,
    TechnosList.PyTorch,
    TechnosList.Numpy,
    TechnosList.Pandas,
    TechnosList.ScikitLearn,
    TechnosList.Matplotlib,
  ],
};
