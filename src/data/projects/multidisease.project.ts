import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const multiDiseaseProject: Project = {
  title: 'Multi-Disease Health Risk Prediction (17 Conditions)',
  picture: '/project-covers/AI_Medicalproject_coverimage.png',
  placeholder: '/project-covers/AI_Medicalproject_coverimage.png',
  slogan: 'Random Forest + CNN + SHAP Explainability for 17-condition disease screening',
  description: `Built a multi-disease screening + decision-support prototype that runs modular per-disease pipelines: Random Forest models for tabular clinical data (labs/vitals/demographics) and CNN imaging pipelines for pneumonia + tuberculosis chest X-rays.

Generates a clinician-style report with per-disease risk scores, a stated 3–5 year risk/progression view, and explainability artifacts (SHAP + radar chart).

Technical Stack:
- Python (3.10.12)
- scikit-learn (RandomForestClassifier)
- TensorFlow/Keras (EfficientNetB0 + custom CNN)
- pandas / numpy
- SHAP`,
  duration: 2,
  logo: 'multidisease.svg',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'GitHub Repository',
      link: 'https://github.com/AkilanManivannanak/AI-Powered-Multi-Disease-Health-Risk-Prediction',
    },
  ],
  type: [ProjectType.App],
  context: ProjectContext.Personal,
  id: 'multidisease1',
  technos: [
    TechnosList.Python,
    TechnosList.TensorFlow,
    TechnosList.Keras,
    TechnosList.ScikitLearn,
    TechnosList.Pandas,
    TechnosList.Numpy,
  ],
};
