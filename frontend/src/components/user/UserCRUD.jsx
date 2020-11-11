import React, { Component } from "react";

import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState };

    render() {
        return (
            <Main {...headerProps}>

            </Main>
        )
    }

}