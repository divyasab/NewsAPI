"use client"
import { useState } from "react";

const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = () => {
        fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=9a54c9c34e7e4b7697a08b47411bf1a1`)
            .then(response => response.json())
            .then(data => {
                setResults(data.articles); // Assuming the API returns an array of articles
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleClick = () => {
        fetchData();
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="text-center">
                    <input
                        type="search"
                        className="searchbar"
                        placeholder="Search"
                        value={input}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={handleClick}>
                        Go
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
