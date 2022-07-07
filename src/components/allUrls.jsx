import axios from "axios";
import React, { Component } from "react";

class Urls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
  }
  componentDidMount() {
    // Make Axios request
    axios
      .get("http://localhost:4000/api/urls")
      .then((data) => {
        this.setState({ urls: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    // Populate the state
  }
  populateData = () => {
    return this.state.urls.map((data, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{data._id}</td>
          <td>{data.shortUrl}</td>
          <td>{data.longUrl}</td>
          <td>{data.clicks}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ShortUrl</th>
              <th>LongUrl</th>
              <th>Clicks</th>
            </tr>
          </thead>
          <tbody>{this.populateData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Urls;
