import React from "react";

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
