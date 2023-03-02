import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("dark")

  const handleChangeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  
  return (
    <div className={theme === "light" ? "App app-light" : "App"}>
      <Home theme={theme} handleChangeTheme={handleChangeTheme}/>
    </div>
  );
}

export default App;
