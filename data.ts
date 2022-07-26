export const data = {
  main: {
    name: "Malte Bär",
    imgUrl: "/malte.jpg",
    profession: "Software Developer",
    location: "Berlin, Germany",
    mail: "maltebaer@posteo.de",
    gitHubUrl: "https://github.com/maltebaer/",
    linkedInUrl: "https://linkedin.com/in/maltebaer/",
  },
  skills: ["HTML", "CSS", "JavaScript", "React", "Unit Testing", "TypeScript"],
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
  projects: [
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
        "Collection of my learnings, ideas and AHA moments while coding.",
      technologies: ["Next", "TypeScript", "TailwindCSS"],
      preview: "/blog.png",
    },
  ],
  workExperience: [
    {
      role: "Software Developer",
      company: "LUM GmbH",
      homepage: "https://lum-gmbh.com/",
      description:
        "Realise software for recording, managing and analysing measurements with focus on displaying complex visualisations and creating a scientific UX.",
      start: new Date(2019, 7),
      end: undefined,
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
  ],
  education: [
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
  ],
};
