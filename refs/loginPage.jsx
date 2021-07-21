import React from "react";
import LoginForm from "../components/login/LoginForm";
import "../css/loginPage.css"

export default class LoginPage extends React.Component {

	render() {
		return (
			<section className="logpag">
				<div className="imagba">
					<button onClick={this.props.logout} className="imaga"><img src="/logo.png" id="logo" alt="logo"/></button>
				</div>
				<div className="container">
					<LoginForm acessPlatform={this.props.acessPlatform}/>
				</div>
			</section>

		)
	}
}