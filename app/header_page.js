

const Header=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center font-size-sm header"> 
                        <span>NewsAPI</span>
                        <img src="red-logo.png" className="pb-3 icon"/>
                        <span>Org</span>
                    </div>
                </div>
                <div className="row row_border "></div>
                <div className="row row_border mt-1"></div>
            </div>
            <div className="container">    
                <div className="row">
                    <div className="text-center">
                       <input type="search" class="searchbar" placeholder="search" />                            
                        <button  type="button">
                            <span>Go</span>
                        </button>
                    </div>               
                </div>
            </div>    
        </>
    )
}
export default Header;