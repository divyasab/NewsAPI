
import Footer from "./footer";
import Header from "./header_page";
import Rownews from "./row_news";
import NewsData from "./newsapi_data";



const Page=()=>{
  return(
    <>
    
      <Header/>
      <Rownews/>
      {/* { NewsData.map((articles)=>(
         <Rownews
          key={articles.id}
          data={articles}
         />
      ))} */}
      
      
      <Footer/>
     
    </>  
  )
}
export default Page;