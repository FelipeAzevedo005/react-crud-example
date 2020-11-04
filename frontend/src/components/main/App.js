import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"; 

import Logo from "../template/Logo";
import Nav from "../template/Nav";
import Main from "../template/Main";
import Footer from "../template/Footer";

function App() {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main icon="home" title="Início" 
                subtitle="Segundo Projeto do capítulo de React" icon="home">
                <div className="display-4">Bem Vindo!</div>
                <hr/>
                <p className="mb-0">Sistema para exemplificar a construção
                    de um cadastro desenvolvido em React!
                </p>
            </Main>

            <Footer />
        </div>
    );
}

export default App;