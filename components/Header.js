import React from "react";

// images
// import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#" className="text-gradient text-3xl btn-link">
            My Portfolio
          </a>
          {/* button */}
          <button className="btn btn-sm">
            <a href="mailto:shrutikeshri107@gmail.com">Hire Me</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
