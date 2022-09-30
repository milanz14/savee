import React from "react";

interface ButtonProps {
  buttonText: string;
  isLoading?: boolean;
  btnClass: string;
}

const Button = ({
  buttonText,
  isLoading,
  btnClass,
}: ButtonProps): JSX.Element => {
  return (
    <button type="button" disabled={isLoading} className={btnClass}>
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
