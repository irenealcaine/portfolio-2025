import { IoLanguage } from "react-icons/io5";
import { useLanguage } from "../../contexts/LanguageContext.jsx";
import "./LanguageToggle.css";

const LanguageToggle = ({ size = "1.5em", className = "" }) => {
  const { toggleLanguage, currentLanguage } = useLanguage();

  return (
    <button
      className={`language-toggle ${className}`}
      onClick={toggleLanguage}
      title={`Switch to ${currentLanguage === 'es' ? 'English' : 'Español'}`}
      aria-label={`Change language to ${currentLanguage === 'es' ? 'English' : 'Spanish'}`}
    >
      <IoLanguage size={size} />
    </button>
  );
};

export default LanguageToggle;
