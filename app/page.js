"use client"
import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import News_row from "./news_row";
import news_api from "./news_data";
import SearchBar from "./searchBar";

const Page = () => {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <>
            <Header/>
            <SearchBar setResults={setSearchResults} />
            <div className="container">
                <div className="row">
                    <div className="row-text">
                        <span>TOP NEWS FROM INDIA </span>
                    </div>
                </div>
                {news_api && news_api.length > 0 ? (
                    <>
                        <News_row data={news_api.slice(0, 3)} />
                        <News_row data={news_api.slice(3, 6)} />   
                        <News_row data={news_api.slice(6, 9)} />
                    </>
                ) : (
                    <p>No news data available</p>
                )}
            </div>
            <Footer />
        </>
    )
}
export default Page;
