import React from 'react';
import '../css/card.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: '',
            location: '',
            image: '',
            category: '',
        }
    }

    async componentDidMount() {
        await this.getCardInfo();
    }

    async getCardInfo() {
        const res = await fetch(`/byid/${this.state.id}`)

        const json = await res.json()

        this.setState({
            title: json.product.name,
            location: json.product.location,
            image: json.product.image,
            category: json.product.category
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-img-block">
                    <img src={this.state.image} className="card-img" alt="products"/>
                </div>
                <div className="card-txt-block">
                    <span className="card-title">{this.state.title}</span>
                    <span className="card-location">{<LocationOnIcon/>}{this.state.location}</span>    
                </div>
            </div>
        )
    }
}