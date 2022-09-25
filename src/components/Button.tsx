import React from "react";
import "../styles/Button.css";

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps): JSX.Element => {
  return (
    <button type="submit" className="button">
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
