import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const aslProject: Project = {
  title: 'ASL Alphabet Recognition (A–Z) — Real-Time Webcam CNN',
  picture: '/project-covers/A-Z_Cover.png',
  placeholder: '/project-covers/A-Z_Cover.png',
  slogan: 'Real-time ASL fingerspelling recognition with CNN + OpenCV webcam inference',
  description: `Trained a custom CNN to recognize ASL fingerspelling letters A–Z from hand images and ran real-time webcam inference with an OpenCV overlay showing the predicted letter + confidence.

Includes a reproducible training setup (augmentation, early stopping, LR scheduling) and exports deployable artifacts (best model, label encoder, training curves, confusion matrix).

Technical Stack:
- Python, TensorFlow/Keras, OpenCV
- NumPy, scikit-learn, joblib, matplotlib`,
  duration: 1,
  logo: 'asl.svg',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'GitHub Repository',
      link: 'https://github.com/AkilanManivannanak/ASL-Alphabet-Recognition_A-Z_-Real-Time-Webcam-CNN',
    },
  ],
  type: [ProjectType.App],
  context: ProjectContext.Personal,
  id: 'asl1',
  technos: [
    TechnosList.Python,
    TechnosList.TensorFlow,
    TechnosList.Keras,
    TechnosList.OpenCV,
    TechnosList.Numpy,
    TechnosList.ScikitLearn,
  ],
};
