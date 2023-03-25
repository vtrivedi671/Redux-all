import React from "react";
const Home=()=>{

    return(
        <div>
            <div className="cart">
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-donations-shopping-carts-forms-membershipworks-21.png"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper "> 
                    <img src="https://p.kindpng.com/picc/s/422-4225211_new-mobile-phone-png-transparent-cartoons-smart-phones.png"/>
                    </div>
          <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
              
                <div className="btn-wrapper item ">
                  <button>Add to Cart</button> 
                </div>
           
            </div>
        </div>
    )
}  
 export default Home;    