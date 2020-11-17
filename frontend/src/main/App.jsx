import React, { Component }from "react";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"; 

import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Routes from "../main/Routes";
import Footer from "../components/template/Footer";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { theme: null };
        this.changeColors = this.changeColors.bind(this);
    }
    
    changeColors(dark) {
        var theme;

        if (dark) {
            theme = "dark";
        } else theme = null;

        this.setState({ theme });
    }

    render() {
        return (
            <BrowserRouter>        
                <div className={`app ${this.state.theme}`}>
                    <Logo />
                    <Nav onChange={this.changeColors}/>
                    <Routes />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;