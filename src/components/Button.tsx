type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
  disabled?: boolean;
};

const Button = ({
  onClick,
  color,
  disabled,
  children,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${color} block w-[280px] py-4 px-3 rounded-lg text-lg`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
