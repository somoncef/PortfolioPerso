import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Monsif Souri",
  initials: "SM",
  url: "https://somoncef.me",
  location: "Casablanca , morocco",
  locationLink: "",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "I am a 23-year-old computer engineering student with a focus on computer methods applied to business management. I love competing in hackathons, building new projects, and discovering new technologies. I am currently pursuing a Master’s degree in Computer Engineering and am looking for a six-month internship starting in February 2024 to complete my end-of-study project. In addition to my passion for technology, I love sports, especially bodybuilding",
  avatarUrl: "/me2.jpg",
 skills: [ "React", "Next.js", "Typescript", "Node.js", "Python", "Postgres", "Docker", "Kubernetes", "Java", "C++", "Spring", "Spring Boot", "Django", "Tailwind CSS", "Microsoft .Net (C#)", "Javascript", "Microsoft SQL Server", "Oracle Database", "MongoDB", "MySQL", "Git", "GitHub", "Pandas", "Scikit-learn", "Hadoop", "Pig", "Hive" ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
   ],
  contact: {
    email: "somoncef@gmail.com",
    tel: "+212 688167585",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/somoncef",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/monsif-souri",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/souri_moncef",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email, 
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Maghreb Rayonnage",
      href: "https://maghreb-rayonnage.ma",
      badges: [],
      location: "Casablanca Metropolitan Area",
      title: "Full Stack Developer Internship",
      logoUrl: "/logo-maaa.ico",
      start: "Jul 2024",
      end: "Aug 2024",
      description:
        "During my internship, I developed a dynamic web application using Next.js and Node.js to automate the generation of customized reports (Cahier des Prescriptions Spéciales), reducing human errors and production times. I created an image scraping script for a B2B platform to retrieve product images based on names and transitioned client data management from paper forms to an online interface. Additionally, I implemented a user-friendly interface with Tailwind CSS and developed a scraping script using the Google Maps and Google Places APIs to gather information about businesses in industrial zones.",
    }, 
  ],
  education: [
    {
      school: "Moroccan School of Engineering Sciences (EMSI)",
      href: "https://www.emsi.ma/",
      degree: "Master's degree in Computer Engineering and Networks, MIAGE option",
      logoUrl: "/emsi2.jpeg",
      start: "2022",
      end: "2025",
    },
    {
      school: "Faculty of Sciences, Ain Chock",
      href: "http://www.fsac.ac.ma/",
      degree: "Bachelor's Degree in Software Development",
      logoUrl: "/fac.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "OFPPT NTIC1, Casablanca",
      href: "https://www.ofppt.ma/",
      degree: "Specialized Technician Diploma in Computer Development",
      logoUrl: "/ofppt.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Henri Matisse School Group",
      href: "http://www.henrimatisse.ma/",
      degree: "Baccalaureate in Physical Sciences and Chemistry",
      logoUrl: "/henri.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "WebMorphers Agency",
      href: "https://webmorphers.com",
      dates: "Ongoing",
      active: true,
      description:
        "At WebMorphers, we specialize in designing and developing websites and mobile applications tailored to our clients' needs. We leverage a range of technologies to build responsive, scalable, and visually appealing solutions. Our agency covers the full cycle of development, from design mockups to fully functioning websites and mobile apps.",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TailwindCSS",
        "PostgreSQL",
        "Figma",
        "Stripe",
        "Docker",
        "Firebase",
        "MapBox",
      ],
      links: [
        {
          type: "Website",
          href: "https://webmorphers.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/agencyWebsiteOPT.mp4",
    },
    {
      title: "GONDIF",
      dates: "July 2023 - August 2023",
      active: true,
      description:
        "Collaborated with a team to develop a Progressive Web App (PWA) that allows users to easily book car wash services. The client can specify their location through the app, and a dedicated team arrives with the necessary equipment to wash the car at the specified location, whether in a garage or a parking spot.",
      technologies: [
        "Next.js",
        "PWA",
        "TailwindCSS",
        "MapBox API",
        "Node.js",
        "React",
        "Firebase", 
      ],
      links: [ 
      ],
      image: "/gondif.jpeg",
      video: "",
    },
    {
      title: "MEMORIAL", 
      dates: "April 2024 - Mai 2024",
      active: true,
      description:
        "Developed an online bookstore where users can purchase books and receive personalized book recommendations based on their purchase history. We trained a recommendation model using data from Kaggle and employed the K-Nearest Neighbors algorithm for precise suggestions. The data was preprocessed and cleaned for better accuracy, and the model was trained using a 70/30 train-test split in Jupyter Notebook.",
      technologies: [
        "Django",
        "Python",
        "Scikit-learn",
        "Jupyter Notebook",
        "My SQL",
        "Bootstrap",
        "Kaggle",
      ],
      links: [ 
      ],
      image: "/bookreco.png",
      video: "",
    },
    {
      title: "Luxury Car Rental Website",
       dates: "August 2023 - September 2023",
      active: true,
      description:
        "Collaborated with a friend to build a luxury car rental platform using Spring Boot for the backend and React.js for the frontend. The website allows users to browse available luxury cars, select rental dates, and book vehicles. We implemented user authentication and security features using Spring Security and JWT tokens for secure login. The site provides a seamless booking experience with a responsive design.",
      technologies: [
        "React.js",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "TailwindCSS",
        "PostgreSQL",
        "REST API",
        "Java",
      ],
      links: [ 
      ],
      image: "/luxcar.png",
      video: "",
    },
    
    
  ],
  hackathons: [ 
    {
      title: "MEDITERRANEAN SMART CITIES HACKATHON",
      dates: "May 2nd, 2024",
      location: "TETOUAN, Morocco",
      description:
        "During the hackathon, our team developed a system to monitor street lamps using street cameras. When a street lamp goes off, a notification is sent to a technician via a mobile app we built using Java Mobile. Additionally, we created an admin app using Next.js, allowing administrators to assign zones to teams—ensuring that only the responsible team receives notifications for their designated zone. We also implemented a prioritization feature that guides technicians to prioritize lamps in high-traffic and high-crime areas. Firebase was used as the backend to manage real-time data and notifications.",
      image:
        "/hackathon 1.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/somoncef/Smart-city-Gestion-Materielle",
        },
      ],
    }, 
    {
      title: "Orbis HOUSE HACKATHON",
      dates: "Sep 23rd, 2024",
      location: "Casablanca, Morocco",
      description:
        "In This hackathon, our team developed an arbitrage bot on the Solana blockchain. The bot scans decentralized exchange (DEX) pools for price differences in a given token. When it finds an opportunity, it executes smart contracts to buy the token from the cheaper pool and sell it in the more expensive one, using high-frequency trading strategies to maximize profits. We built the smart contracts in TypeScript, and the app, which allows users to input token addresses and search for arbitrage opportunities, was developed in Next.js, leveraging APIs from the DEXs.",
      image:
        "/hack2.png",
      links: [ 
      ],
    },  
  ],
} as const;
