
const Header=()=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center  header-text"> 
                        <span>NewsAPI</span>
                        <img src="red-logo.png" className="pb-3 header-icon"/>
                        <span>Org</span>
                    </div>
                </div>
                <div className="row header-row "></div>
                <div className="row header-row mt-1"></div>
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