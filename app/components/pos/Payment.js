import React, { Component } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Payment extends Component {
    state = {
        open: false
    };

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.open});
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <div>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        )
    }
}