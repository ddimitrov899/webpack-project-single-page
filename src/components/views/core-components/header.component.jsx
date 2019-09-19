import React, {Component} from 'react';
import './../../styles/header.component.scss'
import {Link} from "react-router-dom";
import logo from './../../../../public/assets/images/jb_rosegold.svg'

class HeaderComponent extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo"><img src={logo}
                                                                 className="logo"
                                                                 alt="logo"/></Link>
                        <div className="position">
                            <ul className="hide-on-med-and-down">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/media">Media</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Contacts</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default HeaderComponent;
