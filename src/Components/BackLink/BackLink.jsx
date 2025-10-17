import { Link } from "react-router-dom";
import "./BackLink.css";
import { AiOutlineLeft } from 'react-icons/ai'

const BackLink = ({ to = "/", text, className = "" }) => {
  return (
    <Link to={to} className={`backlink ${className}`}>
      <span className="backlink-icon" aria-hidden>
        <AiOutlineLeft />
      </span>
      <p className="backlink-text">{text} </p>
    </Link>
  );
};

export default BackLink;