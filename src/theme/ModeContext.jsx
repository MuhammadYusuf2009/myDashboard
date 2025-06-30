import React, { createContext, useContext, useState, useEffect } from "react";

const ModeContext = createContext({
  mode: "light",
  toggleMode: () => {},
});

export const useModeContext = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  const changeMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  };

  useEffect(() => {
    const saved = localStorage.getItem("mode");
    if (saved) {
      setMode(saved);
    }
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggleMode, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};
