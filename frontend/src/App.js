import React from 'react';
import './css/App.css';

import SearchIcon from '@material-ui/icons/Search';
import Card from './components/card'
import Donate from './pages/donate'
import Profile from './pages/profile'
import Menu from './components/menu'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: [],
      search: '',
      pageControl: 0,
    }
  }

  async componentDidMount() {
    await this.getProductID();
  }

  async getProductID() {
    await fetch('/ids', {
      method: 'GET',
      contentType: 'application/json'
    })
      .then(res => res.json())
      .then(ids => this.setState({
        productID: ids.products
      }))
  }

  homePage() {
    this.setState({ pageControl: 0 })
  }

  donatePage() {
    this.setState({ pageControl: 1 })
  }

  profilePage() {
    this.setState({ pageControl: 2 })
  }

  render() {
    if (this.state.pageControl === 0) {
      return (
        <div className="App">

          <div className="header">
            <img src="/assets/logo.png" className="logo" />
          </div>

          <div className="searchbar">
            <input type="text" className="searchbar-bar" placeholder="Insira uma peça de roupa" />

            <button className="searchbar-btn"><SearchIcon /></button>
          </div>

          <h3 id="subtitle">Anúncios</h3>


          <div className="ad-body">
            <div className="ad-body-row">
              {
                this.state.productID.map(e => (
                  <Card key={e}
                  id={e}
                  />
                ))
              }
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

    if (this.state.pageControl === 2) {
      return (
        <div className="App">
          <Profile />
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
