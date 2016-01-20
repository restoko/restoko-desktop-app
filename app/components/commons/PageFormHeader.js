import React, { Component } from 'react';
import style from './PageListHeader.module.css';

export default class PageListHeader extends Component {
    clickHandler = () => {
        this.props.onBackClick();
    };

    render() {
        const { title, backButtonTitle } = this.props;

        return (
            <div>
                <header>
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--5-col mdl-cell--5-col-tablet">
                            <button
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                                onClick={this.clickHandler}>

                                <i className="material-icons">reply</i> {backButtonTitle}
                            </button>
                        </div>

                        <div className={style.title}>
                            <h1>{title}</h1>
                        </div>
                    </div>
                </header>

                <hr/>
            </div>

        )
    };
}