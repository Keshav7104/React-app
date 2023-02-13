import React, { Component } from 'react'

const TableHeader = () =>{
    return (
        <thead>
        <tr>
          <th>Name</th>
          <th>State</th>
        </tr>
      </thead>
    )
}

const TableBody =() =>{
    return (
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
    )
}
class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

export default Table