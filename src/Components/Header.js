import React from "react";
import { netflixLogo } from "../Config";

function Header (){
    return (
      <div className="flex flex-nowrap p-2">
        <img className="h-9 w-20" src="" alt="Netflix" />
        <div className="ml-auto">
          <button className="my-1">English</button>
          <button className="mx-2">Sign In</button>
        </div>
      </div>
    );
}

export default Header;