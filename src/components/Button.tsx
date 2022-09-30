import React from "react";

interface ButtonProps {
  buttonText: string;
  isLoading?: boolean;
}

const Button = ({ buttonText, isLoading }: ButtonProps): JSX.Element => {
  return (
    <button type="submit" disabled={isLoading}>
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
