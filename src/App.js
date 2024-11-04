import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage";
import { 
  Contact,
  Footer,
  Intro,
  Navbar,
  Portfolio,
  Timeline,
  Title
} from "./components/common";

import "./App.css";


class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Intro />
				<Portfolio />
				<Timeline />
				<Contact />
        <HomePage />
        <Footer />
      </div>
    )
  }
}

export default App;
