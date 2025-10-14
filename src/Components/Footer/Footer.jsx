import "./Footer.css"
import { socialMedia } from "../../data/socialMedia"

const Footer = () => {
  return (
    <div className="footer">
      {socialMedia.map((media) => (
        <a key={media.id} href={media.href} target="_blank" rel="noopener noreferrer" className={`footer-icon ${media.color}`}>
          {media.icon}
        </a>
      ))}
    </div>
  )
}

export default Footer
