import React from "react";
import './App.css';
import Header from "./components/Header";
// import Searchform from "./components/Searchform"
import Tablecontainer from "./components/Tablecontainer";

function App() {
  return (
    <div>
      <Header/>
      {/* <Searchform/> */}
      <Tablecontainer />
    </div>
  );
}

export default App;
