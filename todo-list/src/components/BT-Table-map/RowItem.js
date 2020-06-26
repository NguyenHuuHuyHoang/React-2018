import React, { Component } from 'react'

export default class RowItem extends Component {
    render() {
        const {contact} = this.props;
        const {index} = this.props;
        return (
          <tr key={index}>
            <td>{contact.Company}</td>
            <td>{contact.Contact}</td>
            <td>{contact.Country}</td>
          </tr>
        );
    }
}
