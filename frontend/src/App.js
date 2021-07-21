import React from 'react';
import './css/App.css';

import SearchIcon from '@material-ui/icons/Search';
import Card from './components/card'
import Donate from './pages/donate'
import Menu from './components/menu'



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '60f81e54b4a10d10172b7347',
      search: '',
      pageControl: 0,
    }
  }

  componentDidMount() {
    fetch('/byid', {
      method: 'POST',
      body: JSON.stringify({id: this.state.id}),
      headers: {
        "Content-Type": 'application/json'
      }
    })

  getByCategory() {
    // fetch server POST === enviar search state
  }

  homePage() {
    this.setState({ pageControl: 0})
  }

  donatePage() {
    this.setState({ pageControl: 1})
  }

  profilePage() {
    this.setState({ pageControl: 2})
  }
  render() {
    if (this.state.pageControl === 0) {
      return (
        <div className="App">

          <div className="header">
            <img src="/assets/logo.png" className="logo" />
          </div>

          <div className="searchbar">
            <input type="text" className="searchbar-bar" placeholder="Insere uma peça de roupa" />

            <button className="searchbar-btn"><SearchIcon /></button>
          </div>

          <h3 id="subtitle">Anúncios</h3>


          <div className="ad-body">
            <div className="ad-body-row">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          <Menu 
          homePage={() => this.homePage()}
          donatePage={() => this.donatePage()}
          profilePage={() => this.profilePage()}
          />
        </div>
      );
    }

    if (this.state.pageControl === 1) {
      return (
        <div className="App">
          <Donate />
          <Menu 
          homePage={() => this.homePage()}
          donatePage={() => this.donatePage()}
          profilePage={() => this.profilePage()}
          />
        </div>
      )
    }
  }
}
