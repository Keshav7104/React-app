import React, { Component } from 'react'

const TableHeader = () =>{
    return (
        <thead>
        <tr>
          <th>Name</th>
          <th>State</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
}

const TableBody =(props) =>{
    const rows =props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.state}</td>
                <td>
                    <button onClick={ () => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
    //     <tbody>
    //     <tr>
    //       <td>Keshav</td>
    //       <td>Haryana</td>
    //     </tr>
    //     <tr>
    //       <td>Sachin</td>
    //       <td>Maharashtra</td>
    //     </tr>
    //     <tr>
    //       <td>Sahil</td>
    //       <td>Assam</td>
    //     </tr>
    //     <tr>
    //       <td>Vanshika</td>
    //       <td>Uttar-Pradesh</td>
    //     </tr>
    //   </tbody>
}
const Table = (props) =>  {
    const { characterData, removeCharacter } = props;
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
}

export default Table