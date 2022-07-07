import React, { Component } from "react";
class Table extends Component {
  state = {
    rowsData: [
      { name: "Arsalan", age: 23 },
      { name: "Wasif", age: 23 },
      { name: "Adan", age: 23 },
    ],
  };
  render() {
    console.log(this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {this.state.rowsData.map((data) => {
            return (
              <tr>
                <td> {data.name}</td>
                <td>{data.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
