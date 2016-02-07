import React, { Component } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

export default class Payment extends Component {
    state = {
        open: false,
        total: 0,
        rendered: 0,
        change: 0
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

    handleChange = (e) => {
        this.setState({rendered: e.target.value});

        let change = parseFloat(this.state.total) - parseFloat(e.target.value);

        this.setState({change: Math.abs(change)});
    };

    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.open, total: nextProps.total});
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
                    title="Payment"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>

                    <TextField
                        floatingLabelText="Amount to pay"
                        value={this.state.total}
                        type="number"
                        style={{width: '100%'}}
                        disabled={true}
                    /><br/>

                    <TextField
                        floatingLabelText="Change"
                        type="number"
                        style={{width: '100%'}}
                        disabled={true}
                        value={this.state.change}
                    /><br/>

                    <TextField
                        hintText="Amount rendered"
                        floatingLabelText="Amount rendered"
                        type="number"
                        style={{width: '100%'}}
                        onChange={this.handleChange}
                    /><br/>
                </Dialog>
            </div>
        )
    }
}