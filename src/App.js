import React from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import "./DefaultStyles.scss"

import MainMenu from "./components/Menu/MainMenu";
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contacts from "./components/Contacts/Contacts"

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMenu/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
        </Routes>
      </div>
        );
}
export default App;
