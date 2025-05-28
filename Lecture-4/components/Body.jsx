import RestaurentCard from "./RestaurentCard"


const Body=()=>{
      return <div className="body">
              <div className="serach">
                 Search
              </div>
              <div className="res-container">
                {/*restaurent-card-component*/}
          <RestaurentCard resName="Meghna Food" cuisines="North Indian, Biryani" starRating="4.2" delTime="30"/>
                 
                  
  
              </div>
        
      </div>
}

export default Body;