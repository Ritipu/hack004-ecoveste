import React from 'react';
import '../css/perfil.css';
import { Formik, Field } from "formik";

export default class Perfil extends React.Component {

	render() {
		const username = this.props.aluno;
		const year = this.props.anoLetivo;

		return (
			<section className="colDir">
				<div className="perfilContainer">
					<Formik
						initialValues={{ username: `${username}`, year: `${year}`, password: '1234' }}
					>
						{
							({ handleSubmit }) => (
								<form onSubmit={handleSubmit}>
									<div className="Formy">
										<label>Nome</label>
										<Field name="username" type="text" disabled placeholder="Nome do Aluno"/>
									</div>

									<div className="Formy">
										<label>Password</label>
										<Field name="password" disabled type="password"/>
									</div>

									<div className="Formy">
										<label>Ano</label>
										<Field name="year" disabled type="text"/>
									</div>
			
								</form>
							)
						}
					</Formik>
				</div>
			</section >
		)
	}
}