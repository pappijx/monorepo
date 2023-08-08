import { log } from "console";
import React from "react";

interface ICards {
  children: any;
}

export const Header = () => {
  return <div>Header</div>;
};
export const Body = () => {
  return <div>Body</div>;
};
export const Footer = () => {
  return <div>Footer</div>;
};

export const Cards = ({ children }: ICards) => {
  console.log(children);

  return (
    <div className="flex flex-col rounded bg-slate-900 w-fit p-4">
      {children}
    </div>
  );
};
