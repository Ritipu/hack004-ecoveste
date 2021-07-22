import React from 'react';
import Card from '../components/card'
import '../css/search.css';
import Popup from '../components/popup';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchResult: this.props.search,
            numOfResults: 0,
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
    }

    async componentDidMount() {
        await this.getCategoryInfo();
    }

    async getCategoryInfo() {
        const res = await fetch(`/bycategory/${this.state.searchResult}`)
        const json = await res.json()
        const idFilter = json.product.map((e) => e._id)

        this.setState({
            results: idFilter,
            numOfResults: idFilter.length
        })
        console.log(this.state.results)
    }

    togglePopup() { this.setState((state) => ({ isOpen: !(state.isOpen) })) }

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
        return (
            <div className="search-main">
                <h3>Foram encontrados {this.state.numOfResults} artigos de {this.state.searchResult}</h3>
                <div className="results">
                    {
                        this.state.results.map(d => (
                            <Card key={d}
                                id={d}
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
                {this.state.isOpen && <Popup
                    content={<>
                        <div className="popup-content">
                            <img src={this.state.currentImage} alt="popup" />
                            <p>{this.state.currentTitle}</p>
                            <p>{this.state.currentDescription}</p>
                            <p>{this.state.currentLocation}</p>

                            <p>Contactos:<br />
                Doador: {this.state.currentDonorName}<br />
                E-mail: {this.state.currentDonorEmail}<br />
                Telefone: {this.state.currentDonorPhone}</p>

                        </div>
                    </>}
                    handleClose={() => this.togglePopup()}
                />}
            </div>
        )
    }
}