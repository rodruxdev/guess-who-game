type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color: string;
};

const Button = ({ onClick, color, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`${color} block w-[280px] py-4 px-3 rounded-lg text-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
