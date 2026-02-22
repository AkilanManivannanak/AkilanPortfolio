import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const archimedisXp: Experience = {
  id: 'archimedis1',
  logo: '/experience-covers/Archimedics_logo.jpg',
  description: `Assisted with designated software development duties, encompassing documentation (algorithms/flowcharts), testing assistance, and fundamental debugging. Provided consistent progress updates and recommendations for enhancement to the reporting manager.`,
  title: 'Archimedis Digital',
  technos: [],
  year: 2023,
  type: ExperienceType.Job,
  duration: differenceInMonths(new Date(2023, 3, 1), new Date(2023, 1, 1)),
  role: 'Software Development Intern',
  links: [],
  location: 'Chennai, India',
};
