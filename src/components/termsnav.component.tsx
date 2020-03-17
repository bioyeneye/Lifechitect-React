import React, { Component } from 'react';
import { createEmptyLink } from '../shared/helpers.ts/linkhelpers';


interface TermsNavState {
    menu: boolean
}

export default class TermsNav extends Component<{}, TermsNavState> {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    render() {

        const show = (this.state.menu) ? "show" : "";
        const menucontentStyle = {
            backgroundColor: "#EBFFF4",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.08)",
        };

        return (
            <nav className="navbar" id="navbar">
                <a className="navbar-brand" href={createEmptyLink()}>
                    <img src="svgs/lifechitect_full_logo.svg" alt="Lifechitect's logo" />
                </a>
                <ul className="nav d-none d-md-flex">
                    <li className="nav-item">
                        <a className="nav-link" href="#howItWorks">Term of Use</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contactus">Privacy Policy</a>
                    </li>
                </ul>
                <button className="navbar-toggler d-md-none" onClick={this.toggleMenu}>
                    <span className="navbar-toggler-icon">
                        <i className="fas fa-bars"></i>
                    </span>
                </button>
                <div className={"collapse navbar-collapse " + show} id="menu-content" style={menucontentStyle}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#howItWorks">Term of Use</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

