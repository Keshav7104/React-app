import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Keshav</td>
            <td>Haryana</td>
          </tr>
          <tr>
            <td>Sachin</td>
            <td>Maharashtra</td>
          </tr>
          <tr>
            <td>Sahil</td>
            <td>Assam</td>
          </tr>
          <tr>
            <td>Vanshika</td>
            <td>Uttar-Pradesh</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table