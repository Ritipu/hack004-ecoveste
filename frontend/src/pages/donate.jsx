import React from 'react';
import "../css/donate.css"

export default class Donate extends React.Component {
    render() {
        return (
            <>
            <div className="body">
                <form className="donateForm">
                 
                    <legend>Criar novo anúncio</legend>
                    IMAGEM <br/>
                    <label>Título do anúncio*</label><br/>
                        <input className="product-data" type="text" name="title" placeholder="p.ex. calças de ganga" required /><br />
                    <label>Categoria*</label><br/>
                        <select className="product-data" name="category" required >
                            <option value="blank"></option>
                            <option value="calças">Calças</option>
                            <option value="casacos">Casacos</option>
                            <option value="t-shirt">T-shirt</option>
                            <option value="pijamas">Pijamas</option>
                            <option value="saias">Saias</option>
                            <option value="sapatos">Sapatos</option>
                            <option value="vestidos">Vestidos</option>
                        </select>
                    <br/>
                    <label>Descrição*</label><br/>
                        <textarea name="description" placeholder="Escreva uma pequena descrição para que os outros utilizadores saibam mais sobre o seu produto." required /><br />
                    <h4>Contacto</h4>
                    <label>Localização*</label><br/>
                        <select className="product-data" name="location" required>
                            <option value="blank"></option>
                            <option value="Agualva_Mira_Sintra">Agualva e Mira Sintra</option>
                            <option value="Algueirao_Mem_Martins">Algueirão-Mem Martins</option>
                            <option value="Almargem_Bispo_Pero_Pinheiro_Montelavar"> Almargem do Bispo, Pêro Pinheiro e Montelavar</option>
                            <option value="Cacem_Sao Marcos">Cacém e São Marcos</option>
                            <option value="Casal_Cambra">Casal de Cambra</option>
                            <option value="Colares">Colares</option>
                            <option value="Massama_Monte_Abraao">Massamá e Monte Abraão</option>
                            <option value="Queluz_Belas">Queluz e Belas</option>
                            <option value="Rio_Mouro">Rio de Mouro</option>
                            <option value="Sao_Joao_Lampas_Terrugem">São João das Lampas e Terrugem</option>
                            <option value="Sintra">Sintra</option>
                        </select>
                    <br/>
                    <label>Nome*</label><br/> 
                        <input className="product-data" type="textarea" name="description" placeholder="Insira o seu nome" required /><br />
                    <label>Telefone*</label> <br/>
                        <input className="product-data" type="tel" name="telephone" placeholder="Insira o contacto telefónico" required /><br />
                    <label>Email</label><br/>
                        <input className="product-data" type="email" name="email" placeholder="Insira o email a ser apresentado" /><br />
                   
                    <button type="submit">Publicar Anúncio</button>
               
                </form>
            </div>
            </>
        )
    }
}