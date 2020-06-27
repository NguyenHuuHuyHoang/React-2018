import React, { Component } from "react";
import './TableGalley.css'

export default class TableGallery extends Component {

    imageWidth = 'larger';

    changedSizeImage = () => {
        return this.imageWidth = 'tiny';
    }

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
          <tr>
        <td>
          <img className={this.imageWidth} src="http://bit.ly/3ayPusa" onClick={this.changedSizeImage()} alt="Image 1"/>
        </td>
        <td>
          <img src="http://bit.ly/3ayPusa" alt="Image 1"  style={{width: "200px"}}/>
        </td>
        <td>
          <img src="http://bit.ly/3ayPusa" alt="Image 1"  style={{width: "200px"}}/>
        </td>
      </tr>

          </tbody>
        </table>
      </div>
    );
  }
}
