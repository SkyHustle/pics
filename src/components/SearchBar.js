import React from "react";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    onSubmit(term);
  }
  
  return (
    <div className="ui segment">
      <form onSubmit={event => onFormSubmit(event)} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={event => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
