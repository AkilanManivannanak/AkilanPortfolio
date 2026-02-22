import { TechnosList } from '@constants';
import { Project, ProjectContext, ProjectType } from '@models';

export const libraryProject: Project = {
  title: 'Library Management System — CLI + SQLite',
  picture: '/project-covers/Library_cover.png',
  placeholder: '/project-covers/Library_cover.png',
  slogan: 'Command-line library system with loan tracking, due dates, and late fee calculation',
  description: `Built a lightweight command-line library system in pure Python + SQLite that manages book inventory with multiple copies, borrowers, and loan lifecycle (issue → due-date tracking → return).

Includes overdue detection, late-fee calculation ($0.50/day default), and quick reporting for active loans, overdue loans, and borrower history.

Technical Stack:
- Python 3.8+
- SQLite (sqlite3) with foreign keys enabled (PRAGMA foreign_keys = ON)
- Standard library: datetime, textwrap`,
  duration: 1,
  logo: 'library.svg',
  videos: [],
  year: 2024,
  links: [
    {
      title: 'GitHub Repository',
      link: 'https://github.com/AkilanManivannanak/Library-Management-System-in-Python',
    },
  ],
  type: [ProjectType.App],
  context: ProjectContext.Personal,
  id: 'library1',
  technos: [
    TechnosList.Python,
  ],
};
