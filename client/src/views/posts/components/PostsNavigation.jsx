import '../../../components/navigation/navigation.scss'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostsNavigation extends Component {

    componentDidMount() {
        let dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener("click", function(){ dropdown.classList.toggle('is-active'); });
    }

    render() {

        return (
            <div>
                <nav className={"lower-nav-bar"}>
                    <div className={"level is-mobile nav-height"}>

                        <div className={"dropdown level-left"}>
                            <div className="dropdown-trigger">
                                <div className={"lower-nav-ellipsis lower-posts-dropdown"}>
                                    <img src={"https://res.cloudinary.com/dmqtrnawm/image/upload/v1578191967/UserFluent/Navbar%20Upper%20Icons/meatballs_ahyp2e.svg"} alt={"ellipsis"} className={""}/>
                                </div>
                            </div>
                            <div className="dropdown-menu lower-nav-dropdown-menu-gap" id="dropdown-menu6" role="menu">
                                <div className="dropdown-content post-dropdown-theme">
                                    <div className="dropdown-item">
                                        <Link to={'/'}>News Feed</Link>
                                    </div>
                                    <div className={"dropdown-divider"}/>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Go Pro</Link>
                                    </div>
                                    <div className={"dropdown-divider"}/>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>UI/UX</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Web</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Mobile</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Games</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Software</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Hardware</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>DIY</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Art & Design</Link>
                                    </div>
                                    <div className={"dropdown-divider"}/>
                                    <div className="dropdown-item">
                                        <Link to={'/'}>Help</Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link to={'/about'}>About</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"level-item lower-nav-center-items"}>
                            <Link to={'/'} className={"lower-nav-center-option"}>
                                All
                            </Link>
                            <Link to={'/'} className={"lower-nav-center-option"}>
                                Mobile
                            </Link>
                            <Link to={'/'} className={"lower-nav-center-option"}>
                                Desktop
                            </Link>
                            <Link to={'/'} className={"lower-nav-center-option"}>
                                Web
                            </Link>
                            <Link to={'/'} className={"lower-nav-center-option"}>
                                Games
                            </Link>
                            <Link to={'/'} className={"lower-nav-center-option"}>
                                Misc.
                            </Link>
                        </div>

                        <div className={"level-right"}>

                            <div className={"lower-nav-friends"}>

                                <div className="field">
                                    <div className="control">
                                        <div className="select is-rounded is-charcoal is-small">
                                            <select >
                                                <option>Popular</option>
                                                <option>Recent</option>
                                                <option>Featured</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </nav>

            </div>
        )
    }

}
export default PostsNavigation;