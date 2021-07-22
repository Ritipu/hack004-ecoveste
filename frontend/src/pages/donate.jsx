import React from 'react';
import "../css/donate.css"

export default class Donate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: ['Calças', 'T-Shirt', 'Casacos', 'Pijamas', 'Saias', 'Sapatos', 'Vestidos'], // use fetch
			location: ['Agualva e Mira Sintra', 'Algueirão-Mem Martins', 'Almargem do Bispo, Pêro Pinheiro e Montelavar', 'Cacém e São Marcos', 'Casal de Cambra', 'Colares', 'Massamá e Monte Abraão', 'Queluz e Belas', 'Rio de Mouro', 'São João das Lampas e Terrugem', 'Sintra'], // use fetch
			categorySelected: '',
			locationSelected: '',
			title: '',
			size: '',
			description: '',
			id: '',
			image: '',
		}

		this.categorySelected = this.categorySelected.bind(this)
		this.locationSelected = this.locationSelected.bind(this)
		this.handleID = this.handleID.bind(this)
		this.handleDescription = this.handleDescription.bind(this)
		this.handleImage = this.handleImage.bind(this)
		this.handleSize = this.handleSize.bind(this)
		this.handleTitle = this.handleTitle.bind(this)
		this.submitForm = this.submitForm.bind(this)
	}

	handleID(event) {
		this.setState({ id: event.target.value })
	}

	handleDescription(event) {
		this.setState({ description: event.target.value })
	}

	handleSize(event) {
		this.setState({ size: event.target.value })
	}

	handleTitle(event) {
		this.setState({ title: event.target.value })
	}

	handleImage(event) {
		this.setState({ image: event.target.value })
	}

	locationSelected(event) {
		this.setState({ locationSelected: event.target.value })
	}

	categorySelected(event) {
		this.setState({ categorySelected: event.target.value })
	}

	submitForm(form) {
		form.preventDefault()

		fetch("/addproduct", { 
			method: "POST", 
			body: JSON.stringify({
				name: this.state.title,
				category: this.state.categorySelected,
				size: this.state.size,
				description: this.state.description,
				image: this.state.image,
				location: this.state.locationSelected,
				donorId: this.state.id
			}), 
			headers: {
				"Content-Type": "application/json"
			}
		})

		this.props.homePage()
	}

	render() {
		return (
			<div className="donate">
				<form className="donate-form" onSubmit={this.submitForm}>

					<h3 className="title">Insere uma imagem</h3>
					<div className="donateInput">
						<input
							type="text"
							name="image"
							placeholder="Imagem do produto"
							value={this.state.image}
							onChange={this.handleImage}
						/>
					</div>

					<h3 className="title">Título do anúncio*</h3>
					<div className="donateInput">
						<input 
						type="text" 
						name="title" 
						placeholder="p.ex. calças de ganga" 
						value={this.state.title}
						onChange={this.handleTitle}
						required />
					</div>

					<h3 className="title">Categoria*</h3>
					<div className="donateInput">
						<select name="category" onChange={this.categorySelected} required >
							<option value=""></option>
							<option value={this.state.category[0]}>{this.state.category[0]}</option>
							<option value={this.state.category[1]}>{this.state.category[1]}</option>
							<option value={this.state.category[2]}>{this.state.category[2]}</option>
							<option value={this.state.category[3]}>{this.state.category[3]}</option>
							<option value={this.state.category[4]}>{this.state.category[4]}</option>
							<option value={this.state.category[5]}>{this.state.category[5]}</option>
							<option value={this.state.category[6]}>{this.state.category[6]}</option>
						</select>
					</div>

					<h3 className="title">Tamanho*</h3>
					<div className="donateInput">
						<input 
						type="text" 
						name="size" 
						placeholder="Introduza o tamanho do produto"
						value={this.state.size}
						onChange={this.handleSize}
						/>
					</div>

					<h3 className="title">Descrição*</h3>
					<div className="donateInput">
						<input 
						type="text" 
						name="description" 
						placeholder="Descrição do produto"
						value={this.state.description}
						onChange={this.handleDescription}
						/>
					</div>

					<h3 className="title">Localização*</h3>
					<div className="donateInput">
						<select name="location" onChange={this.locationSelected} required>
							<option value=""></option>
							<option value={this.state.location[0]}>{this.state.location[0]}</option>
							<option value={this.state.location[1]}>{this.state.location[1]}</option>
							<option value={this.state.location[2]}>{this.state.location[2]}</option>
							<option value={this.state.location[3]}>{this.state.location[3]}</option>
							<option value={this.state.location[4]}>{this.state.location[4]}</option>
							<option value={this.state.location[5]}>{this.state.location[5]}</option>
							<option value={this.state.location[6]}>{this.state.location[6]}</option>
							<option value={this.state.location[7]}>{this.state.location[7]}</option>
							<option value={this.state.location[8]}>{this.state.location[8]}</option>
							<option value={this.state.location[9]}>{this.state.location[9]}</option>
							<option value={this.state.location[10]}>{this.state.location[10]}</option>
						</select>
					</div>

					<h3 className="title">ID de Doador</h3>

					<div className="donateInput">
						<input 
						type="textarea" 
						name="name" 
						placeholder="Insira o seu ID de doador" 
						value={this.state.id}
						onChange={this.handleID}						
						required />
					</div>

					<button type="submit" className="btn-submit">Publicar Anúncio</button>

				</form>
			</div>

		)
	}
}