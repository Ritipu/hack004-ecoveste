import React from 'react';
import '../css/plataforma.css'
import Menu from './menu'
import Dashboard from './dashboard'
import LivrosPage from './livrosPage'
import Perfil from './perfil'

export default class Plataforma extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sessao: '',
			controlador: 0,
			controladorLivros: "Home",
			aluno: '',
			anoLetivo: '',
			escola: ''
		}
	}

	async componentDidMount() {
		const token = await localStorage.getItem('token')
		this.setState({ sessao: token })
		await this.getAluno()
	}


	dashboard() {
		this.setState({ controlador: 0 });
	}

	homePageLivros() {
		this.setState({ controlador: 1 });
		this.setState({ controladorLivros: "Home" });
	}

	async getAluno() {
		const tokenAuth = this.state.sessao
		
		const res = await fetch('/api/aluno', {
			headers: {
				authorization: `Bearer ${tokenAuth}`
			}
		})

		const json = await res.json();
		const aluno = json.user;
		const ano = json.ano;
		const escola = json.escola;

		this.setState({
			aluno: aluno,
			anoLetivo: ano,
			escola: escola
		})
	}

	anoLetivo() {

	}

	perfil() {
		this.setState({ controlador: 2 });
	}

	readLivro() {
		this.setState({ controladorLivros: "readLivro" });
	}

	render() {
		if (this.state.controlador === 0) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
						homePageLivros={() => this.homePageLivros()}
						perfil={() => this.perfil()}
						aluno={this.state.aluno}
						anoLetivo={this.state.anoLetivo}	
						escola={this.state.escola}
						logout={this.props.logout} />
					<Dashboard />
				</div>
			)
		}

		if (this.state.controlador === 1) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
						homePageLivros={() => this.homePageLivros()}
						perfil={() => this.perfil()}
						aluno={this.state.aluno}
						anoLetivo={this.state.anoLetivo}
						escola={this.state.escola}
						logout={this.props.logout}
					/>
					<LivrosPage state={this.state.controladorLivros}
						readLivro={() => this.readLivro()}
					/>
				</div>
			)
		}
		if (this.state.controlador === 2) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
						homePageLivros={() => this.homePageLivros()}
						perfil={() => this.perfil()}
						aluno={this.state.aluno}
						anoLetivo={this.state.anoLetivo}
						escola={this.state.escola}
						logout={this.props.logout}
					/>

					<Perfil aluno={this.state.aluno} anoLetivo={this.state.anoLetivo}/>

				</div>
			)
		}
	}

}