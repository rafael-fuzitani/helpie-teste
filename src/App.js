import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Signin from "./components/Signin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <Navbar />
          <Route exact path="/" component={Signin} />
          <Route path="/clientes" component={Clients} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
