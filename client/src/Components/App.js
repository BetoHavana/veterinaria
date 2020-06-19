import React, { Component } from 'react';
import './Styles/App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Mascotas from './Mascotas.js'
import Formulario from './Formulario.js'
import Navbar from './Navbar.js';
import Clientes from './Clientes';
class App extends React.Component {
  constructor() {
    super();
  
  }
    // RETURN THE COMPONENT
   render(){
    return (
      <BrowserRouter>
      <div>
        <Navbar />
      <main>
            <div>
              <Redirect from="/" to="/home" />
              <Switch>
              <Route path="/home"component={Mascotas} />
              <Route exact path="/path1" render={() => <Formulario />} />
              <Route exact path="/path2" render={() => <Mascotas />} />
              <Route exact path="/path3" render={() => <Clientes />} />
              </Switch>
            </div>
      </main>
      </div>
      </BrowserRouter>
    )
  }
}


export default App;