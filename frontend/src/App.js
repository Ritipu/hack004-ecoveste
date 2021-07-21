import React from 'react';
import './css/App.css';

import Products from "./Products"

import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">

        <div className="header">
          <img src="/assets/logo.png" className="logo" />
        </div>

        <div className="searchbar">
          <input type="text" className="searchbar-bar" placeholder={`     Insert a piece of clothing`}/>
          <div className="searchbar-btn-control">
            <button className="searchbar-btn">Quer doar?</button>
            <button className="searchbar-btn">Procura roupa?</button>
          </div>
        </div>

        <div className="ad-body">
          <h3>Anúncios</h3>

          <div className="ad-body-row">
            <div>Cartao1</div>
            <div>Cartao2</div>
          </div>

        </div>

        <div className="menu">
          <button className="menu-btn">
            <HomeIcon />
            <span>Home</span>
          </button>

          <button className="menu-btn">
            <PlaylistAddIcon />
            <span>Quer doar?</span>
          </button>

          <button className="menu-btn">
            <AccountCircleIcon />
            <span>Profile</span>
          </button>
        </div>

        <Products />



      </div>
    );
  }
}
