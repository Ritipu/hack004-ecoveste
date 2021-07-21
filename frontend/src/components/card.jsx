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
    
    componentDidMount() {
        console.log('ID do Card: ' + this.state.id)
    }
    
    // async getCardInfo() {
    //     await fetch('/byid', {
    //       method: 'POST',
    //       body: JSON.stringify({id: this.state.id}), 
    //       headers: {
    //         "Content-Type": 'application/json'
    //       }
    //     })
    //   }

    render() {
        return (
            <div className="card">
                <div className="card-img">
                    <img src="/assets/logo.png" height="120px"/>
                </div>
                <p>Calças</p>
                <p>Colares</p>
            </div>
        )
    }
}