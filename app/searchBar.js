import React, { useState } from 'react';

const SearchBar = ({ setNewsData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    function fetchData() {
        const promise_data=fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=9a54c9c34e7e4b7697a08b47411bf1a1`)
        promise_data.then((response) => response.json())
            .then((data) => {
                setNewsData(data.articles);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <input type="search" className="searchbar" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <button onClick={fetchData}>Go</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
