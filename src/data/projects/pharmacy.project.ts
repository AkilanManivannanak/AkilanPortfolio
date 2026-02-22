import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const pharmacyProject: Project = {
  title: 'Pharmacy Management System — SQLite CLI + FastAPI',
  picture: '/project-covers/pharmacy_cover.png',
  placeholder: '/project-covers/pharmacy_cover.png',
  slogan: 'Lightweight pharmacy operations system with CLI and REST API interfaces',
  description: `A lightweight pharmacy operations system built in Python + SQLite, delivered in two interfaces:
1. A menu-driven CLI for day-to-day workflows (inventory, suppliers, sales, prescriptions, reports).
2. A FastAPI REST API exposing a /medicines endpoint with Swagger/OpenAPI docs for easy integration/testing.

Technical Stack:
- Python 3, SQLite (via standard library sqlite3)
- FastAPI, Uvicorn, Pydantic`,
  duration: 1,
  logo: 'pharmacy.svg',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'GitHub Repository',
      link: 'https://github.com/AkilanManivannanak/Pharmacy-management-system',
    },
  ],
  type: [ProjectType.App],
  context: ProjectContext.Personal,
  id: 'pharmacy1',
  technos: [
    TechnosList.Python,
    TechnosList.FastAPI,
  ],
};
