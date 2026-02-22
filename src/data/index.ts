import { shuffle } from 'lodash';
import * as projects from './projects';
import { stockForecastingProject } from './projects';
import * as experiences from './experience';

export * from './projects';

export const allVideos = [];

export const allProjects = Object.values(projects);

export const allExperiences = Object.values(experiences).sort((a, b) => b.year - a.year);

export const featuredProjects = [
  projects.stockForecastingProject,
  projects.recommenderProject,
  projects.aslProject,
  projects.guardianDriveProject,
  projects.kwsProject,
  projects.multiDiseaseProject,
  projects.pharmacyProject,
  projects.libraryProject,
];

export const coverProject = stockForecastingProject;

export const popularProject = shuffle(allProjects);
