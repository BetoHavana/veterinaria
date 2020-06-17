import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Page2 from './page2.js'
import Page1 from './page1.js'
import Navbar from './Navbar.js';
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
              <Route path="/home"component={Page2} />
              <Route exact path="/path1" render={() => <Page1 />} />
              <Route exact path="/path2" render={() => <Page2 />} />
              </Switch>
            </div>
      </main>
      </div>
      </BrowserRouter>
    )
  }
}


export default App;