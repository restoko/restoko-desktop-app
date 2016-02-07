import React, { Component } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

export default class ProductCard extends Component {

    handleCancelled = (e) => {
        this.props.cancelOrder(this.props.id);
    };

    handleReady = (e) => {
        this.props.readyOrder(this.props.id);
    };

    render() {
        const { tableName, productName, status, id, quantity } = this.props;

        return (
            <Card style={{width: '30%', float: 'left', margin: '5px 10px 5px 10px'}}>
                <CardTitle
                    title={tableName.toUpperCase()}
                    subtitle={status.toUpperCase()}
                    style={{backgroundColor: '#51A527'}}
                />

                <CardText>
                    {quantity}x of  <strong>{productName.toUpperCase()}</strong>
                </CardText>

                <CardActions style={{float: 'right'}}>
                    <FlatButton label="Cancelled" onClick={this.handleCancelled} />
                    <FlatButton label="Ready" primary={true} onClick={this.handleReady} />
                </CardActions>
            </Card>
        )
    }
}

