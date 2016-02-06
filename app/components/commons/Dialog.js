import React, { Component } from 'react';

export default class Dialog extends Component {

    submitHandler = () => {

    }

    render() {
        return (
            <dialog class="mdl-dialog">
                <h4 class="mdl-dialog__title">{this.props.title}</h4>
                <div class="mdl-dialog__content">
                    {this.props.children}
                </div>
                <div class="mdl-dialog__actions">
                    <button type="button" class="mdl-button" onClick={this.submitHandler}>Submit</button>
                    <button type="button" class="mdl-button close">Close</button>
                </div>
            </dialog>
        )
    }
}