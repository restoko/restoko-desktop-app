import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
    clickHandler = () => {
        axios.get('http://localhost:8000/api/v1/categories').then(function(response) {
            console.log(response);
        });

        this.props.onBackClick();
    };

    render() {
        return (
            <div>
                <form action="#">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="name" name="name" pattern="[A-Z,a-z, ]*" />
                        <label className="mdl-textfield__label" htmlFor="name">Name</label>
                        <span className="mdl-textfield__error">Letters and spaces only</span>
                    </div>

                    <br/>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="description" name="description" pattern="[A-Z,a-z, ]*" />
                        <label className="mdl-textfield__label" htmlFor="description">Description</label>
                        <span className="mdl-textfield__error">Letters and spaces only</span>
                    </div>

                    <button
                        type="button"
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                        onClick={this.clickHandler}>

                        Save Category
                    </button>
                </form>
            </div>
        );
    };
}