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
        const res = await fetch('/byid', {
            method: 'POST',
            body: JSON.stringify({ id: this.state.id }),
            headers: {
                "Content-Type": 'application/json'
            }
        })

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
                <div className="card-img">
                    <img src="/assets/logo.png" height="120px" />
                </div>
                <h3>{this.state.title}</h3>
                <p>{this.state.location}</p>
            </div>
        )
    }
}