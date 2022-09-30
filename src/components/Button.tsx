import React from "react";
import "../styles/Button.css";

interface ButtonProps {
  buttonText: string;
  isLoading?: boolean;
}

const Button = ({ buttonText, isLoading }: ButtonProps): JSX.Element => {
  return (
    <button type="submit" className="button" disabled={isLoading}>
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
