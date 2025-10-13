import "./NeonCard.css"

const NeonCard = ({ id, color, children }) => {
  return (
    <section id={id} className={`neon-card ${color}`}>{children}</section>
  )
}

export default NeonCard
