import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import 'tachyons';
import App from "./App";


ReactDOM.render(<App />, document.getElementById('root'))


// Another way of displaying image in react
//   {/* Line 8 works alone without the need to import anything */}
//   {/* <img src={require("./react-logo.png")} alt="logo" width="40px" /> */}
