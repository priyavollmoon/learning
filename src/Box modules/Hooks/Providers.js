import React, { useContext, useState } from "react";
import { AuthorizeContext, myContext, ThemeContext } from "./Mycontext";
import Hooks from "./Hooks";

function Providers() {
  const [name, setName] = useState("rasika");

  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((pre) => (pre === "light" ? "dark" : "light"));

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);
  return (
    <myContext.Provider value={{ name, setName }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AuthorizeContext.Provider value={{ isLoggedIn, login, logOut }}>
          <Hooks />
        </AuthorizeContext.Provider>
      </ThemeContext.Provider>
    </myContext.Provider>
  );
}

export default Providers;
