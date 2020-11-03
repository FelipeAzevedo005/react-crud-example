import "./Main.css";
import React from "react";
import Header from "./Header";

function Main(props) {
    return (
        <React.Fragment>
            <Header {...props} />

            <main className="content content-fluid">
                <div className="p-3 mt-3">
                    {props.children}
                </div>
            </main>
        </React.Fragment>
    );
}

export default Main;