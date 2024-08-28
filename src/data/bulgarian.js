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
      title: '"Меки умения',
      list: [
            { text: 'Работа в екип и сътрудничество' },
            { text: 'Приветливост' },
            { text: 'Отговорност' },
            { text: 'Самоорганизираност' },
            { text: 'Добра комуникация' },
      ]
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
          name: 'Родът на моя котарак Криси',
          techList: [
            'React'
          ],
          description: `Проектът се казва - Родът на моя котарак Криси. Целта му е да представи система - събрани данни за рода на моят домашен любимец съгласно поставена задача от Speed IT Up - Nemetschek Bulgaria`,
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
          url: 'https://softuni.bg/certificates/details/185271/46d18211'
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