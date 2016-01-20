import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './PageListHeader.module.css';

export default class PageListHeader extends Component {
    render() {
        const { title, createButtonTitle } = this.props;

        return (
            <header>
                <div className="mdl-grid">
                    <div className={style.title}>
                        <h1>{title}</h1>
                    </div>
                    <div className="mdl-cell mdl-cell--5-col mdl-cell--5-col-tablet">
                        <Link to="" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
                            <i className="material-icons">add</i> {createButtonTitle}
                        </Link>
                    </div>
                </div>
            </header>
        )
    };
}