import React, { useState } from 'react';
import Livro from './livro';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core'
import '../css/livrosPage.css'

function ObjLivro(props) {
	const [selector, setSelector] = useState("didatico")
	return (
		<Card>
			<CardActionArea disabled={selector === ''}
				onClick={() => {
					const livro = selector === 'didatico' ? props.livro.livro : props.livro.livroEx
					const livroEx = selector === 'didatico' ? props.livro.livroEx : props.livro.livro
					props.readLivro(livro, livroEx)
				}}>
				<CardMedia
					component="img"
					image={selector === 'didatico' ? props.livro.preview : props.livro.previewEx}
					alt="livroMatematica"
				/>
				<CardContent id="card-title">
					<h2>{props.livro.subject}</h2>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<button id="card-btn-1" onClick={() => setSelector('didatico')}>Didático</button>
				<button id="card-btn-2" onClick={() => setSelector('exercicios')}>Exercicios</button>
			</CardActions>
		</Card>
	)
}

export default class LivrosPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			livrosState: []
		}

	}

	componentDidMount() {
		this.getLivros();
	}

	async getLivros() {
		await fetch("/api/livros", {
			method: "GET",
			contentType: "application/json"
		})
			.then(res => res.json())
			.then(arrayLivros => this.setState({
				livrosState: arrayLivros.livros
			}))
	}

	render() {
		if (this.props.state === "Home") {
			return (
				<section className="colDir">
					<div className="fullRow">
						{
							this.state.livrosState.map(l => (
								<ObjLivro
									key={l.subject}
									readLivro={(livro, livroEx) => {
										this.setState({ livro, livroEx })
										this.props.readLivro()
									}}
									livro={l} />
							))
						}
					</div>
				</section>
			)
		}

		if (this.props.state === "readLivro") {
			return (
				<Livro livroCorreto={this.state.livro} livroSecundario={this.state.livroEx} />
			)
		}
	}
}