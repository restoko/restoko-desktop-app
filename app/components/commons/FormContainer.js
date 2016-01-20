import React, { Component } from 'react';
import style from './FormContainer.module.css';

export default class Form extends Component {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
        const { children } = this.props;

        return (
            <div className={style.formContainer}>
                {children}
            </div>
        );
    };
}