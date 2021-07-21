import React from 'react';
import '../css/card.css'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            location: '',
            image: '',
            category: '',
        }
    }
    
    componentDidMount() {
        // acesso à this.props.id === object
        // this.setState ({ title: this.props.id.name})
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-img">
                    <img src="/assets/logo.png" height="120px"/>
                </div>
                {/* <p>{this.state.title}</p> */}
                <p>Calças</p>
                <p>Colares</p>
            </div>
        )
    }
}