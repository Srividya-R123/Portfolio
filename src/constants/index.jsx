import {
    mobile,
    gro,
    ap,
    cb,
    bb,
    backend,
    creator,
    web,
    udemy,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Poster Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Farmers Market Grocery Website",
      company_name: "ReactJS",
      icon: gro,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Product listing for easy browsing and selection of groceries.",
"User login and registration for personalized shopping experience.",
"Search functionality to quickly find specific products.",
"Efficient cart management for adding and removing items.",
"Secure payment option and user profiles for seamless transactions."
      ],
    },
    {
      title: "Aarogyam Health Care Chatbot",
      company_name: "C++",
      icon: cb,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - May 2023",
      points: [
        "Health Care Chatbot developed in C++ integrates Dijkstra's algorithm for finding shortest distances and closest hospitals.",
"Provides users with symptom diagnosis, suggestions, and recommends nearby medical facilities.",
"Enables online appointment booking according to disease severity and user preferences.",
"Utilizes graph-based approach for efficient healthcare information management.",
"A comprehensive solution for healthcare guidance and patient care using advanced algorithms."
      ],
    },
    {
      title: "Accomodation Management System",
      company_name: "HTML CSS JS PHP OracleSQL",
      icon: ap,
      iconBg: "#383E56",
      date: "Sep 2022 - Dec 2022",
      points: [
        "Accommodation Management System website built with HTML, CSS, JS, PHP, and Oracle SQL.",
        "Allows users to register as owners or tenants, simplifying property management.",
        "Enables apartment searches based on preferences, streamlining property selection.",
        "Securely handles rent history, payments, and property details for a seamless experience.",
        "Owners can list properties with specific constraints, enhancing property listings."
      ],
    },
    {
      title: "Blood Bank Management System",
      company_name: "HTML CSS JS PHP MySQL",
      icon:bb,
      iconBg: "#383E56",
      date: "May 2022 - July 2023",
      points: [
        "Blood Bank Management System web application created with HTML, CSS, JS, PHP, and MySQL.",
"Facilitates user registration and login, allowing donors to register and request specific blood types.",
"Enables users to search for available blood groups, make blood requests, and manage transactions.",
"Comprehensive platform for efficient blood donation and distribution, enhancing healthcare services.",
"An integrated solution for blood bank operations and seamless user interaction."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };