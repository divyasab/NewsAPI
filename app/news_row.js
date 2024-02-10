import News_col from "./news_col"
const News_row=()=>{
    return(
        <>
           <div className="row mb-4 border" >
                <News_col/>
                <News_col/>
                <News_col/>  

            </div>
           
        </>
    )
}
export default News_row;