
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
                        <input className="login-data" type="email" name="email" placeholder="Insira o seu email" required/>
                    </label>
                    <label>
                        <input className="login-data" type="password" name="password" placeholder="Insira a sua password" required/>
                    </label>
                    <button className="submit" type="submit">Submeter</button>
                </form>
                <button onClick={() => this.togglePopup()} className="register">Registe-se aqui</button>

                {this.state.isOpen && <Popup
                    content={<>
                        <div className="popup-content">
                            <form onSubmit={() => this.handleSubmit()}>

                                <label>
                                    <input className="boxes" type="text" name="username" placeholder="Insira o seu nome" /><br />
                                </label>
                                <label>
                                    <input className="boxes" type="text" name="telefone" placeholder="Insira o seu número de telefone" /><br />
                                </label>
                                <label>
                                    <input className="boxes" type="email" name="email" placeholder="Insira o seu email"  /><br/>
                                </label>
                                <label>
                                    <input className="boxes" type="password" name="password" placeholder="Insira a sua password"  /><br />
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