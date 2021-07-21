import React from 'react'
import '../css/menu.css';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menu">
                <button className="menu-btn" onClick={this.props.homePage}>
                    <HomeIcon />
                    <span>Home</span>
                </button>

                <button className="menu-btn" onClick={this.props.donatePage}>
                    <PlaylistAddIcon />
                    <span>Quer doar?</span>
                </button>

                <button className="menu-btn" onClick={this.props.profilePage}>
                    <AccountCircleIcon />
                    <span>Profile</span>
                </button>
            </div>
        )
    }
}