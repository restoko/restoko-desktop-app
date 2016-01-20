import React, { Component } from 'react';

export default class Form extends Component {

    render() {

        return (
            <div>
                <form action="#">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="name" />
                        <label className="mdl-textfield__label" for="sample3">Name</label>
                    </div>

                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input className="mdl-textfield__input" type="text" id="name" />
                        <textarea class="mdl-textfield__input" type="text" rows= "3" id="sample5" />
                        <label className="mdl-textfield__label" for="sample3">Description</label>
                    </div>
                </form>
            </div>
        );
    };
}