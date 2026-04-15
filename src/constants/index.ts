import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  web,
  javascript,
  html,
  css,
  jquery,
  json,
  git,
  teamlead,
  clienticon,
  f5global,
  cheeseroom,
  oscarintkw,
  tryautobrush,
  inventeryCo,
  readyMadeCo,
  shopify,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services: TService[] = [
  {
    title: "Certified Shopify Expert",
    icon: shopify,
    level: 100,
  },
  {
    title: "Team Lead",
    icon: teamlead,
    level: 90,
  },
  {
    title: "Shopify Theme Dev",
    icon: web,
    level: 95,
  },
  {
    title: "Client Interaction",
    icon: clienticon,
    level: 88,
  },
];

const technologies: TTechnology[] = [
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
    name: "Liquid",
    icon: shopify,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "JSON",
    icon: json,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Junior Web Developer",
    companyName: "Real Cube Technologies",
    icon: "https://www.google.com/s2/favicons?domain=realcubetechnology.com&sz=64",
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Joined as a trainee to kickstart my professional development journey in web technologies.",
      "Learned and applied Shopify theme fundamentals including Liquid templating and store customization.",
      "Assisted senior developers in building and maintaining client storefronts.",
      "Gained hands-on experience with HTML, CSS, and JavaScript in real project environments.",
      "Participated in team meetings and code reviews to understand professional development workflows.",
    ],
  },
  {
    title: "Shopify Developer",
    companyName: "Stark Edge",
    icon: "https://www.google.com/s2/favicons?domain=www.starkedge.com&sz=64",
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Worked as a Shopify developer building and customizing themes for client stores.",
      "Developed custom Liquid templates and sections to match brand requirements.",
      "Implemented JavaScript and jQuery enhancements for improved store interactivity.",
      "Collaborated with designers to translate mockups into pixel-perfect Shopify storefronts.",
      "Handled app integrations and third-party plugin configurations for various merchants.",
    ],
  },
  {
    title: "Sr. Shopify Developer",
    companyName: "Code Dreamz",
    icon: "https://www.google.com/s2/favicons?domain=codedreamz.com&sz=64",
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Led Shopify theme development for multiple client stores as a senior developer.",
      "Architected custom Liquid sections, templates, and reusable components for scalable storefronts.",
      "Mentored junior developers and conducted code reviews to maintain code quality.",
      "Handled complex app integrations, custom checkout flows, and performance optimizations.",
      "Collaborated directly with clients to gather requirements and deliver tailored eCommerce solutions.",
    ],
  },
  {
    title: "Sr. Shopify Developer → Team Lead",
    companyName: "Techies Infotech",
    icon: "https://www.google.com/s2/favicons?domain=iamtechie.com&sz=64",
    iconBg: "#ffffff",
    date: "2023 - Present",
    points: [
      "Joined as Sr. Shopify Developer and promoted to Shopify Team Lead based on performance.",
      "Leading the full Shopify development team — managing tasks, timelines, and project delivery.",
      "Training and mentoring new developers to build strong Shopify theme and Liquid skills.",
      "Acting as the primary point of contact between clients, mobile teams, and backend teams.",
      "Ensuring code quality, best practices, and on-time delivery across all active projects.",
    ],
  }
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "AutoBrush",
    description:
      "My first solo Shopify project completed during my learning phase — successfully delivered a fully functional storefront independently, marking a key milestone in my Shopify journey.",
    tags: [
      { name: "shopify", color: "blue-text-gradient" },
      { name: "liquid", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: tryautobrush,
    sourceCodeLink: "https://tryautobrush.com/",
    favicon: "https://www.google.com/s2/favicons?domain=tryautobrush.com&sz=64",
  },
  {
    name: "F5 Global",
    description:
      "Led the full Shopify store build from scratch as Team Lead — architecting the theme, managing the dev team, and delivering a custom storefront for a fashion brand.",
    tags: [
      { name: "shopify", color: "blue-text-gradient" },
      { name: "liquid", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: f5global,
    sourceCodeLink: "https://f5global.com",
    favicon: "https://www.google.com/s2/favicons?domain=f5global.com&sz=64",
  },
  {
    name: "Cheese Room",
    description:
      "Custom Shopify storefront for a specialty cheese brand — guided the dev team, interacted directly with the store owner to gather requirements and deliver a tailored theme.",
    tags: [
      { name: "shopify", color: "blue-text-gradient" },
      { name: "liquid", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: cheeseroom,
    sourceCodeLink: "https://cheeseroom.com/",
    favicon: "https://www.google.com/s2/favicons?domain=cheeseroom.com&sz=64",
  },
  {
    name: "Oscar",
    description:
      "Large-scale project spanning a Shopify website, mobile app, and custom OMS — led the website team and coordinated with mobile, backend teams and the client to deliver end to end.",
    tags: [
      { name: "shopify", color: "blue-text-gradient" },
      { name: "liquid", color: "green-text-gradient" },
      { name: "custom-oms", color: "pink-text-gradient" },
    ],
    image: oscarintkw,
    sourceCodeLink: "https://www.oscarintkw.com/",
    favicon: "https://www.google.com/s2/favicons?domain=oscarintkw.com&sz=64",
  },
  {
    name: "Inventery",
    description:
      "Custom Shopify storefront for Inventery — built and delivered a clean, conversion-focused theme with tailored sections and smooth shopping experience.",
    tags: [
      { name: "shopify", color: "blue-text-gradient" },
      { name: "liquid", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: inventeryCo,
    sourceCodeLink: "https://www.inventery.co/",
    favicon: "https://www.google.com/s2/favicons?domain=inventery.co&sz=64",
  },
  {
    name: "Ready Made",
    description:
      "Shopify theme development for Ready Made — crafted a polished storefront with custom layouts, product pages, and brand-aligned design.",
    tags: [
      { name: "shopify", color: "blue-text-gradient" },
      { name: "liquid", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: readyMadeCo,
    sourceCodeLink: "https://www.ready-made.co/",
    favicon: "https://www.google.com/s2/favicons?domain=ready-made.co&sz=64",
  },
];

export { services, technologies, experiences, testimonials, projects };
