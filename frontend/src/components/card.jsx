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
            description: "",
            donorId: "",
            donorName: "",
            donorEmail: "",
            donorPhone: ""

        }
    }

    async componentDidMount() {
        await this.getCardInfo();
        await this.getDonorInfo();
    }

    async getCardInfo() {
        const res = await fetch(`/byid/${this.state.id}`)

        const json = await res.json()

        this.setState({
            title: json.product.name,
            location: json.product.location,
            image: json.product.image,
            category: json.product.category,
            description: json.product.description,
            donorId: json.product.donorId
        })
    }

    async getDonorInfo() {
        const res = await fetch(`/bydonorid/${this.state.donorId}`)

        const json = await res.json()
        
        this.setState({
            donorName: json.donor.name,
            donorEmail: json.donor.email,
            donorPhone: json.donor.tel,
        })

    }

    render() {
        return (
            <button onClick={() => {
                this.props.toggle();
                this.props.currenttitle(this.state.title);
                this.props.currentimage(this.state.image);
                this.props.currentlocation(this.state.location);
                this.props.currentdescription(this.state.description);
                this.props.currentdonorname(this.state.donorName);
                this.props.currentdonoremail(this.state.donorEmail);
                this.props.currentdonorphone(this.state.donorPhone);
                }}>
                <div className="card">
                    <div className="card-img-block">
                        <img src={this.state.image} className="card-img" alt="products" />
                    </div>
                    <div className="card-txt-block">
                        <span className="card-title">{this.state.title}</span>
                        <span className="card-location">{<LocationOnIcon />}{this.state.location}</span>
                    </div>
                </div>
            </button>
        )
    }
}