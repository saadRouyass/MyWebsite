/**
 * 🔥 Projects Data 🔥
 * - id: Unique project ID (Do not change to avoid issues).
 * - title: Project name.
 * - mainColor: Primary color of the project.
 * - type: Website, Video, UI Design, etc. (What type of project is this?).
 * - yearCreated: Year the project was created (To keep track of your work history).
 * - projectGoal: What is the goal of this project?
 * - logo: File name of the project logo (Located in the "projects-logos" folder).
 * - image: File name of the project image (Located in the "images" folder).
 * - projectLink: Project link (video, website, image, design).
 * - overview: A brief description of what this project is about.
 * - techStacks: List of technologies/tools used in this project.
 */



const projects = [
  {
    id: 0, // Don't change the project ID
    title: 'Simple Portfolio',
    mainColor: '#00ADB5',
    type: 'Website',
    yearCreated: '2024',
    projectGoal: 'Presenting my work, skills and personal info.',
    logo: 'project logo 1.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image1.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://meowish-0.github.io/Meowish-Website1/main.html',
    overview: `Put your project overview here. Briefly describe what your project is about and its key features.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'HTML',
        type: 'HyperText Markup Language',
        icon: 'html icon.png',      
      },
      {
        name: 'CSS',
        type: 'Stylesheets',
        icon: 'css-3 icon.png',      
      },
      {
        name: 'Javascript',
        type: 'Programming Language',
        icon: 'js icon.png',      
      }
    ],
  },
  {
    id: 1, // Don't change the project ID
    title: 'Simple Portfolio 2',
    mainColor: '#e6c200',
    type: 'Website',
    yearCreated: '2024',
    projectGoal: 'Presenting my work, skills and personal info.',
    logo: 'project logo 2.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image2.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://meowish-0.github.io/Meowish-Website2/page.html',
    overview: `Put your project overview here. Briefly describe what your project is about and its key features.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'HTML',
        type: 'HyperText Markup Language',
        icon: 'html icon.png',      
      },
      {
        name: 'CSS',
        type: 'Stylesheets',
        icon: 'css-3 icon.png',      
      }
    ]
  },
  {
    id: 2, // Don't change the project ID
    title: 'Simple Portfolio 3',
    mainColor: '#e6c200',
    type: 'Website',
    yearCreated: '2025',
    projectGoal: 'Presenting my work, skills and personal info.',
    logo: 'project logo 3.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image3.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://meowish-0.github.io/Meowish-Website3/page.html',
    overview: `Put your project overview here. Briefly describe what your project is about and its key features.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'HTML',
        type: 'HyperText Markup Language',
        icon: 'html icon.png',      
      },
      {
        name: 'CSS',
        type: 'Stylesheets',
        icon: 'css-3 icon.png',      
      },
      {
        name: 'Javascript',
        type: 'Programming Language',
        icon: 'js icon.png',      
      }
    ]
  },
  {
    id: 3, // Don't change the project ID
    title: 'Simple Portfolio 4',
    mainColor: 'yellow',
    type: 'Website',
    yearCreated: '2025',
    projectGoal: 'Presenting my work, skills and personal info.',
    logo: 'project logo 4.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image4.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://meowish-0.github.io/Meowish-Website4/page.html',
    overview: `Put your project overview here. Briefly describe what your project is about and its key features.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'HTML',
        type: 'HyperText Markup Language',
        icon: 'html icon.png',      
      },
      {
        name: 'CSS',
        type: 'Stylesheets',
        icon: 'css-3 icon.png',      
      },
      {
        name: 'Javascript',
        type: 'Programming Language',
        icon: 'js icon.png',      
      }
    ]
  },
  {
    id: 4, // Don't change the project ID
    title: 'Setup Wallpaper Tutorial',
    mainColor: 'rgb(0, 170, 255)',
    type: 'Video',
    yearCreated: '2024',
    projectGoal: 'To display some of my information',
    logo: 'project logo 5.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image5.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: 'https://drive.google.com/file/d/1Dg2t_YNNNHnBftXQH-4mKfYUvFJNpYBi/view', //paste your project link, if your project is video upload to drive or YT the paste the link here
    overview: `Put your project overview here. Briefly describe what your project is about and its key features.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'Capcut',
        type: 'video editing software',
        icon: 'capcut-icon.png',      
      }
    ]
  },
  {
    id: 5, // Don't change the project ID
    title: 'Astro Solve',
    mainColor: 'rgb(111, 0, 202)',
    type: 'UI Design',
    yearCreated: '2027',
    projectGoal: 'To display some of my information',
    logo: 'project logo 6.png', // Add your project logo to the "projects-logos" folder and specify the filename here
    image: 'project-image6.png', // Add your project image to the "images" folder and specify the filename here
    projectLink: '#',
    overview: `Put your project overview here. Briefly describe what your project is about and its key features.`,
    techStacks: [
      // Add your tech stack icons to the "icons" folder and specify their filenames here
      {
        name: 'Figma',
        type: 'HyperText Markup Language',
        icon: 'figma icon.png',      
      }
    ]
  }
];


export { projects };
