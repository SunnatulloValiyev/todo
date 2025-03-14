import React from "react";

function Button({ children, onClick, type = "button", variant = "primary" }) {
  const baseStyle = "px-3 py-2 rounded-md text-white font-semibold";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
