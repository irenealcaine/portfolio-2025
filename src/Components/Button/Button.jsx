import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  variant = "primary", // 'primary' | 'ghost' | 'link'
  size = "md", // 'sm' | 'md' | 'lg'
  href,
  to,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...rest
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        rel={rest.target === "_blank" ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;