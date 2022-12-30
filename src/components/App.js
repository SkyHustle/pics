import React from "react";
import { useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    await unsplash.get("/search/photos", {
      params: { query: term }
    }).then(response => {
      setImages(response.data.results);
    });
  }

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSubmit={handleSubmit} />
      Found: {images.length} images
      <ImageList images={images} />
    </div>
  );
}

export default App;
