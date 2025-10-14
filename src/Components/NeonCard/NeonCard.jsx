import { Link } from "react-router-dom"
import "./NeonCard.css"

const NeonCard = ({ id, color, children, href, to }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`neon-card ${color}`} id={id}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link id={id} className={`neon-card ${color}`} to={to}>{children}</Link>
    )
  }
  return (
    <section id={id} className={`neon-card ${color}`} to={to}>{children}</section>
  )
}

export default NeonCard
