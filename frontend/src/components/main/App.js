import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"; 

import Logo from "../template/Logo";
import Nav from "../template/Nav";
import Home from "../home/Home";
import Footer from "../template/Footer";

function App() {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Home />
            <Footer />
        </div>
    );
}

export default App;