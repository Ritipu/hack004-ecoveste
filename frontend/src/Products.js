import React from "react"

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products : []
        }
    }

    //return all the products (still just the category so we knoe its working)
    getProducts() {
        fetch("/products")
            .then(res => res.json())
            .then(json => this.setState({
                products: json.products.map(e => ({
                    category: e.category
                }))
            }))             
    }

    //calls the getProduct when the page is created
    componentDidMount() {
        this.getProducts()
    }

    render() {
        return (
            <p>{this.state.products.map(e => e.category)}</p>
        )
    }

}

export default Products