import { ReactNode } from "react";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;