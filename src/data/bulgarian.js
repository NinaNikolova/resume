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
  
  const content = {
    /**
     * Full name
     */
    fullName: 'Нина Николова',
  
    /**
     * Summary - short "about me" paragraph
     */
    summary: {
      title: 'Kратко представяне',
      text: `
        Front-end developer с почти 1 година опит в разработването на web 
        applications. Опитът е придобит главно от участие в стажански програми.`,
    },
  
    /**
     * Contact details
     */
    contact: {
      title: 'Контакти',
      list: [
        {
          text: 'Моят уебсаит - personal portfolio',
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
          text: 'София, България',
          icon: <FaMapMarkerAlt />,
        },
      ],
    },
  
    /**
     * Key skills
     */
    keySkills: {
      title: 'Ключови технически умения',
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
      title: 'Допълнителни технически умения',
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
      title: 'Езици',
      list: [
        { text: 'Български - роден' },
        { text: 'Английски - B1' },
      ],
    },
  
    /**
     * Hobbies and interests
     */
    interests: {
      title: 'Интереси',
      list: [
        { text: 'Туризъм', icon: <PiPersonSimpleHike /> },
        { text: 'Учене на нови неща', icon: <FaReact /> },
        { text: 'Четене', icon: <FaBook /> },
        { text: 'Активност', icon: <FaRunning /> },
      ],
    },
  
    projects: {
      title: 'Проекти',
      list: [
        {
          name: 'Garant Burgas',
          techList: [
            'React',
            'Tailwind',
            'React-icons',
            'React-Toastify'
          ],
          description: `Като част от Академията за стажанти и тиймлидери аз изпълнявах frontend development /като стажант/ с React, TypeScript and Tailwind.`,
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
            B2114 DAT Compiler е моят първи ентусиаски проект за стартъп биснес на приятел на семейството ми.`,
          url: 'https://b2114-datcompiler.xyz',
        },
        {
          name: 'У нас и по света с деца',
          techList: ['React', 'Material-UI', 'Express.js', 'MongoDB', 'Mongoose'],
          description: `
            Проектът е защита на изпит по ReactJS в SoftUni. Това е сайт за идеи за разходки, пътешествия и приключения на семейства с деца сред природата, по забележителности и интерсни места из България и по света.`,
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
      title: 'Работен опит',
      list: [
        {
          company: 'Garant Burgas Intern & Team Lead Academy/Nacov.com/',
          location: 'отдалечено, стаж',
          date: {
            start: '2024-05',
            end: '2024-07',
          },
          jobTitle: 'Web Developer-React',
          description: `Като част от Академията за стажанти и тиймлидери аз изпълнявах frontend development /като стажант/ с  React, TypeScript and Tailwind.
            `,
        },
        {
          company: 'Fakturiko',
          location: 'remote',
          date: {
            start: '2023-11',
            end: '2024-02',
          },
          jobTitle: 'Web Developer - Angular',
          description: `
            Като част от Академията за стажанти и тиймлидери аз изпълнявах frontend development /като стажант/ с  Angular and TypeScript.`,
        },
      ],
    },
  
    /**
     * Certificates and courses
     */
    certificates: {
      title: 'Дипломи и Сертификати',
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
      title: 'Образование',
      list: [
        {
          institution: 'Софтуерен университет',
          description: 'Web JavaScript Development/Web Java Development',
          date: {
            start: '2018-01',
            end: 'до сега',
          },
        },
      ],
    },
  };
  
  export default content;