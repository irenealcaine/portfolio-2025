import cv from "../assets/cv.png"
import spiral from "../assets/spiral.svg"
import resources from "../assets/code.svg"

import react from "../assets/react.svg"
import vue from "../assets/vue.svg"
import tailwind from "../assets/tailwind.svg"

import heroui from "../assets/hero-ui.png"

import supabase from "../assets/supabase.svg"

export const mainProjects = [
  {
    id: "project1",
    icon: spiral,
    tech: [react],
    color: "yellow",
    href: "https://template-irene.netlify.app/"
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
