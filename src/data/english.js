import {
    // Contact
    FaGlobe,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
  
    // Interests
  
    FaReact,
    FaBook,
    FaRunning,
  } from 'react-icons/fa';
  import { PiPersonSimpleHike } from "react-icons/pi";
  
  const data = {
    /**
     * Full name
     */
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
        { text: 'Azure, Docker' },
        { text: 'GitHub, Git' },
        { text: 'Tailwind' },
        { text: 'Figma, Jira' },
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
          description: `As part of an Academy for trainees and team leaders /Navov.com/ I performed frontend development /as trainee/ with React, TypeScript and Tailwind.
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
            As part of an Academy for trainees and team leaders /Navov.com/ I performed frontend development /as trainee/ with Angular and TypeScript.`,
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
          url: ''
        },
        {
          name: 'Java Advance-Jan 2024 -Jan 2024',
          provider: 'Software University',
          url: 'https://softuni.bg/certificates/details/203382/3e2e30b7 '
        },
        {
          name: 'Java OOP-Feb 2024',
          provider: 'Software University',
          url:'https://softuni.bg/certificates/details/211065/3ca50784 '
        },
        {
          name: 'PostgreSQL',
          provider: 'Software University',
          url: ''
        },
        {
          name: 'Full-stack JavaScript Developer',
          provider: 'Software University',
          url: 'https://softuni.bg/certificates/details/216935/1e04bc5e'
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