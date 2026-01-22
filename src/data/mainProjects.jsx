import cv from "../assets/cv.png"
import resources from "../assets/code.svg"
import logosaurus from "../assets/logosaurus.png";

import react from "../assets/react.svg"
import vue from "../assets/vue.svg"
import tailwind from "../assets/tailwind.svg"
import heroui from "../assets/hero-ui.png"
import supabase from "../assets/supabase.svg"
import node from "../assets/node.svg";

export const mainProjects = [
  {
    id: "project1",
    icon: logosaurus,
    tech: [node],
    color: "yellow",
    href: "https://jwe3-api.up.railway.app/"
  },
  {
    id: "project2",
    icon: resources,
    tech: [react, heroui, supabase],
    color: "purple",
    href: "https://dev-resources-irene.netlify.app"
  },
  {
    id: "project3",
    icon: cv,
    tech: [vue, tailwind],
    color: "light-blue",
    href: "https://curriculum-vitae-builder-cv.netlify.app/"
  },
]
