export const me = {
  name: "Malte Bär",
  imgUrl: "/malte.jpg",
  profession: "Software Developer",
  location: "Potsdam, Germany",
  mail: "maltebaer@posteo.de",
  gitHubUrl: "https://github.com/maltebaer/",
  linkedInUrl: "https://linkedin.com/in/maltebaer/",
  skills: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Testing", "Tailwind", "React", "Laravel", "TALL"],
}

export const projects = [
  {
    name: "ELAN",
    website: "https://elanberlin.com",
    github: "https://github.com/maltebaer/elan",
    description: "Portfolio website of a Berlin-based event agency.",
    technologies: ["React", "TypeScript", "Bootstrap"],
    preview: "assets/images/elan.png",
    icon: "hero-office-building",
    colorClasses: "bg-yellow-100 text-yellow-800"
  },
  {
    name: "Game of Life",
    website: "https://maltebaer.github.io/game-of-life/",
    github: "https://github.com/maltebaer/game-of-life",
    description:
      "Arcade game using Conway's 'Game of Life'. First JavaScript project and entrypoint into Web Development.",
    technologies: ["JavaScript", "HTML", "CSS"],
    preview: "assets/images/game-of-life.png",
    icon: "hero-puzzle",
    colorClasses: "bg-green-100 text-green-800"
  },
  {
    name: "Momo",
    website: "https://momo.maltebaer.now.sh/",
    github: "https://github.com/maltebaer/momo",
    description: "Welcome/announcement page for my son's birthday.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    preview: "assets/images/momo.png",
    icon: "hero-cake",
    colorClasses: "bg-purple-100 text-purple-800"
  },
  {
    name: "Blog",
    website: "https://til.maltebaer.now.sh/",
    github: "https://github.com/maltebaer/til",
    description:
      "WIP: Collection of my learnings, ideas and AHA moments while coding.",
    technologies: ["Next", "TypeScript", "TailwindCSS"],
    preview: "assets/images/blog.png",
    icon: "hero-newspaper",
    colorClasses: "bg-blue-100 text-blue-800"
  },
  {
    name: "XMAS 2021",
    website: "https://xmas-2021.maltebaer.vercel.app/",
    github: "https://github.com/maltebaer/xmas-2021",
    description:
      "Greeting card for my friends and family.",
    technologies: ["HTML", "AlpineJS", "TailwindCSS"],
    preview: "assets/images/xmas-2021.png",
    icon: "hero-gift",
    colorClasses: "bg-pink-100 text-pink-800"
  },
  {
    name: "Coming soon",
    website: null,
    github: null,
    description:
      "...",
    technologies: [],
    preview: "assets/images/xmas-2021.png",
    icon: "hero-question-mark-circle",
    colorClasses: "bg-gray-50 text-gray-700"
  },
]

export const experience = [
  {
    role: "Full Stack Developer",
    location: "BIOMES",
    website: "https://biomes.world/",
    description:
      "Developing a dashboard for our customers to view their analysis results and our interal LIMS. Supporting marketing in setting up a CRM.",
    start: new Date(2021, 8),
    end: undefined,
  },
  {
    role: "Software Developer",
    location: "LUM GmbH",
    website: "https://lum-gmbh.com/",
    description:
      "Realised software for recording, managing and analysing measurements with focus on displaying complex visualisations and creating a scientific UX.",
    start: new Date(2019, 7),
    end: new Date(2021, 5),
  },
  {
    role: "Frontend Developer",
    location: "INTEGR8",
    website: "https://www.integr8.com/",
    description: "Setup up a small, in-house reporting app.",
    start: new Date(2019, 2),
    end: new Date(2019, 6),
  },
  {
    role: "IT & Administration (Working Student)",
    location: "INTEGR8",
    website: "https://www.integr8.com/",
    description:
      "Established the IT infrastructure, supporting the agency growing from 15 employees to 50+ employees. Created the on- and offboarding process, helping new employees collaborating with the team.",
    start: new Date(2017, 4),
    end: new Date(2019, 2),
  },
]

export const education = [
  {
    role: "Web Development Bootcamp, Full Stack",
    location: "Ironhack Berlin",
    website: "https://www.ironhack.com/en/berlin",
    description:
      "Intensive 9-week courses in Web Development including: MERN Stack, JavaScript, HTML and CSS.",
    start: new Date(2019, 0),
    end: new Date(2019, 2),
  },
  {
    role: "Master of Science, Engineering",
    location: "TU Berlin",
    website: "https://www.tu.berlin/",
    start: new Date(2016, 3),
    end: undefined,
  },
  {
    role: "Bachelor of Science, Physics",
    location: "TU Berlin",
    website: "https://www.tu.berlin/",
    description:
      "Thesis: 'Calculation of phase diagrams for active fluids' at the Department of Theoretical Physics.",
    start: new Date(2012, 3),
    end: new Date(2016, 2),
  },
]
