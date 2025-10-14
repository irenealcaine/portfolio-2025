import "./NeonCard.css"

const NeonCard = ({ id, color, children, href }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`neon-card ${color}`} id={id}>
        {children}
      </a>
    )
  }

  return (
    <section id={id} className={`neon-card ${color}`}>{children}</section>
  )
}

export default NeonCard
