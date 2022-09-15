import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <NavLink to="/"  activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink to="/a-propos"   activeClassName="nav-active">
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;