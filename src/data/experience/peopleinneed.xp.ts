import { ExperienceType } from '@models';
import { differenceInMonths } from 'date-fns';
import { Experience } from 'models/xp.model';

export const peopleInNeedXp: Experience = {
  id: 'peopleinneed1',
  logo: '/experience-covers/people in need.jpeg',
  description: `Volunteer full-stack development for People In Need Inc. Co-built the public website end-to-end (information architecture, UI, and core user flows) on Google Sites, and implemented a lightweight backend using Node.js serverless functions to process donations, volunteer intake/event sign-ups, and help requests. Persisted submissions in Airtable for internal tracking and follow-up, with input validation and secure API key handling. Shipped a monthly newsletter workflow for subscribers including subscriber capture, list management, and scheduled sends.`,
  title: 'People In Need INC',
  technos: [],
  year: 2025,
  type: ExperienceType.Volunteer,
  duration: differenceInMonths(new Date(2026, 0, 1), new Date(2025, 11, 1)),
  role: 'Volunteer Experience (Full Stack Development - (Unpaid))',
  links: [{ link: 'https://www.peopleinneed.org', title: 'People In Need Website' }],
  location: 'Remote',
};
