
import React from 'react';
import "../css/profile.css"
import Popup from '../components/popup'


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            isOpen: false,
            
        }
    }

    //dúvidas sobre formulários e event
    handleSubmit(event) {
        console.log('Foi submetido um nome: ');
        event.preventDefault();
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
                        <input type="email" name="email" placeholder="Insira o seu email" />
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Insira a sua password" />
                    </label>
                    <input type="submit" value="Submeter"></input>
                </form>
                <button onClick={() => this.togglePopup()} className="registar">Registe-se aqui</button>

                {this.state.isOpen && <Popup
                    content={<>
                        <div className="popup-content">
                            <form onSubmit={() => this.handleSubmit()}>

                                <label>
                                    <input type="text" name="username" placeholder="Insira o seu nome"  /><br />
                                </label>
                                <label>
                                    <input type="number" name="telefone" placeholder="Insira o seu número de telefone"  /><br />
                                </label>
                                <label>
                                    <input type="email" name="email" placeholder="Insira o seu email"  /><br />
                                </label>
                                <label>
                                    <input type="password" name="password" placeholder="Insira a sua password"  /><br />
                                </label>

                                <input type="submit" value="Registar" />
                            </form>
                        </div>
                    </>}
                    handleClose={() => this.togglePopup()}
                />}
            </div>

        )
    }
}