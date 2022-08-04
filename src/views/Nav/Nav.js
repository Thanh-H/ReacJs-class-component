import React from "react";
import './nav.css';
import { Link, NavLink } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <NavLink exact={true}  to="/" activeClassName="active" >Home</NavLink>
                <NavLink to="/Todos">Todos</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/user">User</NavLink>
            </div>
        )
    }
}
export default Nav 