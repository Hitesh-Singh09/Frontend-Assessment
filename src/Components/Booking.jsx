import React from 'react'
import './Booking.css'
const Booking = () => {
  return (
    <>
    <div className="container2">


    <div className="header2">
    <img src="./images/Logo.png" alt="Logo" />
    </div>

    <div className="tracking2">
    <div className="points2">
    <h3>1</h3>
    </div>
    

    <div className="line2"></div>
    <div className="points2">
    <h3>2</h3>
       </div>
    <div className="line2"></div>
    <div className="points2">
    <h3>3</h3>
        </div>
    <div className="line2"></div>
    <div className="points2">
    <h3>4</h3>
        </div>
       </div>

       <div className="tags2">
       <p>Search</p>
       <p>Recommended</p>
       <p>Results</p>
       <p>Booking</p>
       </div>

       <div className="summary2">
       
       <div className="booking2">
       <div className="upper2 ">
       <div>
       <h1>Booking summary</h1>
       <h5>Express</h5>
       <img src="./booking/Plane icon.png" alt="Plane" className='plane2' />
       </div>


       <div className="flight flex" >
<div className="city2 flex">
<img src="./booking/icon.png" alt="icon" className='city-icon2' style={{marginRight:"30px"}}/>
<p>Delhi,<br/>
110003 India
</p>
</div>
<div className="path">
<img src="" alt="" />
<div className="blank2"></div>
</div>
<div className="city2">
<img src="./booking/icon.png" alt="icon"  style={{marginLeft:"80px"}}/>
<p>Shanghai<br/>
200080, China

</p>
</div>      
       </div>
       </div>
       <div className="middle2 flex">
       <div className="weight2 flex-c">
       <p>Total Weight/Volume</p>
       <img src="./booking/weightmeter.png" alt="meter" />
       <h5>114.21KG</h5>

       </div>
       <div className="load2 ">
       <h1>Load</h1>
       <div className="pallet2">
       <h2>1  X</h2>
       <div className="icon flex-c">
       <img src="./booking/pallet.png" alt="pallet" />
       <h3 style={{margin:"4px"}}>Pallets</h3>
       <p style={{margin:"4px"}}>230 X 140 X  120 CM</p>
       </div>
       
       </div>
       
       
       </div>
       </div>
       <div className="lowers2 ">
       <div className="seller2 flex-c">
      <p><span>Seller:</span> Primetime Worldwide</p>
      <img src="./booking/Frame 64.png" alt="ship" />
      </div>
       <div className="insurance2  flex-c">
       <p><span>Seller:</span> Primetime Worldwide</p>
       <img src="./booking/Xcover.png" alt="ship" />
       </div>
       
       </div>
       
       
       </div>
       <div className="pricings2">
       
<div className="price2 ">
<h1>Price details</h1>
<img src="./booking/Frame 47.png" alt="Frame" />
</div>
    
<div className="common2 ">
<p>Seller Quote</p> 
<p>$ 3,659.25</p>
</div>
<div className="break2"></div>
<div className="common2">
<p>Duties and taxes</p> 
<p>Not Included</p>
</div>
<div className="common2 ">
<p>Insurance<br/><span>Based on the items cost</span> </p>
<p>$323.40</p>
</div>
<div className="break2 flex"></div>

<div className="common2 ">
<p>Add a promo code</p> 
</div>
<div className="common2 ">
<p>Platform fee</p> 
<p>$119.48</p>
</div>
<div className="break2"></div>

<div className="total2 ">
<h1>Total:</h1>
<h2>$ 4,102.13</h2>

</div>
<button className='btns flex'>Checkout</button>
     


       
       
       
       </div>
       
       
       </div>
      
    
    </div>
    </>
  )
}

export default Booking
