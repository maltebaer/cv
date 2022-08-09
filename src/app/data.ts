export const me = {
  name: "Malte Bär",
  imgUrl: "/malte.jpg",
  profession: "Software Developer",
  location: "Potsdam, Germany",
  mail: "maltebaer@posteo.de",
  gitHubUrl: "https://github.com/maltebaer/",
  linkedInUrl: "https://linkedin.com/in/maltebaer/",
  skills: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Unit Testing", "TailwindCSS", "React", "Laravel", "TALL"],
  languages: [
    {
      language: "German",
      level: 5,
    },
    {
      language: "English",
      level: 4,
    },
    {
      language: "French",
      level: 2,
    },
  ],
}

export const projects = [
  {
    name: "ELAN",
    homepage: "https://elanberlin.com",
    github: "https://github.com/maltebaer/elan",
    description: "Portfolio website of a Berlin-based event agency.",
    technologies: ["React", "TypeScript", "Bootstrap"],
    preview: "/elan.png",
  },
  {
    name: "Game of Life",
    homepage: "https://maltebaer.github.io/game-of-life/",
    github: "https://github.com/maltebaer/game-of-life",
    description:
      "Arcade game using Conway's 'Game of Life' for creating a space inspired landscape. First JavaScript project and entrypoint into Web Development.",
    technologies: ["JavaScript", "HTML", "CSS"],
    preview: "/game-of-life.png",
  },
  {
    name: "Momo",
    homepage: "https://momo.maltebaer.now.sh/",
    github: "https://github.com/maltebaer/momo",
    description: "Welcome/announcement page for my son's birthday.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    preview: "/momo.png",
  },
  {
    name: "Blog",
    homepage: "https://til.maltebaer.now.sh/",
    github: "https://github.com/maltebaer/til",
    description:
      "WIP: Collection of my learnings, ideas and AHA moments while coding.",
    technologies: ["Next", "TypeScript", "TailwindCSS"],
    preview: "/blog.png",
  },
  {
    name: "Xmas 2021",
    homepage: "https://xmas-2021.maltebaer.vercel.app/",
    github: "https://github.com/maltebaer/xmas-2021",
    description:
      "Greeting card for my friends and family",
    technologies: ["HTML", "AlpineJS", "TailwindCSS"],
    preview: "/xmas-2021.png",
  },
]

export const experience = [
  {
    role: "Full Stack Developer",
    company: "BIOMES",
    homepage: "https://biomes.world/",
    description:
      "Developing a dashboard for our customers to view their analysis results and our interal LIMS. Supporting marketing in setting up a CRM.",
    start: new Date(2021, 8),
    end: undefined,
  },
  {
    role: "Software Developer",
    company: "LUM GmbH",
    homepage: "https://lum-gmbh.com/",
    description:
      "Realised software for recording, managing and analysing measurements with focus on displaying complex visualisations and creating a scientific UX.",
    start: new Date(2019, 7),
    end: new Date(2021, 5),
  },
  {
    role: "Frontend Developer",
    company: "INTEGR8",
    homepage: "https://www.integr8.com/",
    description: "Setup up a small, in-house reporting app.",
    start: new Date(2019, 2),
    end: new Date(2019, 6),
  },
  {
    role: "IT & Administration (Working Student)",
    company: "INTEGR8",
    homepage: "https://www.integr8.com/",
    description:
      "Established the IT infrastructure, supporting the agency growing from 15 employees to 50+ employees. Created the on- and offboarding process, helping new employees collaborating with the team.",
    start: new Date(2017, 4),
    end: new Date(2019, 2),
  },
]

export const education = [
  {
    degree: "Web Development Bootcamp",
    field: "Full Stack",
    location: "Ironhack Berlin",
    homepage: "https://www.ironhack.com/en/berlin",
    description:
      "Intensive 9-week courses in Web Development including: MERN Stack, JavaScript, HTML and CSS.",
    start: new Date(2019, 0),
    end: new Date(2019, 2),
  },
  {
    degree: "Master of Science",
    field: "Engineering",
    location: "TU Berlin",
    homepage: "https://www.tu.berlin/",
    start: new Date(2016, 3),
    end: undefined,
  },
  {
    degree: "Bachelor of Science",
    field: "Physics",
    location: "TU Berlin",
    homepage: "https://www.tu.berlin/",
    description:
      "Thesis: 'Calculation of phase diagrams for active fluids' at the Department of Theoretical Physics.",
    start: new Date(2012, 3),
    end: new Date(2016, 2),
  },
]
