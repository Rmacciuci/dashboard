import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Login } from './Components/Login';


export default class Routes extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Configuramos el titulo inicial de la pagina
        document.title = 'Dashboard';

        // Agregamos las clases del dashboard 
        const divRoot = document.getElementById('root');
        divRoot.classList.add('skin-default');
        divRoot.classList.add('card-no-border');

        // Seteamos el idioma por defecto
        localStorage.setItem('@lang', 'es');
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                </Switch>
            </Router>
        )
    }
}
