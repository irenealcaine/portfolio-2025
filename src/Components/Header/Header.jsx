import "./Header.css"
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><h1>Irene Alcaine</h1></Link>
      <IoLanguage size="1.5em" />
    </div>
  )
}

export default Header
