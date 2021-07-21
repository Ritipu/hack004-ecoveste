import React from 'react';
import './css/App.css';
import Products from "./Products"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src="/assets/logo.png" className="logo"/>
        </div>
        <div>
          <h3>Searchbar</h3>
        </div>
        <div className="menu">
          <p>Menu</p>
        </div>
        <Products />
      </div>
    );
  }
}
