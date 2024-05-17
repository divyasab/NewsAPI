"use client"
import React, { useState,useEffect  } from 'react';
import Header from "./header"; 
import Footer from "./footer";
import NewsRow from "./news_row";
import news_array from "./news_data";
import SearchBar from './search';

const Page = () => {
    const [newsData, setNewsData] = useState([]);

    const updateNewsData = (searchData) => {
        setNewsData(searchData);
    };
    
    useEffect(() => {
        const objectReqwest=fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=9a54c9c34e7e4b7697a08b47411bf1a1')
        objectReqwest.then((response) => response.json())
            .then((data) => {
                const new_headlines=[];
                data.articles.forEach(function (headline) {
                    let new_headline={
                        image: headline.urlToImage,
                        title:headline.title,
                        description:headline.description,
                        url: headline.url
                    };
                    new_headlines.push(new_headline);
                });             
                updateNewsData(new_headlines);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <Header />
            <SearchBar updateNewsData={updateNewsData} />
            <div className="container">
                <div className="row">
                    <div className="row-text">
                        <span>TOP NEWS FROM INDIA </span>
                    </div>
                </div> 
                <NewsRow data={newsData.slice(0, 3)} />
                <NewsRow data={newsData.slice(3, 6)} />   
                <NewsRow data={newsData.slice(6, 9)} />
            </div>
            <Footer />
        </>
    )
}

export default Page;
