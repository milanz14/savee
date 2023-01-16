interface ButtonProps {
  buttonText: string;
  isLoading?: boolean;
  btnClass: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, isLoading, btnClass }): JSX.Element => {
  return (
    <button type="submit" disabled={isLoading} className={btnClass}>
      {buttonText.toUpperCase()}
    </button>
  );
};

export default Button;
