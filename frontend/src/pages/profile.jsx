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
			phoneNum: '',
		}

		this.onSubmit = this.onSubmit.bind(this)
		this.handleName = this.handleName.bind(this)
		this.handlePhone = this.handlePhone.bind(this)
		this.handlePassword = this.handlePassword.bind(this)
		this.handleEmail = this.handleEmail.bind(this)
	}

	onSubmit() {
		console.log('Submetido')
		console.log('Username: ' + this.state.name)
		console.log('Password: ' + this.state.pw)
		console.log('Email: ' + this.state.email)
		console.log('Phone Number: ' + this.state.phoneNum)

		// fetch("/adddonor", {
	  //       method: "POST",
	  //       body: {},
	  //       headers: {
	  //           "Content-Type": "application/json"
	  //       }
	  //   })

		this.setState({ isOpen: false });
	}

	handleName(form) {
		this.setState({ name: form.target.value })
	}

	handlePhone(form) {
		this.setState({ phoneNum: form.target.value })
	}

	handlePassword(form) {
		this.setState({ pw: form.target.value })
	}

	handleEmail(form) {
		this.setState({ email: form.target.value })
	}

	togglePopup() { this.setState((state) => ({ isOpen: !(state.isOpen) })) }

	render() {
		return (
			<div className="body">

				<img className="logo" src="/assets/logo.png" alt="logo"></img>

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
										<input
											className="boxes"
											type="text"
											name="username"
											placeholder="Insira o seu nome"
											value={this.state.name}
											onChange={this.handleName}
										/><br />
									</label>
									<label>
										<input
											className="boxes"
											type="text"
											name="telefone"
											placeholder="Insira o seu número de telefone"
											value={this.state.phoneNum}
											onChange={this.handlePhone}
										/><br />
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