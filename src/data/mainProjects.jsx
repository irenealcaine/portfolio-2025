import list from "../assets/list.png"
import spiral from "../assets/spiral.svg"
import resources from "../assets/code.svg"

import react from "../assets/react.svg"

import heroui from "../assets/hero-ui.png"
import sass from "../assets/sass.png"

import supabase from "../assets/supabase.svg"
import firebase from "../assets/firebase.svg"

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
    icon: list,
    tech: [react, sass, firebase],
    color: "light-blue",
    href: "https://lista-compra-irene.netlify.app/"
  },
]
