import React, { Component } from 'react';
import style from './PageListHeader.module.css';

export default class PageListHeader extends Component {
    clickHandler = () => {
        this.props.onCreateClick();
    };

    render() {
        const { title, createButtonTitle } = this.props;

        return (
            <div>
                <header>
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--9-col mdl-cell--9-col-tablet">
                            <h1>{title}</h1>
                        </div>
                        <div className="mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet">
                            <button
                                style={{width: "100%", marginTop: "6px"}}
                                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                                onClick={this.clickHandler}>

                                <i className="material-icons">add</i> {createButtonTitle}
                            </button>
                        </div>
                    </div>
                </header>

                <hr/>
            </div>

        )
    };
}