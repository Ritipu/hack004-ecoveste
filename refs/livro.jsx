import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import LivroEx from './livroEx';
import '../css/livro.css'

export default class Livro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
            viewControl: 0
        }
        this.proximaPagina = this.proximaPagina.bind(this)
        this.paginaAnterior = this.paginaAnterior.bind(this)
        this.openBook = this.openBook.bind(this)
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    openBook() {
        if (this.state.viewControl === 0) {
            this.setState({ viewControl: 1 });
        } else {
            this.setState({ viewControl: 0 });
        }

        console.log(this.state.viewControl)
    }
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
        if (this.state.viewControl === 0) {
            return (
                <section className="colDirLivros">
                    <div className="livrosControl" >

                        <h2>Livro Didático</h2>
                        <Document file={this.props.livroCorreto} onLoadSuccess={this.onDocumentLoadSuccess}  >
                            <Page pageNumber={pageNumber} height={800} />
                        </Document>
                        <div>
                            <button onClick={this.paginaAnterior}>Prev</button>
                            <span>Page {pageNumber} of {numPages}</span>
                            <button onClick={this.proximaPagina}>Next</button>
                        </div>
                    </div>
                    <div className="livrosControl">
                        <h2>Bloco de Notas</h2>
                        
                        <button onClick={this.openBook}>Abrir livro auxiliar</button>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="colDirLivros">
                    <div className="livrosControl">
                        <h2>Livro Didático</h2>
                        <Document file={this.props.livroCorreto} onLoadSuccess={this.onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <div>
                            <button onClick={this.paginaAnterior}>Prev</button>
                            <span>Page {pageNumber} of {numPages}</span>
                            <button onClick={this.proximaPagina}>Next</button>
                        </div>
                        <button onClick={this.openBook}>Fechar livro auxiliar</button>
                    </div>
                    <div className="livrosControl">
                        <h2>Livro Exercicios</h2>
                        <LivroEx livroSecundario={this.props.livroSecundario} />
                    </div>
                </section>
            )
        }

    }

}