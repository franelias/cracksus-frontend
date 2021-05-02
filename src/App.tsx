import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Topbar from "./components/Topbar";

import "./styles.scss";

const App = () => {
  return (
    <Router>
      <Topbar />
      <Routes />
    </Router>
  );
};

export default App;
