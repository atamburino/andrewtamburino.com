import React, { Component } from "react";
import { Navbar } from "./components/common";
import { Footer } from "./components/common";
import HomePage from "./pages/homepage/HomePage";

import "./App.css";


class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    )
  }
}

export default App;
