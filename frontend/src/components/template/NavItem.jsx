import React from "react";

function NavItem(props) {
    return (
        <a href={props.href}>
            <i className={`fa fa-${props.icon}`}></i> {props.text}
        </a>
    );
}

export default NavItem;