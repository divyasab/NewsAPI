const News_article = ({ data }) => {
    return (
        <>
            <div className="col-md-4  article-col">
                <img className="image" src={data.urlToImage} />
                <div className="article">
                    <span>{data.title}</span>
                </div>
                <div className="content">
                    <span>{data.description}</span>
                </div>
                <span >Read full article </span>
                <img src="arrow.png" />
            </div>
        </>
    )
}
export default News_article;


  
  
