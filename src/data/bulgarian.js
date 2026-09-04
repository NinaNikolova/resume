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
} from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import { PiPersonSimpleHike } from "react-icons/pi";
import ninaImage from "../nina.jpg";

const content = {
  /**
   * Full name and image
   */
  img: ninaImage,
  fullName: "Нина Николова",

  /**
   * Summary - short "about me" paragraph
   */
  summary: {
    title: "Kратко представяне",
    text: `
        1/ Front-end developer с 1+ години опит в разработването на web 
        applications. Опитът е придобит главно от участие в стажански програми и от работа по различни проекти. 2/ Счетоводител с над 10 години професионален опит в областта на счетоводството, финансовото отчитане и счетоводното обслужване. Опит в работата с ERP системи за управление на счетоводни процеси, финансови данни, фактуриране, банкови и счетоводни операции, съгласуване на сметки и изготвяне на финансови отчети. Отлични умения за поддържане на точна и организирана финансова информация и ефективно управление на ежедневните счетоводни процеси.`,
  },

  /**
   * Contact details
   */
  contact: {
    title: "Контакти",
    list: [
      {
        text: "Моят уебсаит - personal portfolio",
        url: "https://personal-portfolio-hazel-six.vercel.app/",
        icon: <FaGlobe />,
      },
      {
        text: "GitHub",
        url: "https://github.com/NinaNikolova",
        icon: <FaGithub />,
      },
      {
        text: "Linkedin",
        url: "https://www.linkedin.com/in/nina-nikolova-0b2843147",
        icon: <FaLinkedinIn />,
      },
      {
        text: "ninagbs@abv.bg",
        icon: <FaEnvelope />,
      },
      {
        text: "+359 884 127 067",
        icon: <FaPhoneAlt />,
      },
      {
        text: "София, България",
        icon: <FaMapMarkerAlt />,
      },
    ],
  },

  /**
   * Key skills
   */
  keySkills: {
    title: "Ключови технически умения",
    list: [
      { text: "React, Angular" },
      { text: "JavaScript, TypeScript" },
      { text: "Java" },
      { text: "Responsive Web Design, HTML, CSS, UML" },
      { text: "Node.js, Express.js" },
      { text: "PostgreSQL, MongoDB, MySQL" },
    ],
  },

  /**
   * Additional skills
   */
  additionalSkills: {
    title: "Допълнителни технически умения",
    list: [
      { text: "Azure, Docker, GitHub" },
      { text: "Tailwind, Figma, Jira" },
      { text: "ERP системи (Microsoft Navision), MS Excel" },
    ],
  },
  softSkills: {
    title: "Личностни умения",
    list: [
      { text: "Работа в екип и сътрудничество" },
      { text: "Приветливост" },
      { text: "Отговорност" },
      { text: "Самоорганизираност" },
    ],
  },

  /**
   * Languages I speak
   */
  languages: {
    title: "Езици",
    list: [{ text: "Български - роден" }, { text: "Английски - B2" }, { text: "Гръцки - А1" }],
  },

  /**
   * Hobbies and interests
   */
  interests: {
    title: "Интереси",
    list: [
      { text: "Туризъм", icon: <PiPersonSimpleHike /> },
      { text: "Учене на нови неща", icon: <FaReact /> },
      { text: "Четене", icon: <FaBook /> },
      { text: "Активност", icon: <FaRunning /> },
      { text: "Ветроходство", icon: <FaSailboat /> },
    ],
  },

  projects: {
    title: "Проекти",
    list: [
      {
        name: "ManifestCode",
        techList: [
          "Angular",
          "React",
          "Tailwind",
          "Ionic",
          "Primeng",
          "WordPress",
        ],
        description: `Frontend development`,
        url: ["https://manifest-code.com"],
      },
      {
        name: "Garant Burgas",
        techList: ["React", "Tailwind", "React-icons", "React-Toastify"],
        description: `Като част от Академията за стажанти и тиймлидери аз изпълнявах frontend development /като стажант/ с React, TypeScript and Tailwind.`,
        url: "https://borsa.garantburgas.com",
      },

      {
        name: "B2114 DAT Compiler",
        techList: [
          "HTML",
          "CSS",
          "JavaScript",
          "GoDaddy",
          "Free SSL Certificate",
        ],
        description: `
            B2114 DAT Compiler е моят първи ентусиаски проект за стартъп биснес на приятел на семейството ми.`,
        url: "https://b2114-datcompiler.xyz",
      },
    ],
  },

  /**
   * Work experience
   *
   * Acceptable date format: `YYYY-MM`
   */
  workExperience: {
    title: "Работен опит",
    list: [
      {
        company: "Evolution of Dreams EOOD",
        location: "remote, web developer",
        date: {
          start: "2025-08",
          end: "2026-03",
        },
        jobTitle: "Web Developer",
        description: `Frontend development - Angular, React, Tailwind, Ionic, Primeng, WordPress`,
      },
      {
        company: "Garant Burgas Intern & Team Lead Academy/Nakov.com/",
        location: "отдалечено, стаж",
        date: {
          start: "2024-05",
          end: "2024-07",
        },
        jobTitle: "Web Developer-React",
        description: `Като част от Академията за стажанти и тиймлидери аз изпълнявах frontend development /като стажант/ с  React, TypeScript and Tailwind.
            `,
      },
      {
        company: "Fakturiko",
        location: "remote",
        date: {
          start: "2023-11",
          end: "2024-02",
        },
        jobTitle: "Web Developer - Angular",
        description: `
            Като част от Академията за стажанти и тиймлидери аз изпълнявах frontend development /като стажант/ с  Angular and TypeScript.`,
      },
      {
        company: "Affin Bulgaria EAD",
        location: "Sofia, Bulgaria",
        date: {
          start: "2007-11",
          end: "2022-03",
        },
        jobTitle: "Счетоводител",
        description: `Счетоводно отчитане на банкови операции, разходни отчети, лизинг и др. чрез ERP система Microsoft Navision.`,
      },
      {
        company: "Mercurius-Sofia AD",
        location: "Sofia, Bulgaria",
        date: {
          start: "2004-05",
          end: "2007-10",
        },
        jobTitle: "Счетоводител",
        description: `Счетоводно отчитане на банкови операции, разходни отчети, изготвяне на ежедневни справки за задължения/вземания и др. чрез ERP система MS Navision.`,
      },
    ],
  },

  /**
   * Certificates and courses
   */
  certificates: {
    title: "Дипломи и Сертификати",
    list: [
      {
        name: "Full-stack JavaScript Developer",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/185271/46d18211",
      },
      {
        name: "MySQL - September 2024",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/226214/e4019d94",
      },
      {
        name: "Containers and Cloud - July 2024",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/225479/ce73942a",
      },
      {
        name: "Java Advance-Jan 2024 -Jan 2024",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/203382/3e2e30b7",
      },
      {
        name: "Java OOP-Feb 2024",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/211065/3ca50784",
      },
      {
        name: "PostgreSQL",
        provider: "Software University",
        url: "",
      },
      {
        name: "Software Technologies - July 2018",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/56833/6cd31a3c",
      },
      {
        name: "Intern & Team Lead Academy",
        provider: "Software University",
        url: "https://drive.google.com/file/d/1HAVNopZsz644p_lY8Q1Oogcr1DbC4RLR/view?pli=1",
      },
      {
        name: "JS Advanced-September 2022",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/145356/24d4c3a8",
      },
      {
        name: "HTML & CSS - January 2022",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/127626/4af97c58",
      },

      {
        name: "ReactJS - February 2023",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/168611/6bbe309d",
      },
      {
        name: "Angular - June 2023",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/182994/647a6f7a",
      },
      {
        name: "JS Back-End - May 2023",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/175230/51bce23f",
      },
      {
        name: "JS Applications - February 2023",
        provider: "Software University",
        url: "https://softuni.bg/certificates/details/167781/ed8020f8",
      },
    ],
  },

  /**
   * Education, school, etc
   */
  education: {
    title: "Образование",
    list: [
      {
        institution: "SU St. Kliment Ohridski",
        description: "Software technologies, Master degree",
        date: {
          start: "2024-09",
          end: "till now",
        },
      },
      {
        institution: "Софтуерен университет",
        description: "Web JavaScript Development/Web Java Development",
        date: {
          start: "2018-01",
          end: "до сега",
        },
      },
      {
        institution: "Economic Academy D. A. Tzenov",
        description: "Accounting and Control, Master degree",
        date: {
          start: "1995-10",
          end: "2000-10",
        },
      },
    ],
  },
};

export default content;
