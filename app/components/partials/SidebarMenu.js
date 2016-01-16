import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Login extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout">
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Title</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                            <a className="mdl-navigation__link" href="">Link</a>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Title</span>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                        <a className="mdl-navigation__link" href="">Link</a>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                </main>
            </div>
        );
    }
}
