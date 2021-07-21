import React from 'react';
import './css/App.css';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <img src="/assets/logo.png" className="logo" />
        </div>
        <div>
          <h3>Searchbar</h3>
        </div>
        <div className="menu">
          <button className="menu-btn">
            <HomeIcon />
            <span>Home</span>
          </button>
          <button className="menu-btn">
            <AccountCircleIcon />
            <span>Profile</span>
          </button>
        </div>
      </div>
    );
  }
}
