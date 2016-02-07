import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SidebarMenu extends Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Javalogy</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <Link to="/" className="mdl-navigation__link">Logout</Link>
                        </nav>
                    </div>
                </header>

                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Javalogy</span>
                    <nav className="mdl-navigation">
                        <Link to="/" className="mdl-navigation__link">Home</Link>
                        <Link to="/categories" className="mdl-navigation__link">Categories</Link>
                        <Link to="/products" className="mdl-navigation__link">Products</Link>
                        <Link to="/tables" className="mdl-navigation__link">Tables</Link>
                        <Link to="/discounts" className="mdl-navigation__link">Discounts</Link>
                        <Link to="/pos" className="mdl-navigation__link">POS</Link>
                        <Link to="/kitchen" className="mdl-navigation__link">Kitchen</Link>
                        <Link to="/" className="mdl-navigation__link">Reports</Link>
                        <Link to="/" className="mdl-navigation__link">Users</Link>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}
