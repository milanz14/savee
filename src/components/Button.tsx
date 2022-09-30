import React from "react";

interface ButtonProps {
  buttonText: string;
  isLoading?: boolean;
  btnClass: string;
  type?: string;
}

const Button = ({
  buttonText,
  isLoading,
  btnClass,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <button type="submit" disabled={isLoading} className={btnClass}>
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
