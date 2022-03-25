import React from "react";
const NavBar: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex">
          <span className="uppercase self-center text-lg font-semibold whitespace-nowrap">
            SHOP 
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
