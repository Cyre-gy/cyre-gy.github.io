/** Resolve a path against the configured GitHub Pages base. href('about/') → /REPOSITORY/about/ */
export const href = (p = '') =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '');

export const profile = {
  name: 'Cherry Rose Gunay',
  location: 'Lucban, Quezon, Philippines',
  email: 'gunaycherryrose@gmail.com',
  linkedin: 'https://linkedin.com/in/cherry-rose-gunay',
  github: 'https://github.com/Cyre-gy',
  school: 'Southern Luzon State University',
  degree: 'Bachelor of Science in Information Technology',
  intro:
    "I'm Cherry Rose Gunay, a fourth-year Information Technology student at Southern Luzon State University. I'm interested in building practical web applications, exploring thoughtful interface design, and creating systems that help people work more efficiently.",
  // To enable a résumé download: put a PDF at public/Cherry-Rose-Gunay-Resume.pdf and set this to 'Cherry-Rose-Gunay-Resume.pdf'
  resumePdf: null as string | null,
};

export const skillGroups = [
  { title: 'Programming languages', items: [['C++', 'Intermediate'], ['C', 'Intermediate'], ['Java', 'Intermediate']] },
  { title: 'Database', items: [['MySQL', 'Intermediate']] },
  { title: 'Frameworks & libraries', items: [['Bootstrap', 'Intermediate']] },
  { title: 'Development tools', items: [['XAMPP', 'Intermediate'], ['Git & GitHub', 'Basic'], ['Android Studio', 'Basic']] },
  { title: 'Productivity tools', items: [['Microsoft Word', 'Intermediate'], ['Microsoft Excel', 'Intermediate'], ['Microsoft PowerPoint', 'Advanced'], ['Google Docs & Google Sheets', 'Intermediate']] },
] as { title: string; items: [string, string][] }[];

export const certifications = [
  { name: 'Computer Literacy Program', issuer: 'RALMEX', date: 'January 28, 2018' },
  { name: 'Computer Systems Servicing (NCII)', issuer: 'TESDA', date: 'July 24, 2026' },
  { name: 'AI Class ASEAN.org', issuer: 'TESDA', date: 'August 4, 2026' },
  { name: 'Game Development', issuer: 'Cisco Networking Academy', date: 'August 17, 2026' },
  { name: 'CSS Essential', issuer: 'Cisco Networking Academy', date: 'August 20, 2026' },
  { name: 'Data Analytics Essential', issuer: 'Cisco Networking Academy', date: 'August 20, 2026' },
  { name: 'HTML Essential', issuer: 'Cisco Networking Academy', date: 'August 20, 2026' },
  { name: 'Introduction to Modern AI', issuer: 'Cisco Networking Academy', date: null },
] as { name: string; issuer: string; date: string | null }[];

export const featuredCertNames = ['Computer Systems Servicing (NCII)', 'HTML Essential', 'CSS Essential', 'Data Analytics Essential'];

export const outreach = {
  title: 'Community Outreach — Microsoft Office Skills Training',
  role: 'Volunteer Instructor',
  org: 'SLSU Faculty-Led Initiative',
  place: 'Lucban, Quezon, Philippines',
  year: '2026',
  points: [
    'Facilitated hands-on training sessions in Microsoft Word, PowerPoint, and Excel.',
    'Explained technical concepts in accessible, beginner-friendly language for learners with limited prior computer experience.',
    'Worked with SLSU faculty and fellow students to plan, organize, and run the outreach sessions.',
  ],
};

export const isched = {
  name: 'iSched',
  fullName: 'iSched – Capstone Project',
  tagline: 'A web-based class scheduling management system.',
  year: '2026',
  role: 'Team Member',
  type: 'Academic capstone project (team-based)',
  overview:
    'iSched is a web-based class scheduling management system designed to automate schedule creation, faculty assignment, and timetable management for multiple academic departments. It was developed by a team as a capstone project at Southern Luzon State University.',
  problem:
    'Building class schedules for several departments means coordinating faculty, classes, and timetables so that nothing overlaps. Done manually, this kind of work tends to be slow, repetitive, and prone to conflicts. iSched explores how a web-based system can organize that work in one place.',
  goals: [
    'Automate schedule creation.',
    'Support faculty assignment.',
    'Make timetable management easier across multiple academic departments.',
    'Reduce scheduling conflicts, manual processes, and administrative workload (intended outcomes of the design, not measured results).',
  ],
  participation: ['Requirements analysis', 'System design', 'Database design', 'Front-end and back-end development', 'Testing and debugging', 'Technical documentation'],
  teamWork:
    'iSched was a team project. Gathering requirements, implementing features, and testing the system were done together with my teammates, so the system is shared work rather than an individual one.',
  // Optional: add specific things YOU worked on. Rendered only when non-empty.
  contributionDetails: [] as string[],
  process: [
    ['Requirements', 'Understanding what users need from a scheduling system.'],
    ['Design', 'Planning the system structure and the database.'],
    ['Build', 'Implementing features on the front end and back end.'],
    ['Test', 'System testing and debugging.'],
    ['Document', 'Writing technical documentation.'],
  ],
  considerations: [
    ['Conflicts', 'A timetable only works if related assignments do not overlap, so the data model has to make those relationships explicit.'],
    ['Many departments', 'Supporting several departments means keeping each one’s information organized without losing the bigger picture.'],
    ['Maintainability', 'Clear documentation and a well-structured database make a system easier for a team, and later maintainers, to work with.'],
  ],
  lessons: [
    'Following the software development lifecycle end to end showed me how requirements, database design, and testing depend on each other.',
    'Working in a team made communication and shared understanding as important as the code itself.',
    'Writing technical documentation pushed me to explain design decisions clearly, a skill that also helps when teaching.',
  ],
  // Add only technologies you can confirm. Rendered only when non-empty.
  technologies: [] as string[],
  // Add real links once available. Rendered only when set.
  repoUrl: null as string | null,
  demoUrl: 'https://i-sched.vercel.app/' as string | null,
};

/** Real iSched screenshots (files in public/images/). Names of faculty/signatories in the print view are blurred. */
export const screens = [
  { file: 'images/isched-landing.png', w: 1400, h: 648, title: 'Landing page', alt: 'iSched landing page for the SLSU Lucban Campus with Sign In and Sign Up buttons.', caption: 'Landing page with sign-in and sign-up for the SLSU Lucban Campus.' },
  { file: 'images/isched-manage.png', w: 558, h: 260, title: 'Manage schedules', alt: 'iSched Manage Schedules screen showing semesters on the left and a weekly calendar with filters for faculty, section, and room.', caption: 'Schedule management by semester, with a weekly calendar and filters for faculty, section, and room.' },
  { file: 'images/isched-departments.png', w: 558, h: 255, title: 'Departments', alt: 'iSched Departments screen listing colleges with their programs and subjects, with search and semester filters.', caption: 'Departments view listing colleges, programs, and subjects, with search and semester filters.' },
  { file: 'images/isched-signup.png', w: 551, h: 265, title: 'Account creation', alt: 'iSched Create your account form with name, email, password, and role selection.', caption: 'Account creation with role selection.' },
  { file: 'images/isched-schedule-print.png', w: 558, h: 263, title: 'Printable schedule', alt: 'A printable Schedule of Subjects sheet generated by iSched, with names blurred.', caption: 'Printable Schedule of Subjects sheet (names blurred for privacy).' },
] as { file: string; w: number; h: number; title: string; alt: string; caption: string }[];
