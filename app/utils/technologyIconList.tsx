import { iconType } from "../types";
import Image from "next/image";
import {
  JavascriptSVG,
  TypescriptSVG,
  FigmaSVG,
  ReactSVG,
  TailwindSVG,
  ExpressSVG,
  NextUISVG,
  NextSVG,
  PrimeReactSVG,
  PrimeVueSVG,
  QuasarSVG,
  MongoDBSVG,
  ShadcnSVG,
} from "../components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "WEB3",
    icon: (
      <Image
        src="/icons/bitcoin.png"
        alt="Bitcoin"
        width={35}
        height={35}
      />
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <TypescriptSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Figma",
    icon: (
      <FigmaSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <ReactSVG
        color={color}
        size={35}
      />
    ),
  },

  {
    name: "Apple",
    icon: (
      <Image
        src="/icons/apple-icons.png"
        alt="Apple"
        width={35}
        height={35}
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <TailwindSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "WordPress",
    icon: (
      <Image
        src="/icons/wordpress.png"
        alt="WordPress"
        width={35}
        height={35}
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <NextSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "NextUI",
    icon: (
      <NextUISVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Shadcn",
    icon: (
      <ShadcnSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "Express",
    icon: (
      <ExpressSVG
        color={color}
        size={35}
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <MongoDBSVG
        color={color}
        size={35}
      />
    ),
  },
];
