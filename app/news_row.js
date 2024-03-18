import news_api from "./news_data"; 
import News_article from "./news_article";
const News_row =({data}) => {
    return (
        <>
            <div className="row mb-4 ">
                
                <News_article data={data[0]} />
                <News_article data={data[1]} />
                <News_article data={data[2]} />    
            </div>
            
        </>
    )
}
export default News_row;
