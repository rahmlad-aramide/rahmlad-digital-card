import React from "react";
import 'tachyons';
import Navbar from "./components/Navbar";
import Body from "./components/MainComponent";
import Footer from "./components/Footer";


function App(){
  return(
    <div className="background">
      <Navbar />
      <Body />
      <Footer />
    </div>
  )
}

export default App