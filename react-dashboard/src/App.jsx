import { useState } from "react";
import Home from "./Home";
import Header from "./Header";
import SideBar from "./SideBar";

import "./App.css";

function App() {
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false);

  const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSideBar={OpenSideBar} />
      <SideBar
        openSideBarToggle={openSideBarToggle}
        OpenSideBar={OpenSideBar}
      />
      <Home />
    </div>
  );
}

export default App;
