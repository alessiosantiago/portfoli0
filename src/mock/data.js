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
  subtitle: 'UX/UI Designer and Front-End Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Photo.jpg',
  paragraphOne: "I'm Alessio Santiago, and I graduated from Santa Clara University majoring in computer science with an emphasis in software.",
  paragraphTwo: "I have professional experience in UX/UI design using Webflow and Figma, and professional front-end design experience using HTML, CSS, JavaScript, and React.",
  paragraphThree: 'I have also had professional experience in game development using Unity and C#, and Android development using Java.',
  resume: '', // if no resume, the button will not show up
}; //https://www.resumemaker.online/es.php

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'smartcourse.jpg',
    title: 'Smart Course',
    info: 'SmartCourse.io is a responsive website that serves as an online platform to help and guide people with ADHD and their caregivers (like parents, educators, and health professionals). This website was built using Webflow, HTML, CSS, and JavaScript',
    info2: 'At Smart Course, I was the lead UX/UI designer and developer responsible for building the website, and fixing any issues on the live site. I was also responsible for deliverables such as sitemaps, low/high fidelity mockups, and prototypes using Figma, and conducting user testing and research.',
    url: 'https://www.smartcourse.io/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'California Re-Entry ID',
    info: 'A mobile website designed to help recent prisoner releases in California obtain or reobtain government identification. Built using HTML, CSS, and JavaScript.',
    info2: 'View the site in responsive mode on your desktop or from your phone using the button below.',
    url: 'https://alessiosantiago.github.io/cal-reentry-id/',
    repo: 'https://github.com/alessiosantiago/cal-reentry-id', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Kit-Kat.jpeg',
    title: 'Kit-Kat Slice',
    info: "An Android game designed with Unity and C# to promote Nestlé's Kit-Kat chocolate bar.",
    info2: 'I was also responsible for testing and debugging the game before submitting the final product',
    url: 'https://youtu.be/ID6FXbvROf4',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Koko-Krunch2.jpeg',
    title: 'Koko-Krunch Catch',
    info: 'Similar to the project above, I used Unity and C# to build an Android game designed for Nestlé to promote their Koko Krunch cereal',
    info2: 'Tested and debugged the game before submitting the final product',
    url: 'https://www.youtube.com/shorts/Juul4soUf7w',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mask.jpeg',
    title: 'Mask Detection Project',
    info: "A website designed to help identify and analyze mask usage in the user's establishment.",
    info2: 'Ensured that the product provided a great and efficient experience for users.',
    url: 'https://www.youtube.com/watch?v=RohIMm6WtV0',
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
