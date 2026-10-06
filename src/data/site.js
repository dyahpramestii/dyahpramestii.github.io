const BASE = import.meta.env.BASE_URL

export const CV_URL = `${BASE}cv/CV_Dyah_Pramesti.pdf`
export const CONTACT = {
  email: 'dyahpramesti.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dyahpramesti',
  whatsapp: 'https://wa.me/6285886636966',
}

export const capabilities = [
  { icon: 'PenTool', title: 'UI/UX Design', text: 'Wireframe to high-fidelity prototypes in Figma.' },
  { icon: 'Workflow', title: 'System Analysis', text: 'Requirements, user flows, UML and process modelling.' },
  { icon: 'Database', title: 'Database Design', text: 'ERD, normalization, and role-based access.' },
  { icon: 'Code2', title: 'Web Application Development', text: 'Laravel and React.js applications.' },
  { icon: 'BarChart3', title: 'Data Analysis', text: 'Data cleaning, modelling, and sentiment analysis.' },
]

export const experience = [
  {
    org: 'Kementerian Ketenagakerjaan',
    role: 'Intern, Web Application Development',
    period: 'Nov 2025 - May 2026',
    points: [
      'Analyzed requirements and designed user flows and UI in Figma.',
      'Designed a MySQL database with 20+ entities, normalization, and role-based access control.',
      'Built 3 web modules (CRUD and dashboard) with Laravel and React.js, then tested and debugged them.',
    ],
  },
  {
    org: 'PT Solusi Eksplorasi Rembulan Utama',
    role: 'Intern, UI UX Designer',
    period: 'Dec 2023 - Jan 2024',
    points: [
      'Redesigned the bekas.id marketplace website in Figma, from wireframes to high-fidelity designs across 8+ pages covering the homepage, product filtering, and product detail flows', 
      'Built 10+ reusable custom components within a design system to maintain consistency across pages and support frontend implementation.',
      'Prepared design specifications and handed off the designs to the Frontend and Backend teams, then reviewed the implementation to ensure consistency with the approved designs.'
    ],
  },
  {
    org: 'PT Microvac Indonesia',
    role: 'Intern, IT',
    period: 'Oct 2019 - Mar 2020',
    points: [
      'Implemented the ERP Desa Android interface in Java and Android Studio based on provided design specifications, covering input forms, data lists, and navigation flows.',
      'Reviewed and translated technical project documentation to support understanding of the application development process'
    ],
  },
]

export const skills = [
  { icon: 'PenTool', title: 'UI/UX', items: ['Figma', 'Wireframing', 'Prototyping', 'User Flow', 'Usability Testing'] },
  { icon: 'Database', title: 'System & Database', items: ['System Analysis', 'UML', 'ERD', 'MySQL', 'Normalization'] },
  { icon: 'Code2', title: 'Development', items: ['Laravel', 'React.js', 'JavaScript', 'Tailwind CSS', 'Git'] },
  { icon: 'BarChart3', title: 'Data', items: ['Python', 'Pandas', 'Sentiment Analysis', 'Data Visualization'] },
]

export const certifications = [
  { name: 'Assistant Web Developer', issuer: 'Badan Nasional Sertifikasi Profesi', year: '2026', url: 'https://drive.google.com/file/d/1bFddl3pZ-Tzr8PEC_d9ebBFMWcrHShkM/view?usp=sharing' },
  { name: 'Junior / Associate Data Scientist', issuer: 'Badan Nasional Sertifikasi Profesi', year: '2025', url: 'https://drive.google.com/file/d/13xTKZwvlp1pOf4rR-8ZihtzsLX-f3jru/view?usp=sharing' },
  { name: ' Junior Programmer', issuer: 'Badan Nasional Sertifikasi Profesi', year: '2020', url: 'https://drive.google.com/file/d/1fnNJO5WqIVdMRnyeJ-IMcHYZVSymYGRb/view?usp=sharing' },
]
