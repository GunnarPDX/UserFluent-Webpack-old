import "./navigation.scss";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationUpper extends Component {

    state = {
        current_user: [],
        logged_in: false,
    };

    handleLogout = () => {
        const link = document.createElement('a');
        link.setAttribute('href', '/users/sign_out');
        link.setAttribute('rel', 'nofollow');
        link.setAttribute('data-method', 'delete');
        document.body.appendChild(link);
        link.click();
    };


    componentDidMount() {
        fetch('/api/v1/user')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Invalid request');
                }
            })
            .then(current_user => {
                this.setState({
                    current_user: current_user,
                    logged_in: true,
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    renderNavOptions = () => {
        if(this.state.logged_in){
            return (
                <div>
                    {this.renderNavControls()}
                </div>
            )
        } else {
            return (
                <div>
                    <li className={"nav-li"}>
                        <Link to={'/about'} className={"nav-li-a"}>
                            Sign Up
                        </Link>
                    </li>

                    <li className={"nav-li"}>
                        <Link to={'/about'} className={"nav-li-a"}>
                            Log In
                        </Link>
                    </li>
                </div>
            )
        }
    };

    renderNavControls = () => {
        return (
            <div>
                <li className={"nav-li"}>
                    <Link to={'/posts/new'} className={"nav-li-a"}>
                        <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578096333/UserFluent/Navbar%20Upper%20Icons/upload_qubv9y.svg"} alt={"Upload"} className={"nav-icon"}/>
                    </Link>
                </li>

                <li className={"nav-li"}>
                    <div className={"uf-dropdown"}>

                        <Link to={`/show/userprofile/${this.state.current_user.id}`} className={"dropbtn"}>
                            <img src={this.state.current_user.avatar_small} alt={" "} className={"profile"}/>
                        </Link>

                        <div className={"uf-dropdown-content"}>
                            <div className={"nav-text"}> Signed in as: {this.state.current_user.username}</div>

                            <div className={"dropdown-divider"}/>

                            <Link to={`/show/userprofile/${this.state.current_user.id}`} className={"nav-option nav-text"}>
                                <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578171511/UserFluent/Navbar%20Upper%20Icons/nav-user-light_axu9uj.svg"} className={"nav-svg"} alt={"profile"}/>
                                Profile
                            </Link>

                            <Link to={'/profile/settings'} className={"nav-option nav-text"}>
                                <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578171547/UserFluent/Navbar%20Upper%20Icons/nav-settings-light_alnbfz.svg"} className={"nav-svg"} alt={"settings"}/>
                                Settings
                            </Link>

                            <div className={"dropdown-divider"}/>

                            <Link to={'/'} onClick={this.handleLogout} className={"nav-option nav-text"}>
                                <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578171511/UserFluent/Navbar%20Upper%20Icons/nav-logout-light_h2amxe.svg"} className={"nav-svg"} alt={"logout"}/>
                                Sign Out
                            </Link>
                        </div>

                    </div>
                </li>

                <li className={"nav-li"}>
                    <Link to={'/'} className={"nav-li-a"}>
                        <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578096333/UserFluent/Navbar%20Upper%20Icons/notifications-off_dnzml3.svg"} alt={"Notifications"} className={"nav-icon"}/>
                    </Link>
                </li>
            </div>
        )
    };

    render() {
        return (
            <div>
                <div className="nav-bar">
                    <nav>
                        <ul className={"nav-ul"}>
                            <li className={"nav-left nav-li"}>
                                <Link to={'/'} className={"nav-li-a"}>
                                    <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578096333/UserFluent/Navbar%20Upper%20Icons/logo_tcvoi5.svg"} alt={"UserFluent"} className={"nav-logo"}/>
                                </Link>
                            </li>

                            {this.renderNavOptions()}

                            <li className={"nav-li"}>
                                <Link to={'/'} className={"nav-li-a"}>
                                    <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578096333/UserFluent/Navbar%20Upper%20Icons/search_cwlm0f.svg"} alt={"Search"} className={"nav-icon"}/>
                                </Link>
                            </li>
                        </ul>

                    </nav>
                </div>

                <div className={"nav-spacer"}>
                    &nbsp;
                </div>

            </div>
        );
    }
}

export default NavigationUpper;