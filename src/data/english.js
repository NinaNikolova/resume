import {
  // Contact
  FaGlobe,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedinIn,
  // Interests

  FaReact,
  FaBook,
  FaRunning,
} from 'react-icons/fa';
import { PiPersonSimpleHike } from "react-icons/pi";
import ninaImage from '../nina.jpg';

const data = {
  /**
   * Full name and image
   */
  img: ninaImage,
  fullName: 'Nina Nikolova',

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: 'Summary',
    text: `
        Front-end developer that has 1 year of experience developing web 
        applications. Broadens her knowledge by actively 
        contributing to Intership programs.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: 'Contact',
    list: [
      {
        text: 'My personal portfolio website',
        url: 'https://personal-portfolio-hazel-six.vercel.app/',
        icon: <FaGlobe />,
      },
      {
        text: 'GitHub',
        url: 'https://github.com/NinaNikolova',
        icon: <FaGithub />,
      },
      {
        text: 'Linkedin',
        url: 'https://www.linkedin.com/in/nina-nikolova-0b2843147',
        icon: <FaLinkedinIn />,
      },
      {
        text: 'ninagbs@abv.bg',
        icon: <FaEnvelope />,
      },
      {
        text: '+359 884 127 067',
        icon: <FaPhoneAlt />,
      },
      {
        text: 'Sofia, Bulgaria',
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: 'Key skills',
    list: [
      { text: 'Angular' },
      { text: 'React' },
      { text: 'JavaScript' },
      { text: 'TypeScript' },
      { text: 'Java' },
      { text: 'Responsive Web Design' },
      { text: 'HTML5, CSS3' },
      { text: 'Node.js, Express.js' },
      { text: 'PostgreSQL, MongoDB' },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: 'Additional skills',
    list: [
      { text: 'Azure, Docker' },
      { text: 'GitHub, Git' },
      { text: 'Tailwind' },
      { text: 'Figma, Jira' },
    ],
  },
  softSkills: {
    title: 'Soft skills',
    list: [
      { text: 'Teamwork&Cooperation' },
      { text: 'Friendliness' },
      { text: 'Responsibility' },
      { text: 'Self-management' },
      { text: 'Good communication' },
    ],
  },

  /**
   * Languages I speak
   */
  languages: {
    title: 'Languages',
    list: [
      { text: 'Bulgarian - Native' },
      { text: 'English - B1' },
    ],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: 'Interests',
    list: [
      { text: 'Hiking', icon: <PiPersonSimpleHike /> },
      { text: 'Learning new things', icon: <FaReact /> },
      { text: 'Reading', icon: <FaBook /> },
      { text: 'Being active', icon: <FaRunning /> },
    ],
  },

  projects: {
    title: 'Projects',
    list: [
      {
        name: 'Garant Burgas',
        techList: [
          'React',
          'Tailwind',
          'React-icons',
          'React-Toastify'
        ],
        description: `As part of an Academy for trainees and team leaders /SoftUni/ I performed frontend development /as trainee/ with React, TypeScript and Tailwind.`,
        url: 'https://borsa.garantburgas.com/sectorRanking?origin_code=bg',
      },
      {
        name: 'Родът на моя котарак Криси',
        techList: [
          'React'
        ],
        description: `Thе project's name is Родът на моя котарак Криси. Its putpose is to design a system to store information about my pet's family tree according to the condition of the task given Speed IT Up - Nemetschek Bulgaria`,
        url: 'https://my-pet-family-tree.vercel.app',
      },
      {
        name: 'B2114 DAT Compiler',
        techList: [
          'HTML',
          'CSS',
          'JavaScript',
          'GoDaddy',
          'Free SSL Certificate',
        ],
        description: `
            B2114 DAT Compiler is my first project for the business website of my family friend.`,
        url: 'https://b2114-datcompiler.xyz',
      },
      {
        name: 'У нас и по света с деца',
        techList: ['React', 'Material-UI', 'Express.js', 'MongoDB', 'Mongoose'],
        description: `
            The app project is the defense of an exam on ReactJS at SoftUni. Its lists for ideas for walks, trips and adventures for families with children in nature, at sights and interesting places around Bulgaria and the world.`,
        url: 'https://unasiposvetasdeca.vercel.app',
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: 'Work experience',
    list: [
      {
        company: 'Garant Burgas Intern & Team Lead Academy/Nacov.com/',
        location: 'remote, intership',
        date: {
          start: '2024-05',
          end: '2024-07',
        },
        jobTitle: 'Web Developer-React',
        description: `As part of an Academy for trainees and team leaders /Nakov.com/ I performed frontend development /as trainee/ with React, TypeScript and Tailwind.
            `,
      },
      {
        company: 'Fakturiko',
        location: 'remote, intership',
        date: {
          start: '2023-11',
          end: '2024-02',
        },
        jobTitle: 'Web Developer - Angular',
        description: `
            As part of an Academy for trainees and team leaders /Nakov.com/ I performed frontend development /as trainee/ with Angular and TypeScript.`,
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: 'Certificates',
    list: [
      {
        name: 'Full-stack JavaScript Developer',
        provider: 'Software University',
        url: 'https://softuni.bg/certificates/details/185271/46d18211'
      },
      {
        name: 'Containers and Cloud - July 2024',
        provider: 'Software University',
        url: 'https://softuni.bg/certificates/details/225479/ce73942a'
      },
      {
        name: 'Java Advance-Jan 2024 -Jan 2024',
        provider: 'Software University',
        url: 'https://softuni.bg/certificates/details/203382/3e2e30b7'
      },
      {
        name: 'Java OOP-Feb 2024',
        provider: 'Software University',
        url: 'https://softuni.bg/certificates/details/211065/3ca50784'
      },
      {
        name: 'PostgreSQL',
        provider: 'Software University',
        url: ''
      },
      {
        name: 'Software Technologies - July 2018',
        provider: 'Software University',
        url: 'https://softuni.bg/certificates/details/56833/6cd31a3c'
      },

      {
        name: "Intern & Team Lead Academy",
        provider: 'Software University',
        url: "https://drive.google.com/file/d/1HAVNopZsz644p_lY8Q1Oogcr1DbC4RLR/view?pli=1",
      },
      {
        name: "JS Advanced-September 2022",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/145356/24d4c3a8",
      },
      {
        name: "HTML & CSS - January 2022",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/127626/4af97c58",
      },
      {
        name: "Programming Basics with Java - March 2018 - Honorable mention",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/53854/9d4168c0",
      },
      {
        name: "ReactJS - February 2023",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/168611/6bbe309d",
      },
      {
        name: "Angular - June 2023",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/182994/647a6f7a",
      },
      {
        name: "JS Back-End - May 2023",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/175230/51bce23f",
      },
      {
        name: "JS Applications - February 2023",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/167781/ed8020f8",
      },
      {
        name: "Programming Fundamentals with JavaScript - May 2022",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/139037/70a130ce",
      },
      {
        name: "Programming Basic - January 2022",
        provider: 'Software University',
        url: "https://softuni.bg/certificates/details/125134/4d6c8840",
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: 'Education',
    list: [
      {
        institution: 'Software University',
        description: 'Web JavaScript Development/Web Java Development',
        date: {
          start: '2018-01',
          end: 'till now',
        },
      },
    ],
  },
};

export default data;