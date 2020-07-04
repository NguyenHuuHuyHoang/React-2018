import React, { Component } from "react";

export default class RowPicture extends Component {
  render() {
    let { arrPictures } = this.props;
    return arrPictures.map((row, index) => {
      return (
        <tr key={index}>
          {row.map((picture, index) => {
            return (
              <td key={index}>
                <img
                  src={picture.url}
                  alt="picture"
                  className={picture.size}
                  onClick={() => {
                    this.props.ChangeSizePicture(picture.id);
                  }}
                />
              </td>
            );
          })}
        </tr>
      );
    });
  }
}
