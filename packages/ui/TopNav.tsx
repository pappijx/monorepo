import React, { HTMLProps, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

interface ITopNav {
  logo?: string;
  logoText?: string;
  className?: HTMLProps<HTMLElement>["className"];
  profileDropdownList?: React.ReactNode[];
}

export const TopNav = ({
  logo,
  logoText,
  className,
  profileDropdownList,
}: ITopNav) => {
  const [isProfileExpanded, setIsProfileExpanded] = useState<boolean>(false);
  return (
    <header
      className={`relative flex justify-between items-center px-4 h-14 shadow-md bg-black border-b-2 border-b-slate-800 ${className}`}
    >
      <div className="flex items-center gap-1 font-semibold text-slate-400 text-2xl">
        {/* {logo && <img src={logo} width="60px" height="auto" />} */}
        {logoText && <a href="/">{logoText}</a>}
      </div>
      <div className="flex gap-1 bg-inherit">
        <ProfileDropdown
          isProfileExpanded={isProfileExpanded}
          setIsProfileExpanded={setIsProfileExpanded}
          profileDropdownList={profileDropdownList}
        />
      </div>
    </header>
  );
};
