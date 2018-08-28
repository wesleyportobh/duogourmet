import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './restaurantes.json';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Teste Wesley Duo Gourmet</h1>
      </header>
      <p className="App-intro">
      Lista de Restaurantes: <code>React/bootstrap@4/Npm</code>.
      </p>
      <div class="container">
      <div class="row">
        <input class="form-control" id="myInput" type="text" placeholder="busca.."/>
        
      </div>
      </div>
      
      <ul class="list-group">
      {
        data.map(function(duo){
          return <li class="list-group-item">
          {duo.name} - {duo.cooking} - {duo.review} - {duo.distanceInMeters}  
          - <img src={duo.logoImage} alt="Logo" />
          <span style={{backgroundImage: '{duo.logoImage}'}}>teste</span>
         </li>;
        })
      }
      </ul>

      </div>
      );
  }
}

export default App;
