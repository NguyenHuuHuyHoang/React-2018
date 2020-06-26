import React, { Component } from "react";
import RowItem from "./RowItem";

export default class Table extends Component {
  dataCompany = [
    {
      Company: "Alfreds Futterkiste",
      Contact: "Maria Anders",
      Country: "Germany",
    },
    {
      Company: "Centro comercial Moctezuma",
      Contact: "Francisco Chang",
      Country: "Mexico",
    },
    {
      Company: "Ernst Handel",
      Contact: "Roland Mendel",
      Country: "Austria",
    },
    {
      Company: "Island Trading",
      Contact: "Helen Bennett",
      Country: "UK",
    },
    {
      Company: "Laughing Bacchus Winecellars",
      Contact: "Yoshi Tannamuri",
      Country: "Canada",
    },
    {
      Company: "Magazzini Alimentari Riuniti",
      Contact: "Giovanni Rovelli",
      Country: "Italy",
    },
  ];
  tableRender() {
    return this.dataCompany.map((contact, index) => {
      return <RowItem contact={contact} index={index} />;
    });
  }

  render() {
    return (
      <div>
        <h2>HTML Table</h2>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>{this.tableRender()}</tbody>
        </table>
      </div>
    );
  }
}
