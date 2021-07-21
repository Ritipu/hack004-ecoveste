import React from 'react';
import Card from '../components/card'
import '../css/search.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchResult: this.props.search,
            numOfResults: 0,
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

    render() {
        return (
            <div className="search-main">
                <h3>Foram encontrados {this.state.numOfResults} artigos de {this.state.searchResult}</h3>
                <div className="results">
                    {
                        this.state.results.map(d => (
                            <Card key={d}
                                id={d}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}