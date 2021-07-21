import React from 'react';
import "../css/donate.css"

export default class Donate extends React.Component {
    render() {
        return (
            <>
                <h2>Criar novo anúncio</h2>
                <form className="donateForm">
                    IMAGEM <br/>
                    <label>
                        Título do anúncio* <br/>
                        <input type="text" name="title" placeholder="p.ex. calças de ganga" required /><br />
                    </label>
                    <label>
                        Categoria* <br/>
                        <select name="category" required>
                            <option value="calças">Calças</option>
                            <option value="casacos">Casacos</option>
                            <option value="t-shirt">T-shirt</option>
                            <option value="pijamas">Pijamas</option>
                            <option value="saias">Saias</option>
                            <option value="sapatos">Sapatos</option>
                            <option value="vestidos">Vestidos</option>
                        </select>
                    </label> <br/>
                    <label>
                        Descrição* <br/>
                        <textarea name="description" placeholder="Escreva uma pequena descrição para que os outros utilizadores saibam mais sobre o seu produto." required /><br />
                    </label>
                    
                        <h3>Contacto</h3>
                    <label>
                        Localização* <br/>
                        <select name="location" required>
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
                    </label><br/>
                    <label>
                        Nome* <br/>
                        <input type="textarea" name="description" placeholder="Insira o seu nome" required /><br />
                    </label>
                    <label>
                        Telefone* <br/>
                        <input type="tel" name="telephone" placeholder="Insira o contacto telefónico a ser apresentado" required /><br />
                    </label>
                    <label>
                        Email <br/>
                        <input type="email" name="email" placeholder="Insira o email a ser apresentado" /><br />
                    </label>
                    <input type="submit" value="Publicar Anúncio"></input>
                
                </form>
            </>
        )
    }
}