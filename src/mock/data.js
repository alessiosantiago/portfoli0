import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alessio Santiago | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Alessio Santiago Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Alessio Santiago',
  subtitle: 'Software Engineer | Backend & Frontend Development',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Photo.jpg',
  paragraphOne: "I'm Alessio Santiago, a software engineer with a background in computer science and a focus on software development, including back-end systems, database design, and user interface development.",
  paragraphTwo: "I have professional experience in back-end development using Java and JavaEE/JakartaEE and SQL, including maintaining large-scale court management systems, performing database operations, and contributing to build automation using tools like Git and SVN.",
  paragraphThree: "In addition, I have front-end development experience with HTML, CSS, JavaScript, and React, as well as UX/UI design expertise using Webflow and Figma.",
  paragraphFour: 'I have also had professional experience in game development using Unity and C#, and Android development using Java.',
  resume: '', // if no resume, the button will not show up
}; //https://www.resumemaker.online/es.php

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nys.png',
    imgStyle: { width: '80%', margin: '0 auto' },
    rowStyle: { alignItems: 'center' },
    title: 'New York State Unified Court System',
    info: 'An enterprise-level internal application (Universal Case Management System) used across all levels of New York State courts to manage court case data, documents, and workflow processes.',
    info2: 'I am a Computer Applications Programmer contributing to back-end development using Java and JavaEE/JakartaEE, performing Oracle database operations including schema design, refactoring, and storing procedures to maintain data integrity across court workflows. I develop court forms using the OOXML standard, collaborate on migrating and maintaining build scripts from Groovy to Kotlin using Gradle, and use Git and SVN for version control in a multi-developer environment. I also provide on-call support to court users, diagnosing and resolving live application issues to minimize disruption to court operations.',
    url: '',
    caseStudy:'',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'circus.png',
    rowStyle: { alignItems: 'center' },
    title: 'Jillian\'s Circus',
    info: 'A collection of responsive e-commerce websites built for a diverse set of small business clients, each with unique branding, product offerings, and customer needs. These websites were designed to optimize the shopping experience and drive online sales.',
    info2: 'I was the lead UX/UI designer and front-end developer responsible for designing and implementing visually engaging, responsive storefronts using tools like WordPress, Wix, Squarespace, HTML, CSS, and JavaScript. I conducted user research through interviews, created sitemaps and Figma prototypes, and worked directly with clients to align design decisions with their business goals.',
    url: '',
    caseStudy:'',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smartcourse.jpg',
    rowStyle: { alignItems: 'center' },
    title: 'Smart Course',
    info: 'A responsive website that serves as an online platform to help and guide people with ADHD and their caregivers (like parents, educators, and health professionals). This website was built using Webflow, HTML, CSS, and JavaScript',
    info2: 'I was the lead UX/UI designer and developer responsible for creating a responsive website design and ensuring that the website was continually evolving and staying up to date with the latest design trends and user needs. I also developed sitemaps, low/high fidelity mockups, and prototypes, and conducted user testing and research to gather valuable insights and feedback',
    caseStudy:'https://canva.link/u1jg5q9p44pxhsv',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    rowStyle: { alignItems: 'center' },
    title: 'California Re-Entry ID',
    info: 'A mobile website designed to help recent prisoner releases in California obtain or reobtain government identification. Built using HTML, CSS, and JavaScript.',
    info2: 'View the site in responsive mode on your desktop or from your phone using the button below.',
    url: 'https://alessiosantiago.github.io/cal-reentry-id/',
    caseStudy:'',
    repo: 'https://github.com/alessiosantiago/cal-reentry-id', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Kit-Kat.jpeg',
    rowStyle: { alignItems: 'center' },
    title: 'Kit-Kat Slice',
    info: "An Android game designed with Unity and C# to promote Nestlé's Kit-Kat chocolate bar.",
    info2: 'I was also responsible for testing and debugging the game before submitting the final product',
    url: 'https://youtu.be/ID6FXbvROf4',
    caseStudy:'',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Koko-Krunch2.jpeg',
    rowStyle: { alignItems: 'center' },
    title: 'Koko-Krunch Catch',
    info: 'Similar to the project above, I used Unity and C# to build an Android game designed for Nestlé to promote their Koko Krunch cereal',
    info2: 'Tested and debugged the game before submitting the final product',
    url: 'https://www.youtube.com/shorts/Juul4soUf7w',
    caseStudy:'',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mask.jpeg',
    rowStyle: { alignItems: 'center' },
    title: 'Mask Detection Project',
    info: "A website designed to help identify and analyze mask usage in the user's establishment.",
    info2: 'Ensured that the product provided a great and efficient experience for users.',
    url: 'https://www.youtube.com/watch?v=RohIMm6WtV0',
    caseStudy:'',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'axsantiago103@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
