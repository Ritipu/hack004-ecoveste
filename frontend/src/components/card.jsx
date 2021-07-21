import React from 'react';
import '../css/card.css'

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
                    <img src={this.state.image} className="card-img" />
                </div>
                <div className="card-txt-block">
                    <h3>{this.state.title}</h3>
                    <p>{this.state.location}</p>    
                </div>
            </div>
        )
    }
}