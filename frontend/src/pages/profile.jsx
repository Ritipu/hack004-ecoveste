
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


    togglePopup() { this.setState((state) => ({ isOpen: !(state.isOpen) })) }

    render() {

        return (
            <>
                <form className="form">
                    <label>
                        <input type="email" name="email" placeholder="Insira o seu email" />
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Insira a sua password" />
                    </label>
                    <input type="submit" value="Submeter"></input>
                </form>
                <button onClick={() => this.togglePopup()} className="register">Registe-se aqui</button>

                {this.state.isOpen && <Popup
                    content={<>
                        <div >
                            <form>
                                <label>
                                    <input type="text" name="username" placeholder="Insira um username" />
                                </label>
                                <label>
                                    <input type="email" name="email" placeholder="Insira o seu email" />
                                </label>
                                <label>
                                    <input type="password" name="password" placeholder="Insira a sua password" />
                                </label>
                                <input type="submit" value="Submeter"></input>
                            </form>
                        </div>
                    </>}
                    handleClose={() => this.togglePopup()}
                />}
            </>

        )
    }
}