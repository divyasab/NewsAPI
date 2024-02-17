import Footer from "./footer";
import Header from "./header";
import News_row from "./news_row";
import News_data from "./news_data";

const Page = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="row_text">
            <span>TOP NEWS FROM INDIA </span>
          </div>
        </div>
        <News_row data={News_data.slice(0, 3)} />
        <News_row data={News_data.slice(3, 6)} />   
        <News_row data={News_data.slice(6, 9)} />   
      </div>
      <Footer />
    </>
  )
}
export default Page;
