import React, { useState, useContext } from "react";
import { SearchResults } from "../context/SearchContext";
import useAxios from "../hooks/useAxios";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("g");
  const [url, setUrl] = useState("")
  const searchResults = useContext(SearchResults)
  const { data } = useAxios(url);
  console.log(data);
  return (
    <>
      <h1>Search</h1>
      <input value={search} onChange={(e)=>{setSearch(e.target.value)} }
        className="input-group input-group-lg"
        placeholder="search"
      ></input>
      <select className="form-select" type={"form-select"} value={rating} onChange={(e)=>{setRating(e.currentTarget.value) }}>
        <option value={"g"}>g</option>
        <option value={"pg"}>pg</option>
        <option value={"pg-13"}>pg-13</option>
        <option value={"r"}>r</option>
      </select>
      <button className="btn btn-secondary" onClick={()=>
     setUrl( "&q=" + search + "&rating=" + rating)}
  >Search</button>

    { data && data.map((gif)=>(<img onDoubleClick={()=>(gif.id)} src={gif.gifUrl}/>))}
    </>
  );
};

export default SearchPage;
