import React, { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonProps) => {
  const [buttonColor, setButtonColor] = useState("btn-primary");
  const handleClick = () => {
    if (buttonColor === "btn-primary") {
      setButtonColor("btn-secondary");
    } else if (buttonColor === "btn-secondary") {
      setButtonColor("btn-success");
    } else if (buttonColor === "btn-success") {
      setButtonColor("btn-danger");
    } else {
      setButtonColor("btn-primary");
    }
  };
  return (
    <div onClick={handleClick} className={`btn ${buttonColor}`}>
      {children}
    </div>
  );
};

export default Button;
