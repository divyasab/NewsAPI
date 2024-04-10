const News_article = ({ data }) => {
    return (
        <>
            <div className="col-md-4  article-col">
                <img className="image" src={data.image} />
                <div className="article">
                    <span>{data.title}</span>
                </div>
                <div className="content">
                    <span>{data.description}</span>
                </div>
                <a href={data.url} className="urlcolor">Read full article<img src="arrow.png" /> </a>
              
                
            </div>
        </>
    )
}
export default News_article;


  
  
