"use client"
import React, { useState } from 'react';
import Header from "./header";
import Footer from "./footer";
import News_row from "./news_row";
import news_array from "./news_data";
import Search from "./search";
import SearchBar from './search';

const Page = () => {
    const [newsData, setNewsData] = useState(news_array);

    return (
        <>
            <Header />
            <SearchBar setNewsData={setNewsData} />
            <div className="container">
                <div className="row">
                    <div className="row-text">
                        <span>TOP NEWS FROM INDIA </span>
                    </div>
                </div> 
                <News_row data={newsData.slice(0, 3)} />
                <News_row data={newsData.slice(3, 6)} />   
                <News_row data={newsData.slice(6, 9)} />
            </div>
            <Footer />
        </>
    )
}

export default Page;
