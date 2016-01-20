import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import NotificationSystem from 'react-notification-system';

export default class Form extends Component {
    state = {
        name: null,
        change: null
    };

    notificationSystem = null;

    componentDidMount() {
        this.notificationSystem = this.refs.notificationSystem;
    }

    clickHandler = () => {
        let data = {
            name: this.state.name,
            description: this.state.description
        };

        if (this.validateData()) {
            return false;
        }

        this.props.createTable(data);
    };

    validateData = () => {
        let errorFound = false;
        let message = null;

        if (this.state.name == null) {
            message = 'Field Name is required<br/>';

            errorFound = true;
        }

        if (this.state.description == null) {
            message += 'Field Description is required';

            errorFound = true;
        }

        if (errorFound) {
            this.notificationSystem.addNotification({
                title: 'Opps! Something went wrong',
                message: message,
                level: 'error',
                position: 'bl'
            });
        }

        return errorFound;
    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleDescriptionChange = (e) => {
        this.setState({ description: e.target.value });
    };

    render() {
        return (
            <div>
                <NotificationSystem ref="notificationSystem" allowHTML={true} />

                <form action="#">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input
                            className="mdl-textfield__input"
                            type="text" id="name"
                            name="name" pattern="[A-Z,a-z, ]*"
                            onChange={this.handleNameChange} />

                        <label className="mdl-textfield__label" htmlFor="name">Name</label>
                        <span className="mdl-textfield__error">Letters and spaces only</span>
                    </div>

                    <br/>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input"
                               type="text" id="description" name="description"
                               pattern="[A-Z,a-z, ]*"
                               onChange={this.handleDescriptionChange} />

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