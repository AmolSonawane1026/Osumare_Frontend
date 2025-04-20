import React from 'react'
import './ShowData.css'

function ShowData({ dataList }) {
  if (!dataList || dataList.length === 0) return null

  return (
    <div className="table_container">
      <table className="table_main">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((item, index) => (
            <tr key={index}>
              <td><input type="checkbox" /></td>
              <td>{item.firstName} {item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.languages.join(', ')}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowData
