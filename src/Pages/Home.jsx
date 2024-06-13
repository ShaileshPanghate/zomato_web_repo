import React from 'react'
import Nav from '../Component/Nav';
import Fot from '../Component/footer'
import './home.css'
import img1 from '../photos/shutterstock_1903754356-min.jpg';
import img2 from '../photos/1-cake-stand-gold-green-a-f-d-cor-original-imagnrhsbtwyjwdp.webp';
import img3 from '../photos/hamburger-one-dish-kitchen-square-1200.jpg';
import img4 from '../photos/images.jfif';
import img5 from '../photos/north11.jpg';
import img6 from '../photos/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000-0984c1b513ae4af396aee039afa5e38c.jpg';
import img7 from '../photos/thumbnail-Italian-Sub-Squares-scaled.jpg';
import img8 from '../photos/Chili-crisp-noodles_2.webp';
import img9 from '../photos/south11.jpg';
import img10 from '../photos/Haldiram.jpg';
import img11 from '../photos/NI hao design (1).jpg';
import img12 from '../photos/KRISHNAMdesign (2).jpg';
import img13 from '../photos/Pride_design (3).jpg';
import img14 from '../photos/KFCdesign (4).jpg';
import img15 from '../photos/McDdesign (5).jpg';
import img16 from '../photos/Fasoos.jpg';
import img17 from '../photos/DosaDestination.jpg';
import img18 from '../photos/\Naivedyam.jpg';



const Home = () => {

  async function pincodeFunc(event) {
    let pincode = document.getElementById('pincode').value;
    let res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    let data = await res.json();
    let address = document.getElementById('address');
    address.innerText = `${data[0].PostOffice[0].District},${data[0].PostOffice[0].Circle} ${"\n"}Your area is serviceable${"\n"}
    Delivery Within 1-2 Hour${"\n"}Cash on Delivery available on orders above ₹499${"\n"}`;
  }

  return (
    <div>
      <div>
        <Nav />
      </div>
      <div id='HeroSection'>
        <div id='input'>
          <h1>Discover the best food & drinks in Your Area</h1>

          <input type="number" id='pincode' placeholder='Add Your pin code' />
          <button id='pinSubmit' onClick={pincodeFunc}>Submit</button>

          <p id='address'></p>
        </div>
      </div>

      <br /><br /><br />
      <div className='home'>
        <div className='filters'>
          <button>Rating 4+</button>
          <button>Non-veg</button>
          <button>Pure veg</button>
          <input placeholder='Serach your favorate Dish' />
        </div>
        <br />
        {/* Section 1 */}
        <h2>Inspiration for your first order</h2>
        <div className='InspirationFirstOrder'>
          <div className='orderSec'>
            <img src={img1} alt="" />
            <h5>Chicken</h5>
          </div>
          <div className='orderSec'>
            <img src={img2} alt="" />
            <h5>Cake</h5>
          </div>
          <div className='orderSec'>
            <img src={img3} alt="" />
            <h5>Burger</h5>
          </div>
          <div className='orderSec'>
            <img src={img4} alt="" />
            <h5>Rolls</h5>
          </div>
          <div className='orderSec'>
            <img src={img5} alt="" />
            <h5>North Indian</h5>
          </div>
          <div className='orderSec'>
            <img src={img6} alt="" />
            <h5>Snadwich</h5>
          </div>
          <div className='orderSec'>
            <img src={img7} alt="" />
            <h5>Italian</h5>
          </div>
          <div className='orderSec'>
            <img src={img8} alt="" />
            <h5>Chinese</h5>
          </div>
          <div className='orderSec'>
            <img src={img9} alt="" />
            <h5>South Indian</h5>
          </div>  {/* Section 1 completes Here */}
        </div><br />

        {/* Section 2 */}
        <h2>Dishes</h2>
        <div></div>
        {/* Section 2 completes Here */}

        {/* Section 3 */}
        <h2>Top Brands for you</h2>
        <div className='TopBrands'>
          <div className='orderSec'>
            <img src={img10} alt="" />
            <h5>Haldiram's Restaurant</h5>
          </div>
          <div className='orderSec'>
            <img src={img11} alt="" />
            <h5>Ni Hao Restaurant</h5>
          </div>
          <div className='orderSec'>
            <img src={img12} alt="" />
            <h5>Krishnum Restaurant</h5>
          </div>
          <div className='orderSec'>
            <img src={img13} alt="" />
            <h5>Cafe Pride Nagpur</h5>
          </div>
          <div className='orderSec'>
            <img src={img14} alt="" />
            <h5>KFC</h5>
          </div>
          <div className='orderSec'>
            <img src={img15} alt="" />
            <h5>McDonald's</h5>
          </div>
          <div className='orderSec'>
            <img src={img16} alt="" />
            <h5>Faasos-Wraps Rolls</h5>
          </div>
          <div className='orderSec'>
            <img src={img17} alt="" />
            <h5>Dosa Destination</h5>
          </div>
          <div className='orderSec'>
            <img src={img18} alt="" />
            <h5>Naivedhyam Restaurant</h5>
          </div>
        </div>
        {/* Section 3 completes Here */}

        
      </div><br />
      <Fot />
    </div>
  )
}

export default Home
