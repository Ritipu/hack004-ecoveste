import React from 'react';
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

    componentDidMount() {
        
    }

    render() {
        return (
            <h3>Foram encontrados X artigos de {this.state.searchResult}</h3>
        )
    }
}