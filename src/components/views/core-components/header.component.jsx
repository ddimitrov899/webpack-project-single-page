import React, {Component} from 'react';
import './../../styles/header.component.scss'
import {Link} from "react-router-dom";
import logo from './../../../../public/assets/images/jb_rosegold.svg'
import classNames from "classnames";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollPos: window.pageYOffset,
            visible: true
        };
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const {prevScrollPos} = this.state;
        const currentScrollPos = window.pageYOffset;

        let visible = prevScrollPos > currentScrollPos && currentScrollPos <= 3;
        visible = visible || window.innerWidth < 1000;
        this.setState({
            prevScrollPos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <header className="navbar-fixed">
                <nav className="nav">
                    <div className={classNames("nav-wrapper", {
                        "nav-small": !this.state.visible
                    })}>
                        <Link to="/" className="brand-logo"><img src={logo}
                                                                 className={classNames("logo", {
                                                                     "logo-small": !this.state.visible
                                                                 })}
                                                                 alt="logo"/></Link>
                        <div className="position ">
                            <ul className="right">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">Abaut</Link>
                                </li>
                                <li>
                                    <Link to="/colections">Colections</Link>
                                </li>
                                <li>
                                    <Link to="/booking">Booking</Link>
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
