import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to={"/productos"} className="navbar-brand">
                    React CRUD
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to={"/productos"}>
                                Productos
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className="nav-link"
                            activeClassName="active"
                            to={"/nuevo-producto"}>
                                Nuevo Producto
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Header;