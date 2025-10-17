import React from "react";
import { Link } from "react-router-dom";
import "./BackLink.css";

const BackLink = ({ to = "/", text, children, className = "" }) => {
  const label = text || children || "Back";
  return (
    <Link to={to} className={`backlink ${className}`}>
      <span className="backlink-icon" aria-hidden>←</span>
      <span className="backlink-text">{label}</span>
    </Link>
  );
};

export default BackLink;