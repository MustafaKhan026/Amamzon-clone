import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product 
           id='1232'
           title='The lean startup'
           price={1200}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product 
           id='5854'
           title='Oculus Quest All-in-one VR Gaming Headset – 64GBp'
           price={8000}
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg" />
        </div>
        <div className="home__row">
          <Product 
           id='9693'
           title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)'
           price={25000}
           rating={3}
           image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"  />
          <Product
           id='1212' 
           title='Amazon-Echo-dot-3'
           price={15000}
           rating={5}
           image="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE"
           />
          <Product 
           id='3482'
           title='Gaming Mouse'
           price={1500}
           rating={4}
           image="https://www.primeabgb.com/wp-content/uploads/2020/07/Logitech-G502-LIGHTSPEED-Wireless-Gaming-Mouse.jpg"  />
        </div>
        <div className="home__row">
          <Product 
           id='8713'
           title='Raycon wireless earbuds'
           price={3000}
           rating={4}
           image="https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxR0kxRkwlMkIxMkwuX1NTNDAwXy5qcGc.jpg"  />
        </div>
      </div>
    </div>
  );
}

export default Home;


// https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg