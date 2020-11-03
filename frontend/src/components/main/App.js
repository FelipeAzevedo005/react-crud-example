import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./App.css"; 

import Main from "../template/Main";

function App() {
    return (
        <div className="App">
            <Main icon="home" title="Início" 
                subtitle="Segundo Projeto do capítulo de React" icon="home">
                <div className="display-4">Bem Vindo!</div>
                <hr/>
                <p className="mb-0">Sistema para exemplificar a construção
                    de um cadastro desenvolvido em React!
                </p>
            </Main>
        </div>
    );
}

export default App;