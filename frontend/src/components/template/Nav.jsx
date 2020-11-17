import "./Nav.css";
import React from "react";
import NavItem from "./NavItem";

function Nav(props) {
    return (
        <aside className="menu-area">
            <nav className="menu">
                <NavItem href="/" icon="home" text="Início" />
                <NavItem href="/users" icon="users" text="Usuários" />
            </nav>
            
            <div className="dark-zone"> 
                <span>Dark Mode</span>
                <label className="switch">
                    <input type="checkbox"
                        onChange={(event) => {
                            props.onChange(event.target.checked)
                        }}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
            
        </aside>
    );
}

export default Nav;