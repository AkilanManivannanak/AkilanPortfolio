import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const guardianDriveProject: Project = {
  title: 'GuardianDrive — Stress Detection Pipeline',
  picture: '/project-covers/guardian_Cover_image.png',
  placeholder: '/project-covers/guardian_Cover_image.png',
  slogan: 'Stress/non-stress detection on WESAD biosignals with SQI gating & deployability benchmarks',
  description: `Built a stress/non-stress detection pipeline on WESAD chest signals (ECG/EDA/Resp/Temp) using windowing + train-only normalization (no leakage) and LOSO subject holdout for realistic generalization.

Added Signal Quality Index (SQI) gating with abstain behavior, robustness tests (noise + channel dropout), and a latency benchmark (p50/p95) to enforce deployability constraints.

Technical Stack:
- Core: Python, PyTorch, numpy, scipy, pandas, scikit-learn, PyYAML, tqdm, rich
- Model: 1D CNN (Conv1d + BN + MaxPool + Dropout + GAP head)
- ML discipline: config-driven runs, Make targets for train/eval/bench
- Quality + CI: SQI sweep tooling + GitHub Actions (ruff + pytest)`,
  duration: 2,
  logo: 'guardiandrive.svg',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'GitHub Repository',
      link: 'https://github.com/AkilanManivannanak/guardian-drive',
    },
  ],
  type: [ProjectType.App],
  context: ProjectContext.Personal,
  id: 'guardiandrive1',
  technos: [
    TechnosList.Python,
    TechnosList.PyTorch,
    TechnosList.Numpy,
    TechnosList.Scipy,
    TechnosList.Pandas,
    TechnosList.ScikitLearn,
    TechnosList.Pytest,
  ],
};
