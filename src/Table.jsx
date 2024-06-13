import React from 'react'

const Table = (props) => {
    let data = props.data;
    // console.log(data);
  return (
    <div>
      <table>
        <tbody>
        <tr>
            <td><strong>Name</strong></td>
            <td><strong>Email</strong></td>
            <td><strong>Number</strong></td>
            <td><strong>Address</strong></td>
        </tr>
        <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.number}</td>
            <td>{data.address}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
