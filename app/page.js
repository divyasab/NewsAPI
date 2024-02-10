
import Footer from "./footer";
import Header from "./header_page";
import News_row from "./news_row";




const Page=()=>{
  return(
    <>
      <Header/>
      <div className="container">
        <div className="row">
            <div className="row_text ">
                <span>TOP NEWS  FROM INDIA </span>          
            </div>
        </div>        
        <News_row/>
        <News_row/>
        <News_row/>
      </div>
      <Footer/>         
    </>  
  )
}
export default Page;