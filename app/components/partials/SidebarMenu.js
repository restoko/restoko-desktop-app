import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout">
                <header className="mdl-layout__header mdl-layout__header--transparent">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Javalogy</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation">
                            <Link to="/" className="mdl-navigation__link">Home</Link>
                            <Link to="/counter" className="mdl-navigation__link">Categories</Link>
                            <Link to="/" className="mdl-navigation__link">Products</Link>
                            <Link to="/" className="mdl-navigation__link">POS</Link>
                            <Link to="/" className="mdl-navigation__link">Kitchen</Link>
                            <Link to="/" className="mdl-navigation__link">Reports</Link>
                            <Link to="/" className="mdl-navigation__link">Users</Link>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Javalogy</span>
                    <nav className="mdl-navigation">
                        <Link to="/" className="mdl-navigation__link">Categories</Link>
                        <Link to="/" className="mdl-navigation__link">Products</Link>
                        <Link to="/" className="mdl-navigation__link">POS</Link>
                        <Link to="/" className="mdl-navigation__link">Kitchen</Link>
                        <Link to="/" className="mdl-navigation__link">Reports</Link>
                        <Link to="/" className="mdl-navigation__link">Users</Link>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                </main>
            </div>
        );
    }
}
