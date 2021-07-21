import React from 'react';
import './App.css';
import Plataforma from './pages/plataforma';
import LoginPage from './pages/loginPage';
import Slider from './components/slider/slider';

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: 0,
		}
		this.acessPlatform = this.acessPlatform.bind(this)
		this.loginPage = this.loginPage.bind(this)
	}

	acessPlatform(token) {
		localStorage.setItem('token', token)
		this.setState({ isLoggedIn: 1 })
	}

	loginPage() {
		this.setState({ isLoggedIn: 2 })
	}

	logout() {
		localStorage.removeItem('token')
		this.setState({ isLoggedIn: 0 })
	}

	render() {
		if (this.state.isLoggedIn === 0) {
			return (
				<div>
					<div className="navbar">
						<img className="navbar-logo" src="/logo.png" height="40px" alt="Ser Aluno" />
						<div className="navbar-btn">
							<button className="auth-login" onClick={this.loginPage}>Login</button>
							<button className="auth-gov" onClick={this.loginPage}>
								<img src="https://www.autenticacao.gov.pt/o/autenticacao-gov-theme/images/logo/logo-ag.svg"
									alt="Logo Autenticação Gov" />
							</button>
						</div>

					</div>
					<div className="body">
						<Slider/>
					</div>
					<div className="footer">
						<img src="/logos/portoEditora.png" height="60px" alt="Porto Editora" />
						<img src="/logos/agaKhan.png" height="60px" alt="AgaKhan" />
						<img src="/logos/Logo_Portugal_2020.png" height="60px" alt="Portugal 2020" />
						<img src="/logos/logo_segurancaSocial.png" height="60px" alt="Segurançã Social" />
						<img src="/logos/republica.png" height="60px" alt="Republica Portuguesa" />
						<img src="/logos/uniaoEuropeia.png" height="60px" alt="União Europeia" />
					</div>
				</div>
			);
		} else if (this.state.isLoggedIn === 1) {
			return (
				<div>
					<Plataforma logout={() => this.logout()} />
				</div>
			)
		} else if (this.state.isLoggedIn === 2) {
			return (
				<div>
					<LoginPage 
					acessPlatform={(token) => this.acessPlatform(token)}
					logout={() => this.logout()} />
				</div>
			)
		}

	}

}


