
import profile from './profile.png';
import { faGithub, faBookOpen } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Joseph",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    // {
    //   title: "Blog",
    //   link: "https://medium.com/@hashirshoaeb",
    // }
  ],
}
export const intro = {
  title: "Hey, I'm Joseph",
  description: "I am a data scientist and researcher with domain expertise in public transit and mobility systems.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1HkIOMv1ku-ncGpFHFPbAgN7CXjBR66Vr/view?usp=drive_link",
      isPrimary: false,
    },
    {
      title: "Google Scholar",
      link: "https://scholar.google.com/citations?user=pfrkREAAAAAJ&hl=en",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a data scientist and researcher with domain expertise in public transit and mobility systems.",
    "I've developed technology to enhances operational decisions on the field that has translated into improvements in service quality.",
    "Outside of my work, I like reading nonfiction, playing chess or tennis and drinking mate!"
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Transit Data Analytics",
      description: "Asssess transit performance and how it impacts the rider and operator experience.",
      icons: null,
    },
    {
      title: "Transit Operations Control",
      description: "Design algorithms for more efficient and reliable bus and rail dispatching.",
      icons: null,
    },
    {
      title: "Decision-making Tools",
      description: "Build production-ready tools that intergrate into workflows for field staff.",
      icons: null
    }
  ],
}

export const projects = {
  title: "Papers",
  cards: [
    {
      title: "Cooperative bus holding and stop-skipping (2023)",
      description: "Reinforcement learning for improved rider waiting and travel times.",
      icons: [
        {
          icon: faBookOpen,
          link: "https://github.com/joerovar",
        },
      ]
    },
    // {
    //   title: "Decision Support Tool for Bus Dispatching in Chicago (2023)",
    //   description: "Young Member Webinar Series at TRB Transit Data Committee.",
    //   icons: [
    //   ]
    // },
    // {
    //   title: "Clustering Analysis for Understanding Bus Driver Work Preferences (2024)",
    //   description: "Talk at Transit Data Conference in London (UK)",
    //   icons: [
    //     // {
    //     //   icon: faGithub,
    //     //   link: "https://github.com/hashirshoaeb/portfolio",
    //     // },
    //   ]
    // },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out directly by email at joseph.rodriguez.v@gmail.com",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:joseph.rodriguez.v@gmail.com",
      isPrimary: true,
    },
    // {
    //   title: "Schedule Meeting",
    //   link: "https://topmate.io/hashirshoaeb",
    //   isPrimary: false,
    // },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Joseph Rodriguez",
  description: "I work on data solutions, tools and analyses to address challenges in transit operations.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@joerovar",
  description: "Transit Researcher | Analyst | Developer",
  cards: [
    {
      title: "My website",
      link: "https://joerovar.github.io/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/joerovar/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/josephrodrivar/",
    },
  ]
}
