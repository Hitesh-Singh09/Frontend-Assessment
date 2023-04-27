import React from 'react'
import './Shopping.css'


const Shopping = () => {
  return (
   <>
<div className="container4">

<div className="header4">
 <div className="img">
 <img src="./images/Logo.png" alt="Logo" className='Logo'/>
 </div>
 <div className="buttons">
 <button className='dollar-btn'>$</button>
 <button className='track-btn'>Track shipment</button>
 </div>
  </div>


  <div className="tracking">

  <div className="load-block flex ">
  <img src="./images/load.png" alt="Load" />
  <p style={{margin:"5px"}}>Load</p>
  </div>
  <div className="points">
  <h3>1</h3>
  </div>
  

  <div className="line"></div>
  <div className="points">
  <h3>2</h3>
     </div>
  <div className="line"></div>
  <div className="points">
  <h3>3</h3>
      </div>
  <div className="line"></div>
  <div className="points">
  <h3 style={{backgroundColor:" #868686"}}>4</h3>
      </div>
     </div>

     <div className="tags">
     <p>Search</p>
     <p>Recommended</p>
     <p>Results</p>
     <p>Booking</p>
     </div>


     <div className="search-bar">
     <div className="options ">
      <div className="option ">
     <img src="./images/location.png"  alt="location" />
     <h6>Delhi, 110003</h6>
      </div>
      <div className="option ">
     <img src="./images/location.png"  alt="location" />
     <h6>Shanghai, 200080</h6>
      </div>
      <div className="option ">
      <div className="blank"></div>
     <img src="./images/calendar.png"  alt="location" />
     <h6>13 April 2023</h6>
      </div>
      <div className="option ">
      <div className="blank"></div>
     <img src="./images/load.png"  alt="location" />
     <h6>114.21KG - AIR</h6>
      </div>
     
      <div className="arrow-button ">
      <div className="blank-line"></div>
     
      <img src="./images/edit2.png"  alt="arrow" className='arrow-btn'/>
     
      </div>
     </div>
     </div>
     
     <div className="cross-line"></div>

     <div className="ticket-section ">
     
     <div className="left">
     <h1>3 Top Quote <span>(6 in Total)</span></h1>
     
     <div className="drop-down  ">
     <h3>Filter</h3>
     <img src="./booking/down-arrow.png" alt="Down" />
     </div>
     <div className="drop-down  ">
     <h3>Price</h3>
     <img src="./booking/down-arrow.png" alt="Down" />
     </div>
     <div className="drop-down  ">
     <h3>Modes</h3>
     <img src="./booking/down-arrow.png" alt="Down" />
     </div>
     <div className="drop-down  ">
     <h3>Seller</h3>
     <img src="./booking/down-arrow.png" alt="Down" />
     </div>
     
     
     
     
     </div>


     <div className="right-side ">
     
     <div className="offer-values flex">
<div className="offer flex">
<p>Best Value 5-5 days. $3,121</p>
</div>
<div className="offer flex">
<p>Quickest 5-5 days. $3,121</p>
</div>
<div className="offer flex">
<p>Cheapest 5-5 days. $3,121</p>
</div>
</div>


<div className="price-section">

<div className="price-card flex">

<div className="first ">
<div className="inner flex">
<h1><span>. </span>Best Value</h1>
<h2>Express</h2>
<h2 style={{color:'black'}}>Est. 5 days</h2>
</div>

<div className="inner flex">
<img src="./images/location.png" alt="" />
<p>110003, Delhi</p>
<div className="small-line"></div>
<img src="./images/small plane.png" alt="plane" style={{margin:"8px"}}/>
<div className="small-line" style={{margin:"5px"}}></div>

<img src="./images/location.png" alt="" />
<p>200080, Shanghai</p>
</div>

<div className="inner flex">
<img src="./booking/Frame 34.png" alt="" />
<h3>Primetime Worldwide</h3>
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/plane star.png" alt="empty star" />
</div>




</div>

<div className="vertical-line"></div>
<div className="second flex-c">

<h1>$ 3,982.63</h1>
<button className='sec-btn'>Select</button>
<p>View details</p>

</div>

</div>



<div className="price-card flex">

<div className="first ">
<div className="inner flex">
<h5 className='eco flex' ><span></span>Eco</h5>
<h2>Express</h2>
<h2 style={{color:'black'}}>Est. 5 days</h2>
</div>

<div className="inner flex">
<img src="./images/location.png" alt="" />
<p>110003, Delhi</p>
<div className="small-line"></div>
<img src="./images/small plane.png" alt="plane" style={{margin:"8px"}}/>
<div className="small-line" style={{margin:"5px"}}></div>

<img src="./images/location.png" alt="" />
<p>200080, Shanghai</p>
</div>

<div className="inner flex">
<img src="./booking/Frame 34.png" alt="" />
<h3>Primetime Worldwide</h3>
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/plane star.png" alt="empty star" />
</div>




</div>

<div className="vertical-line"></div>
<div className="second flex-c">

<h1>$ 3,982.63</h1>
<button className='sec-btn'>Select</button>
<p>View details</p>

</div>

</div>



<div className="price-card flex">

<div className="first ">
<div className="inner flex">
<h1><span>. </span>Best Value</h1>
<h2>Express</h2>
<h2 style={{color:'black'}}>Est. 5 days</h2>
</div>

<div className="inner flex">
<img src="./images/location.png" alt="" />
<p>110003, Delhi</p>
<div className="small-line"></div>
<img src="./images/small plane.png" alt="plane" style={{margin:"8px"}}/>
<div className="small-line" style={{margin:"5px"}}></div>

<img src="./images/location.png" alt="" />
<p>200080, Shanghai</p>
</div>

<div className="inner flex">
<img src="./booking/Frame 34.png" alt="" />
<h3>Primetime Worldwide</h3>
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/plane star.png" alt="empty star" />
</div>




</div>

<div className="vertical-line"></div>
<div className="second flex-c">

<h1>$ 3,982.63</h1>
<button className='sec-btn'>Select</button>
<p>View details</p>

</div>

</div>



<div className="price-card flex">

<div className="first ">
<div className="inner flex">
<h1><span>. </span>Best Value</h1>
<h2>Express</h2>
<h2 style={{color:'black'}}>Est. 5 days</h2>
</div>

<div className="inner flex">
<img src="./images/location.png" alt="" />
<p>110003, Delhi</p>
<div className="small-line"></div>
<img src="./images/small plane.png" alt="plane" style={{margin:"8px"}}/>
<div className="small-line" style={{margin:"5px"}}></div>
 
<img src="./images/location.png" alt="" />
<p>200080, Shanghai</p>
</div>

<div className="inner flex">
<img src="./booking/Frame 34.png" alt="" />
<h3>Primetime Worldwide</h3>
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/filled star.png" alt="" />
<img src="./booking/plane star.png" alt="empty star" />
</div>




</div>

<div className="vertical-line"></div>
<div className="second flex-c">

<h1>$ 3,982.63</h1>
<button className='sec-btn'>Select</button>
<p>View details</p>

</div>

</div>




<div className="message-box">
<img src="./images/message2.png" alt="Message" />
</div>
</div>

     </div>




     
     
     </div>


</div>
   
   
   </>
  )
}

export default Shopping;
