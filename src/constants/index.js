import project1 from "../assets/projects/My Project1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/Portfolio6.jpg";


export const HERO_CONTENT = `I am a dedicated and passionate full stack developer with a strong foundation in building robust and scalable web applications. During my undergraduate studies, I have gained practical experience in front-end technologies like React,Html,Css and back-end technologies such as Node.js, Express, PHP, Python, and databases including MySQL and MongoDB. My projects have involved implementing RESTful APIs, managing databases, and collaborating with team members to deliver efficient and user-friendly solutions. I am eager to leverage my skills to contribute to innovative projects and continue learning in a dynamic development environment.`;

export const ABOUT_TEXT = `I am an enthusiastic and versatile full stack developer with a passion for creating efficient and user-friendly web applications. During my undergraduate studies, I have gained hands-on experience with a variety of technologies, including React, Node.js, Express, MySQL, PHP, Python,Javascript,Html,Css and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has grown into a dedicated pursuit where I continuously strive to learn and adapt to new challenges.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Web Developer",
    company: "Ebrain Technologies (ProU Education)",
    description: `Contributed to the development and maintenance of web applications using JavaScript, HTML, and CSS during my internship. Assisted in implementing Quiz Web-application. Worked closely on project to gather requirements and ensure project timelines were met`,
    technologies: ["Javascript", "HTML", "CSS"],
  }
  
  {
    year: "2024-2025",
    role: "Web Developer",
    company: "MaMo Technolabs LLP",
    description: `Developed an AI-driven career recommendation system to match users with suitable career paths.Implemented Google Gemini AI for quiz generation, enhancing personalized assessments. Built a quiz system with Google Gemini AI for adaptive assessments. Created a learning path generator mapping skill gaps with Udemy courses`,
    technologies: ["Javascript", "HTML", "CSS","Tailwind CSS","React.js,Node.js"],
  }
  
];

export const PROJECTS = [
  {
    title: "QuizBuzz",
    image: project1,
    description:
      "A fully functional quiz website with features like quiz participation, user authentication, and performance tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    title: "Online Voting System",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["PHP","Mysql"],
  },
  {
    title: "AI-Powered Career Path Simulator",
    image: project3,
    description:
      "This AI-Powered Career Path Simulator is a comprehensive career guidance platform built with React, Node.js, and MongoDB that leverages OpenAI and Google Gemini AI technologies to deliver personalized recommendations. The system performs real-time job market analysis through web scraping with Puppeteer and various APIs, while featuring an adaptive quiz system for accurate skills assessment. Users receive customized learning paths that map their skill gaps to relevant Udemy courses, creating a seamless professional development experience that bridges their current abilities with career aspirations.",
    technologies: ["HTML", "Tailwind CSS", "React"],
  },

];

export const CONTACT = {
  address: "227,Vijaynagar Tarsali Vadodara Gujarat-390009",
  phoneNo: "+919978662917 ",
  email: "aftabalias786@gmail.com",
};
