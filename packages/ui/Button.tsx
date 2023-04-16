import * as React from "react";

interface IButton {
  children: string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      className="font-bold bg-emerald-700 text-white rounded-md py-2 px-3"
    >
      {children}
    </button>
  );
};
