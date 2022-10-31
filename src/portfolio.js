/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Sarah Seitanakis",
  title: "Hi all, I'm Sarah",
  subTitle: emoji(
    "A passionate Designer, Developer, Researcher, and Artist ✨" // I have experience of designing Web and Mobile applications using Adobe XD and developing software with Python / HTML / CSS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cxaaG97jx1bxD8Pwbf6nMZgCuQoh70uo/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sarah-seitanakis",
  linkedin: "www.linkedin.com/in/sarah-seitanakis-47b22318a",
  gmail: "sseitanakis@gmail.com",
  //   gitlab: "https://gitlab.com/",
  //   facebook: "https://www.facebook.com/",
  //   medium: "https://medium.com/",
  //   stackoverflow: "https://stackoverflow.com/users/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CREATIVE, EMPATHETIC PROBLEM-SOLVER WHO ADVOCATES FOR END_USERS",
  skills: [
    emoji(
      "⚡ Develops low and high fidelity UI designs for web and mobile applications"
    ),
    emoji(
      "⚡ Conducts interviews with users to produce relevant feedback for developers"
    ),
    emoji(
      "⚡ Facilitates internal ideation sessions, and external user-feedback sessions"
    ),
    emoji(
      "⚡ Writes clear documentation for designs, including design research and strategy"
    ),
    emoji("⚡ Works successfully in teams of both technical and design professionals"),
    emoji("⚡ Presents design materials to stakeholders on a regular basis"),
    emoji("⚡ Analyzes data and creates complex data visualizations")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "apple",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "sketch",
      fontAwesomeClassname: "fab fa-sketch"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "stack-overflow",
      fontAwesomeClassname: "fab fa-stack-overflow"
    }
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Allegheny College",
      logo: require("./assets/images/AlleghenyLogo.png"),
      subHeader:
        "Bachelor of Science in Physics – Studio Art & Mathematics Minors",
      duration: "August 2015 - May 2020",
      desc: "My education was rigorous in both science and visual arts. This background gives me a unique approach to problem solving and ideation. Through completing my Senior Thesis, I learned how to take the lead on a large, independently motivated project. Presenting and defending this project solidified my oral and written communication skills.",
      descBullets: [
        "Thesis: Simulating Black Hole Accretion & Feedback During a Collision with a Star",
        "Participated in Astrophysics research in a lab that simulates star systems using a FORTRAN-based hydrodynamics code.",
        "Took part in research internships including one where two other interns and I teamed up to write our own one-dimensional smoothed particle hydrodynamics code",
        "Mathematics courses featured Linear Algebra, Multivariate Calculus, Differential Equations, and other advanced topics",
        "Highlight Studio Art courses: 'The Creative Process' course, Art History, Art & Technology, and an advanced project series in Ceramics",
        "Excelled at the Writing and Comunication portions of Allegheny's curriculum",
        "Recieved Latin Honors: Magna Cum Laude"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Engineer",
      company: "CoVar",
      companylogo: require("./assets/images/CoVar_Logo.png"),
      date: "September 2020 – Present",
      desc: "At CoVar I contribute to several large scale projects, which has given me the opportunity to learn and grow as a developer.",
      descBullets: [
        "Creates high-fidelity, interactive prototypes/designs of web applications for developers to implement.",
        "Conducts interviews with users to produce relevant feedback for developers.",
        "Writes software to the specification of team leads using Python 3.",
        "Follows formatting standards to create readable, concise code.",
        "Provides code reviews for other developers’ GitHub Pull Requests.",
        "Carries out statistical studies to determine performance of machine learning models.",
        "Analyzes data and creates complex data visualizations.",
        "Presents materials to customers on a regular basis."
      ]
    },
    {
      role: "User Experience Designer",
      company: "The Dev Shop",
      companylogo: require("./assets/images/TheDevShop_Logo.png"),
      date: "July 2017 – June 2020",
      desc: "I thoroughly enjoyed my time working at The Dev Shop under the supervision and mentorship of Andrew Hein.",
      descBullets: [
        "Converted project specifications into drawings and other materials that were used to create applications for customers.",
        "Created interactive prototypes of websites and applications.",
        "Developed creative design for marketing packages, including logos, web materials, and brochures.",
        "Brainstormed with peers and other members of design team to determine enhancements and product features.",
        "Suggested enhancements to product design that would improve user experience."
      ]
    },
    {
      role: "Computational Astrophysics Researcher",
      company: "Allegheny Physics Department",
      companylogo: require("./assets/images/AlleghenyLogo.png"),
      date: "July 2019 – June 2020",
      desc: "As a researcher in Dr. James C. Lombardi's lab, I got to explore and solve exciting computational problems and work collaboratively in a team.",
      descBullets: [
        "Collaborated with a 3-student team to write a new one-dimensional smoothed particle hydrodynamics code.",
        "Authored a tutorial on how to use the astrophysical simulation code and the data visualization programs",
        "Developed creative design for marketing paCreated site layout and user interface using HTML and CSS practices to give students and other researchers access to the aforementioned tutorial.ckages, including logos, web materials, and brochures",
        "Implemented version control using Git; updated and maintained the GitHub webpage for research group"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: emoji("CHECK OUT SOME OF MY WORK 👀"),
  projects: [
    {
      image: require("./assets/images/project-images/Translator_Logo.png"),
      projectName: "Contribution to Biomedical Data Translator",
      projectDesc:
        "Work within the constraints and requirements provided by the consortium to create Ranking Agent's UI and conduct user research – Work done at CoVar",
      footerLink: [
        {
          name: "UI Walkthrough",
          url: "https://drive.google.com/file/d/18EDAO0QZu5EatDidZCYose8aNfJhiwCX/view?usp=sharing"
        },
        {
          name: "UI Implementation",
          url: "https://qgraph.org/question"
        },
        {
          name: "See more",
          url: "https://drive.google.com/drive/folders/1zPVTEUI_At60X_Xnut5J1-3iM2uIy8dS?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/project-images/SeniorThesis/starsmasherFigure.png"),
      projectName: "Senior Thesis",
      projectDesc:
        "Simulating Black Hole Accretion & Feedback During a Collision with a Star – Work done at Allegheny College, Physics Department in the lab of Dr. James C. Lombardi",
      footerLink: [
        {
          name: "Research Paper",
          url: "https://drive.google.com/file/d/1PW1WLiLfkDXCPxbBkUtcdQMTl4FLFJT4/view?usp=sharing"
        }
        // {
        //   name: "Veiw Poster",
        //   url: ""
        // },
        // {
        //   name: "Veiw Slides",
        //   url: ""
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/project-images/Hopsify_Logo.png"),
      projectName: "Hopsify",
      projectDesc:
        "Product design, Branding, Marketing for a startup that sells a Beer Distributor POS system – Work done at The Dev Shop – 2019",
      footerLink: [
        {
          name: "Web App",
          url: "https://xd.adobe.com/view/f5b38a4e-142c-44dd-6805-a7c2357a0ba4-8382/"
        },
        {
          name: "Marketing Site",
          url: "https://xd.adobe.com/view/b44c79e9-a9f9-49c4-7c11-297068bfbce8-c27d/"
        },
        {
          name: "Mobile App",
          url: "https://xd.adobe.com/view/23ce4cce-9505-4235-48e0-700cafc29154-55ff/"
        },
        // {
        //   name: "Brochure",
        //   url: "https://drive.google.com/file/d/1D-6TYUsA_FHbi2lm-MW_wTRi9Jh6JNlj/view?usp=sharing"
        // },
        {
          name: "See more",
          url: "https://drive.google.com/drive/folders/1zPVTEUI_At60X_Xnut5J1-3iM2uIy8dS?usp=sharing"
        }
        // {
        //   name: "Veiw Logo",
        //   url: "https://drive.google.com/file/d/1DW-YIXkHo6Bn8WI0Gl1h92RRhUFFQXIs/view?usp=sharing"
        // }
      ]
    },
    {
      image: require("./assets/images/project-images/TeachersProtect_Logo.png"),
      projectName: "Teachers Protect",
      projectDesc:
        "Logo and Brochure Design for a startup that sells an app for school security – Work done at The Dev Shop – 2019",
      footerLink: [
        {
          name: "Brochure",
          url: "https://drive.google.com/file/d/1dwnMaAQBuzldqEtAcEgTKH9cgyMwUKOg/view?usp=sharing"
        },
        {
          name: "Logo & Info",
          url: "https://xd.adobe.com/view/c7435fe1-3b20-4ee5-7189-f98412cb51ee-b172/"
        }
      ]
    },
    {
      image: require("./assets/images/project-images/SportivoBaleno_Logo.png"),
      projectName: "Sportivo Baleno",
      projectDesc:
        "Logo Design for a Sports Psychology startup – Work done at The Dev Shop – 2019",
      footerLink: [
        {
          name: "Logo & Info",
          url: "https://xd.adobe.com/view/c928dc8f-d2a1-4675-508f-0021a78db4bd-bf19/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to connect? My Inbox is open for all.",
  number: "(412)722-8560",
  email_address: "sseitanakis@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
