import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import logoImg from "../../assets/imgs/logo.png";

function Logo(props) {
    return (
        <aside className="logo">
            <Link to="/" className="logo">
                <img src={logoImg} alt="logo"/>
            </Link>
        </aside>
    );
}

export default Logo;