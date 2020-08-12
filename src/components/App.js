import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // onSearchSubmit(term) {
  //   // Async CORS Request that returns a Promise
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
  //       }
  //     })
  //     .then(response => {
  //       console.log(response.data.results);
  //     });
  // }

  // Cleaner Syntax
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`
      }
    });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
