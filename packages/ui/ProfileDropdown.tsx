import React from "react";

interface IProfileDropdown {
  isProfileExpanded: boolean;
  setIsProfileExpanded: (data: boolean) => void;
  profileDropdownList?: React.ReactNode[];
}

const ProfileDropdown = ({
  isProfileExpanded,
  setIsProfileExpanded,
  profileDropdownList = [],
}: IProfileDropdown) => {
  return (
    <div className="relative bg-inherit border-inherit">
      <div
        onClick={(e) => {
          console.log("click");
          setIsProfileExpanded(!isProfileExpanded);
        }}
        className="bg-inherit border-2 border-slate-800 h-10 w-10 rounded-full grid place-items-center hover:bg-slate-800 cursor-pointer"
      >
        NA
      </div>
      {isProfileExpanded && profileDropdownList.length > 0 && (
        <div className="absolute bg-inherit flex flex-col gap-1 mt-1 right-0 p-2 border-2 border-slate-800 rounded-md w-56">
          {profileDropdownList?.length > 0 &&
            React.Children.toArray(
              profileDropdownList.map((item) => {
                return item;
              })
            )}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
