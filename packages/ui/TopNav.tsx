import React from "react";

interface ITopNav {
  logo?: string;
  logoText?: string;
}

export const TopNav = ({ logo, logoText }: ITopNav) => {
  return (
    <header className="flex justify-between items-center px-4 h-14 shadow-md">
      <div className="flex items-center gap-1">
        {logo && <img src={logo} width="60px" height="auto" />}
        {logoText && <p>{logoText}</p>}
      </div>
      <div>2</div>
    </header>
  );
};
 