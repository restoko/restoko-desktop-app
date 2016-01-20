import React, { Component } from 'react';
import TableCollection from './TableCollection';
import PageListHeader from '../commons/PageListHeader';
import PageFormHeader from '../commons/PageFormHeader';
import FormContainer from '../commons/FormContainer';
import TableCreateForm from './Form';

export default class Table extends Component {
    state = {
        showCreateForm: false
    };

    componentDidMount() {
        this.props.fetchTables();
    };

    createTable = (data) => {
        this.setState({ showCreateForm: false });
        this.props.createTableRequest(data);
    };

    onCreateClick = () => {
        this.setState({ showCreateForm: true });
    };

    onBackClick = () => {
        this.setState({ showCreateForm: false });
    };

    render() {
        const { tables } = this.props;
console.log(this.props);
        if (! this.state.showCreateForm) {
            return (
                <div>
                    <PageListHeader title="Tables" createButtonTitle="Create New Table" onCreateClick={this.onCreateClick}/>
                    <TableCollection tables={tables.data} />
                </div>
            )
        }

        return (
            <div>
                <PageFormHeader title="Create a table" backButtonTitle="Back to Tables" onBackClick={this.onBackClick}/>
                <FormContainer>
                    <TableCreateForm createTable={this.createTable} />
                </FormContainer>
            </div>
        );
    }
}