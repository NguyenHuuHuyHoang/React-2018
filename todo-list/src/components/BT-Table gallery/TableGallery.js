import React, { Component } from "react";
import "./TableGalley.css";
import RowPicture from "./RowPicture";

export default class TableGallery extends Component {
  state = {
    arrPictures: [
      [
        { id: 1, url: "http://bit.ly/3ayPusa", size: "larger" },
        { id: 2, url: "http://bit.ly/3ayPusa", size: "larger" },
        { id: 3, url: "http://bit.ly/3ayPusa", size: "larger" },
      ],
      [
        { id: 4, url: "http://bit.ly/3ayPusa", size: "larger" },
        { id: 5, url: "http://bit.ly/3ayPusa", size: "larger" },
        { id: 6, url: "http://bit.ly/3ayPusa", size: "larger" },
      ],
      [
        { id: 7, url: "http://bit.ly/3ayPusa", size: "larger" },
        { id: 8, url: "http://bit.ly/3ayPusa", size: "larger" },
        { id: 9, url: "http://bit.ly/3ayPusa", size: "larger" },
      ],
    ],
  };

  ChangeSizePicture = (id) => {
    let arrPicturesUpdate = [...this.state.arrPictures];
    var rowIndex = 0;
    let itemIndex = 0;
    for (let row of arrPicturesUpdate) {
      if (row.findIndex((Picture) => Picture.id === id) !== -1) {
        itemIndex = row.findIndex((Picture) => Picture.id === id);
        break;
      }
      rowIndex++;
    }

    arrPicturesUpdate[rowIndex][itemIndex].size =
      arrPicturesUpdate[rowIndex][itemIndex].size === "larger"
        ? "tiny"
        : "larger";
    this.setState({
      arrPictures: arrPicturesUpdate,
    });
  };

  render() {
    return (
      <div>
        <h2>Table gallery</h2>
        <table>
          <thead>
            <tr>
              <th>Image column 1</th>
              <th>Image column 2</th>
              <th>Image column 3</th>
            </tr>
          </thead>
          <tbody>
            <RowPicture
              arrPictures={this.state.arrPictures}
              ChangeSizePicture={this.ChangeSizePicture}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
