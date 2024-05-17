import React, { useState } from 'react';

const SearchBar = ({ updateNewsData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    function fetchData() {
        const promiseObject=fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=9a54c9c34e7e4b7697a08b47411bf1a1`);
        promiseObject.then((response) => response.json())
            .then((data) => {
                const new_articles=[];
                data.articles.forEach(function (article) {
                    let new_article={
                        image: article.urlToImage,
                        title:article.title,
                        description:article.description,
                        url: article.url
                    };
                    new_articles.push(new_article);
                });                                                                 
                updateNewsData(new_articles);               
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
                        <input 
                            type="search" 
                            className="searchbar" 
                            placeholder="Search" 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                        />
                        <button onClick={fetchData}>Go</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
