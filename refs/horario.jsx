import React from 'react';
import '../css/horario.css'
import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core'

function createTableRow(class0, class1, class2, class3, class4, class5) {
	return { class0, class1, class2, class3, class4, class5 }
}

const horario = [
	createTableRow('9h - 10h', 'Matematica', 'Português', 'Matematica', 'Geografia', 'Educação Fisica'),
	createTableRow('11h - 12h', 'Programação', 'Matematica', 'História', 'Matematica', 'Programação'),
	createTableRow('14h - 15h', 'História', 'Geografia', 'Programação', 'História', 'Matematica'),
	createTableRow('15h - 16h', 'Geografia', 'Programação', 'Educação Fisica', 'Português', 'Matematica'),
	createTableRow('16h - 17h', 'Educação Fisica', 'História', 'Geografia', 'Português', 'Programação')
]

export default class Horario extends React.Component {
	render() {
		return (
			<div className="table">
				<TableContainer component={Paper}>
					<Table>

						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell>Segunda</TableCell>
								<TableCell>Terça-Feira</TableCell>
								<TableCell>Quarta-Feira</TableCell>
								<TableCell>Quinta-Feira</TableCell>
								<TableCell>Sexta-Feira</TableCell>
							</TableRow>
						</TableHead>

						<TableBody>
							{horario.map((horario) => (
								<TableRow>
									<TableCell>{horario.class0}</TableCell>
									<TableCell>{horario.class1}</TableCell>
									<TableCell>{horario.class2}</TableCell>
									<TableCell>{horario.class3}</TableCell>
									<TableCell>{horario.class4}</TableCell>
									<TableCell>{horario.class5}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>

		)
	}
}