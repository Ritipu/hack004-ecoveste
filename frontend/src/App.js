import React from 'react';
import './css/App.css';

import SearchIcon from '@material-ui/icons/Search';
import Card from './components/card'
import Donate from './pages/donate'
import Profile from './pages/profile'
import Menu from './components/menu'
import Search from './pages/search'
import Popup from './components/popup'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: [],
      search: '',
      pageControl: 0,
      isOpen: false,
      currentId: "",
      currentTitle: "",
      currentImage: "",
      currentLocation: "",
      currentDescription: "",
      currentDonorName: "",
      currentDonorEmail: "",
      currentDonorPhone: "",
    }

    this.formChange = this.formChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit() {
    this.setState({ pageControl: 3 })
  }

  formChange(form) {
    this.setState({ search: form.target.value });
    // teste github
  }

  togglePopup() {
    this.setState((state) => (
      { isOpen: !(state.isOpen) }
    ))
  }

  setCurrentTitle(title) {
    this.setState({
      currentTitle: title
    })
  }

  setCurrentImage(image) {
    this.setState({
      currentImage: image
    })
  }

  setCurrentLocation(location) {
    this.setState({
      currentLocation: location
    })
  }

  setCurrentDescription(description) {
    this.setState({
      currentDescription: description
    })
  }

  setCurrentDonorName(name) {
    this.setState({
      currentDonorName: name
    })
  }

  setCurrentDonorEmail(email) {
    this.setState({
      currentDonorEmail: email
    })
  }

  setCurrentDonorPhone(phone) {
    this.setState({
      currentDonorPhone: phone
    })
  }

  render() {
    if (this.state.pageControl === 0) {
      return (
        <div className="App">

          <div className="header">
            <img src="/assets/logo.png" className="logo" alt="header-logo" />
          </div>

          <div className="searchbar">
            <input type="text" className="searchbar-bar" placeholder="Insira uma peça de roupa" value={this.state.search} onChange={this.formChange} />
            <button onClick={this.handleSubmit} className="searchbar-btn" ><SearchIcon /></button>
          </div>

          <h3 id="subtitle">Anúncios</h3>

          {this.state.isOpen && <Popup
            content={<>
              <div className="popup-content">
                <img src={this.state.currentImage}/>
                <p>{this.state.currentTitle}</p>
                <p>{this.state.currentDescription}</p>
                <p>{this.state.currentLocation}</p>
                
                <p>Contactos:<br/>
                Doador: {this.state.currentDonorName}<br/>
                E-mail: {this.state.currentDonorEmail}<br/>
                Telefone: {this.state.currentDonorPhone}</p>
                
              </div>
            </>}
            handleClose={() => this.togglePopup()}
          />}


          <div className="ad-body">
            <div className="ad-body-row">
              {
                this.state.productID.map(e => (
                  <Card key={e}
                    id={e}
                    toggle={() => this.togglePopup()}
                    currenttitle={(title) => this.setCurrentTitle(title)}
                    currentimage={(image) => this.setCurrentImage(image)}
                    currentlocation={(location) => this.setCurrentLocation(location)}
                    currentdescription={(description) => this.setCurrentDescription(description)}
                    currentdonorname={(name) => this.setCurrentDonorName(name)}
                    currentdonoremail={(email) => this.setCurrentDonorEmail(email)}
                    currentdonorphone={(phone) => this.setCurrentDonorPhone(phone)}
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
        <div>
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
        <div>
          <Profile />
          <Menu
            homePage={() => this.homePage()}
            donatePage={() => this.donatePage()}
            profilePage={() => this.profilePage()}
          />
        </div>
      )
    }

    if (this.state.pageControl === 3) {
      return (
        <div>
          <Search search={this.state.search} />
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
