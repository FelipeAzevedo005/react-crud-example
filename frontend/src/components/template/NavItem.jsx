import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
    return (
        <Link to={props.href}>
            <i className={`fa fa-${props.icon}`}></i> {props.text}
        </Link>
    );
}

export default NavItem;