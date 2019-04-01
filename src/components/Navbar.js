import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ height: "100vh", width: "200px", position: "fixed" }}>
      <div className="container">
        {/* <div className="col s4">
          <img src={require("../assets/logo-helpie.png")} />
        </div> */}
        <ul className="categories-container">
          <li>
            <NavLink to="/">Cadastrar</NavLink>
          </li>
          <li>
            <NavLink to="/clientes">Clientes</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
