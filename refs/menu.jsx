import React from 'react';
import { Avatar } from '@material-ui/core'
import { MenuBook, Dashboard, AccountCircle, ExitToApp } from '@material-ui/icons'
import '../css/menu.css'

export default class Menu extends React.Component {

	render() {
		return (
			<section className="colEsq">
				<div className="aluno">
					<Avatar src="/aluna.jpg" id="icon" alt="avatar" />
					<h2>{this.props.aluno}</h2>
					<span>{this.props.anoLetivo}</span>
					<p>Escola {this.props.escola}</p>
				</div>

				<div className="controlos">
					<button className="btnMenu1" onClick={this.props.dashboard}>{<Dashboard className="btnMenuIcon" />}Dashboard</button>
					<button className="btnMenu2" onClick={this.props.homePageLivros}>{<MenuBook className="btnMenuIcon" />}Livros</button>
					<button className="btnMenu3" onClick={this.props.perfil}>{<AccountCircle className="btnMenuIcon" />}Perfil</button>
				</div>


				<div className="rodape">
					<button className="btnMenu4" onClick={this.props.logout}>{<ExitToApp className="btnMenuIcon" />}Logout</button>
					<br />
					<img className="rodapeLogo" src="/logo3.png" height="80px" alt="serAluno" />
				</div>
			</section>
		)
	}
}