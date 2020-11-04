import React from "react";
import "./Logo.css";
import logoImg from "../../assets/imgs/logo.png";

function Logo(props) {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={logoImg} alt="logo"/>
            </a>
        </aside>
    );
}

export default Logo;