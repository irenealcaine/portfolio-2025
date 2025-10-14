import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

export const socialMedia = [
  {
    id: "mail",
    text: "irenealcainealvarez@gmail.com",
    href: "mailto:irenealcainealvarez@gmail.com?Subject=Charlemos",
    icon: <FiMail />,
    color: "red"
  },
  {
    id: "phone",
    text: "629882129",
    href: "https://api.whatsapp.com/send?phone=629882129&text=Hola",
    icon: <IoLogoWhatsapp />,
    color: "green"
  },
  {
    id: "github",
    text: "github.com/irenealcaine",
    href: "https://github.com/irenealcaine",
    icon: <FiGithub />,
    color: "yellow"
  },
  {
    id: "linkedin",
    text: "linkedin.com/in/irenealcaine/",
    href: "https://www.linkedin.com/in/irenealcaine/",
    icon: <FiLinkedin />,
    color: "light-blue"
  },
];
