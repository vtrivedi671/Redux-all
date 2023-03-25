import React from "react";
const Home=()=>{

    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item"> 
                    <img src="http://clipart-library.com/images_k/smartphone-png-transparent/smartphone-png-transparent-14.png"/>
   
          <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                </div>
                <div className="btn-wrapper item ">
                  <button>Add to Cart</button> 
                </div>
           
            </div>
        </div>
    )
}  
 export default Home;    