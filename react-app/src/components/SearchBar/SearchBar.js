import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return <div className='container'><input type="text" defaultValue="" onChange={props.handleSearch}></input></div>;
}

export default SearchBar;