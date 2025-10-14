import "./Header.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import LanguageToggle from "../LanguageToggle/LanguageToggle.jsx"

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <Link to="/"><h1>{t('home.name')}</h1></Link>
      <LanguageToggle />
    </div>
  )
}

export default Header
