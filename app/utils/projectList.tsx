import { AntdSVG, CSSSVG, PrimeReactSVG, ReactHookFormSVG, ReactSVG, SassSVG, ShadcnLandingSVG, ShadcnSVG, TailwindSVG, TypescriptSVG } from "../components/ui/icons";
import { ProjectType } from "../types";
// Note: NextSVG is not used in this file; kept only where needed elsewhere

export const ProjectList: ProjectType[] = [
  {
    icon: <ShadcnLandingSVG />,
    title: "AESOLAR (APPLE STORE APLICATION)",
    subtitle: "Landing page template",
    technologies: [


      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Strapi",
        icon: (
          <ShadcnSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "CSS",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
    ],
    description:
      "React Native AESOLAR app for solar energy users, with real-time customization and robust customer support. Seamless, responsive design ensures an intuitive and modern mobile experience.",
    imgUrl:
      "/img/AESOLAR_APP.png",
    videoUrl: "",
    githubUrl: "NONE",
    websiteUrl: "https://apps.apple.com/de/app/ae-solar/id1484920729?l=en-GB",
  },
  {
    icon: <ShadcnLandingSVG />,
    title: "AESOLAR",
    subtitle: "Landing page template",
    technologies: [


      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },

      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
    ],
    description:
      "Next.js-powered AESOLAR project with dynamic content management via Strapi. Enjoy a responsive, blog-friendly site with seamless updates and an intuitive, modern user experience..",
    imgUrl:
      "/img/AESOLAR.png",
    videoUrl: "",
    githubUrl: "NONE",
    websiteUrl: "https://ae-solar.com/",
  },
  {
    icon: <ShadcnLandingSVG />,
    title: "MAIER TECH",
    subtitle: "Landing page template",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },

      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "VITE",
        icon: (
          <ShadcnSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
    ],
    description:
      "Landing page  with essential sections to promote a particular product, service, event, or offer. It is fully responsive, customizable, has dark mode, meta tags and user-friendly interface.",
    imgUrl: "/img/maier.tech.png",
    videoUrl: "/img/maier.tech.png",
    githubUrl: "NONE",
    websiteUrl: "https://maiertech.energy/",
  },
  {
    icon: <ShadcnLandingSVG />,
    title: "DETAILSHOP",
    subtitle: "Restaurant Menu",
    technologies: [
      {
        name: "Lipscore",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },

      {
        name: "DUEL",
        icon: (
          <CSSSVG
            color="#1572B6"
            size={16}
          />
        ),
      },
      {
        name: "WordPress",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
    ],
    description:
      "DETAILSHOP, top distributor of German chemicals in Norway, powered by a WordPress WooCommerce store with DUEL integration for seamless inventory management and user-friendly shopping.",
    imgUrl: "/img/detailshop.png",
    videoUrl: "/img/detailshop.png",
    githubUrl: "NONE",
    websiteUrl: "https://detailshop.no/",
  },
  {
    icon: <ShadcnLandingSVG />,
    title: "Meikes Catering Augsburg",
    subtitle: "E-commerce",
    technologies: [



      {
        name: "CSS3",
        icon: (
          <SassSVG
            color="#CC6699"
            size={16}
          />
        ),
      },

      {
        name: "WordPress",
        icon: (
          <PrimeReactSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
      {
        name: "YoastSEO",
        icon: (
          <ReactHookFormSVG
            color="#EC5990"
            size={16}
          />
        ),
      },
    ],
    description:
      "WordPress site for Meikes Schmeckerei, a cozy Augsburg café. Responsive design, contact and booking plugins, SEO-optimized for local business, highlighting seasonal cuisine.",
      imgUrl: "/img/maike.png",
      videoUrl: "/img/maike.png",
    githubUrl: "NONE",
    websiteUrl: "https://meikes-catering.com/",
  },
];
