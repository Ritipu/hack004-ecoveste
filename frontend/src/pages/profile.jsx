
import React from 'react';
import "../css/profile.css"
import Popup from '../components/popup'


export default class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogged: false,
			isOpen: false,
			name: '',
			pw: '',
			email: '',
			numTelephone: '',
		}

		this.onSubmit = this.onSubmit.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
	}

	onSubmit() {
		console.log('Submetido')
		console.log('Password: ' + this.state.pw)
		this.setState({ isOpen: false });
	}

	handleEmail(form) {
		this.setState({ email: form.target.value })
	}

	handlePassword(form) {
		this.setState({ pw: form.target.value })
	}

	// handleSubmit(event) {
	//     event.preventDefault()
	//     console.log("wow")
	//     // fetch("/adddonor", {
	//     //     method: "POST",
	//     //     body: {},
	//     //     headers: {
	//     //         "Content-Type": "application/json"
	//     //     }
	//     // })
	// }

	togglePopup() { this.setState((state) => ({ isOpen: !(state.isOpen) })) }

	render() {
		return (
			<div className="body">
				<img className="logo" src="/assets/logo.png"></img>
				<form className="form">
					<label>
						<input className="login-data" type="email" name="email" placeholder="Insira o seu email" required />
					</label>
					<label>
						<input className="login-data" type="password" name="password" placeholder="Insira a sua password" required />
					</label>
					<button className="submit" type="submit">Submeter</button>
				</form>
				<button onClick={() => this.togglePopup()} className="registar">Registe-se aqui</button>

				{this.state.isOpen && <Popup
					content={
						<>
							<div className="popup-content">
								<form onSubmit={this.onSubmit}>

									<label>
										<input className="boxes" type="text" name="username" placeholder="Insira o seu nome" /><br />
									</label>
									<label>
										<input className="boxes" type="text" name="telefone" placeholder="Insira o seu número de telefone" /><br />
									</label>
									<label>
										<input 
										className="boxes" 
										type="email" 
										name="email" 
										placeholder="Insira o seu email"
										value={this.state.email}
										onChange={this.handleEmail}
										/><br />
									</label>
									<label>
										<input
											className="boxes"
											type="password"
											name="password"
											placeholder="Insira a sua password"
											value={this.state.pw}
											onChange={this.handlePassword}
										/><br />
									</label>

									<button className="submitpop" type="submit">Submeter</button>
								</form>
							</div>
						</>}
					handleClose={() => this.togglePopup()}
				/>}
			</div>

		)
	}
}