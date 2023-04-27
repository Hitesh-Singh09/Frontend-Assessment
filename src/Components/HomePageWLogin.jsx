import React from 'react'
import "./HomePageWLogin.css"



const HomePageWLogin = () => {
  return (
    <>
 <div className="container1">

 <div className="header1">
 <div className="img">
 <img src="./images/Logo.png" alt="Logo" className='Logo'/>
 </div>
 <div className="buttons">
 <button className='Login-btn'>Login</button>
 <button className='Learn-btn'>Learn More</button>
 </div>
  </div>

<div className="para">
<h2>Hassle-Free Shipping Solutions</h2>
<h3>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</h3>
</div>

<div className="search-bar1">
<div className="options ">
 <div className="option ">
<img src="./images/location.png"  alt="location" />
<h6>Origin, Port, City</h6>
 </div>
 <div className="option ">
<img src="./images/location.png"  alt="location" />
<h6>Destination, Port, City</h6>
 </div>
 <div className="option ">
 <div className="blank"></div>
<img src="./images/calendar.png"  alt="location" />
<h6>13 April 2023</h6>
 </div>
 <div className="option ">
 <div className="blank"></div>
<img src="./images/load.png"  alt="location" />
<h6>Load</h6>
 </div>

 <div className="arrow-button ">
 <div className="blank-line"></div>

 <img src="./images/arrow-right.png"  alt="arrow" className='arrow-btn'/>

 </div>
</div>
</div>


<div className="services">
<h1>Services</h1>

<div className="cards">
<div className="service">
<div className="upper">
<img src="./images/Freight.png" alt="Freight" />
<h3>Freight Services</h3>
</div>
<div className="hori-line"></div>

<div className="lower">
<p>Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
</div>
</div>
<div className="service">
<div className="upper">
<img src="./images/briefcase.png" alt="Freight" />
<h3>Business Services</h3>
</div>
<div className="hori-line"></div>

<div className="lower">
<p>We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.</p>
</div>
</div>
<div className="service">
<div className="upper">
<img src="./images/ship.png" alt="Freight" />
<h3>Shipping & Logistic</h3>
</div>
<div className="hori-line"></div>

<div className="lower">
<p>Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.</p>
</div>
</div>
<div className="service">
<div className="upper">
<img src="./images/i24support.png" alt="Freight" />
<h3>24/7 Support</h3>
</div>
<div className="hori-line"></div>
<div className="lower">
<p>Receive support from our experts all over the world at every stage of the process, 24/7.</p>
</div>
</div>

<div className="message-box">
<img src="./images/message2.png" alt="Message" />
</div>
</div>
</div>
 
<div className="waves">
<img src="./images/waves1.png" alt=""  className='wave1'/>
<img src="./images/waves2.png" alt="" className='wave2' />


</div>
 
 </div>
    </>
  )
}

export default HomePageWLogin
