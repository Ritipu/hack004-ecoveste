import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default class LivroEx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
        }
        this.proximaPagina = this.proximaPagina.bind(this)
        this.paginaAnterior = this.paginaAnterior.bind(this)
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    proximaPagina() {
        this.setState({ pageNumber: this.state.pageNumber + 1 })
    }

    paginaAnterior() {
        if (this.state.pageNumber > 1) {
            this.setState({ pageNumber: this.state.pageNumber - 1 })
        } else if (this.state.pageNumber === 1) {
            this.setState({ pageNumber: 1 })
        }

    }

    render() {
        const { numPages, pageNumber } = this.state;

        return (
            <>

                <Document file={this.props.livroSecundario} onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <div>
                    <button onClick={this.paginaAnterior}>Prev</button>
                    <span>Page {pageNumber} of {numPages}</span>
                    <button onClick={this.proximaPagina}>Next</button>
                </div>

            </>
        )

    }

}