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
    <button type="submit" disabled={isLoading} className={btnClass}>
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
