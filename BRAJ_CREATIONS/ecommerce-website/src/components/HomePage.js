import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import jm5 from './images/jm5.jpg';import jm6 from './images/jm6.jpg';import jm7 from './images/jm7.jpg';import jm8 from './images/jm8.jpg';import sm1 from './images/sm1.jpg';
import jm1 from './images/jm1.jpg';import jm2 from './images/jm2.jpg';import jm3 from './images/jm3.jpg';import jm4 from './images/jm4.jpg';import sm2 from './images/sm2.jpg';
import jm9 from './images/jm9.jpg';import jm10 from './images/jm10.jpg';import jm11 from './images/jm11.jpg';import jm12 from './images/jm12.jpg';import sm3 from './images/sm3.jpg';
import './HomePage.css';import Footer from './footer';
import ImageSection from './ImageSection';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#FFF4F3', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 20px', borderBottom: '1px solid #ccc', position: 'sticky', top: 0, zIndex: 1 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <h1 style={{ fontSize: '34px', fontFamily: 'Dancing Script, cursive', margin: 5 }}>
            <Link to="/">Hare Krishna (Home)</Link> 
          </h1>
        </div>
        <div className="hare-krishna">
        <span style={{ fontWeight:'bold',fontSize: '48px', margin: '0px 280px 10px ',color:'black' }}>Abhishek Agarwal </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" placeholder="Search" style={{ marginRight: '10px', fontSize: '18px', padding: '8px' }} />
          <Link to="/profile" className="profile-link" style={{ color: 'purple', fontSize: '24px', marginRight: '10px' }}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <span style={{ color: 'black', fontSize: '18px' }}>|</span>
          <Link to="/cart" className="cart-link" style={{ color: 'purple', fontSize: '24px', marginLeft: '10px' }}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </nav>
      {/*subnavbar*/}
      <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#FFFFF4', padding: '10px', fontSize: '20px', fontWeight: '600', fontFamily: 'Montserrat, sans-serif', borderBottom: '1px solid #ccc', position: 'sticky', top: '80px', zIndex: 1 }}>
        <Link to="/fancy dresses" className="sub-navbar-link">bhajman_radhe_govind</Link>
        <Link to="/chandan dress" className="sub-navbar-link">PRACHAND</Link>
        <Link to="/caps" className="sub-navbar-link">Qalki</Link>
        <Link to="/deities" className="sub-navbar-link">Deities</Link>
        {/* <Link to="/toys" className="sub-navbar-link">Toys & Dolls</Link> */}
        {/* <Link to="/mala" className="sub-navbar-link">Mala</Link> */}
        {/* <Link to="/jhula" className="sub-navbar-link">Beds & Jhulas</Link> */}
        <Link to="/decor" className="sub-navbar-link">Decor</Link>
      </div>
       {/* Image Slider */}
       <ImageSection />

      {/* Random Images */}
      <h2 style={{ textAlign: 'center', padding: '30px' }}>
        <span style={{ borderBottom: '2px solid red' }}>Some Shopping</span>
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        {/* Image 1 */}
        <div style={{width:'300px', borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm1} alt="Random 1" style={{ maxWidth: '100%', height: 'auto' }}/>
          <h4 style={{ marginLeft:'70px',marginTop: '10px' }}>Pink &Yellow Floral</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹30</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 2 */}
        <div style={{ width:'300px',borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm2} alt="Random 2" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'100px',marginTop: '10px' }}>Blue Floral</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹35</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 3 */}
        <div style={{ width:'300px',borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm3} alt="Random 3" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'70px',marginTop: '10px' }}>Carrot Color Roses</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹45</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' ,padding:'20px 0 0 0'}}>
        {/* Image 1 */}
        <div style={{width:'300px', borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm4} alt="Random 1" style={{ maxWidth: '100%', height: 'auto' }}/>
          <h4 style={{ marginLeft:'100px',marginTop: '10px' }}>Pink Floral</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹45</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 2 */}
        <div style={{width:'300px', borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm5} alt="Random 2" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'100px',marginTop: '10px' }}>Pink Rose </h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹45</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 3 */}
        <div style={{ width:'300px',borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm6} alt="Random 3" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'70px',marginTop: '10px' }}>Pink Rose Petal</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹45</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px',padding:'20px 0 0 0' }}>
        {/* Image 1 */}
        <div style={{width:'300px', borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm7} alt="Random 1" style={{ maxWidth: '100%', height: 'auto' }}/>
          <h4 style={{ marginLeft:'100px',marginTop: '10px' }}>Green Heavy</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹45</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 2 */}
        <div style={{width:'300px', borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm8} alt="Random 2" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'70px',marginTop: '10px' }}>Yellow Rose MorPankh</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹50</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 3 */}
        <div style={{ width:'300px',borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm9} alt="Random 3" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'90px',marginTop: '10px' }}>Colorful Floral</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹50</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px',padding:'20px 0 0 30px' }}>
        {/* Image 1 */}
        <div style={{width:'300px', borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm10} alt="Random 1" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'70px',marginTop: '10px' }}>Orange&Green Leaf</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹55</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 2 */}
        <div style={{ width:'300px',borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm11} alt="Random 2" style={{ maxWidth: '100%', height: 'auto' }}/>
          <h4 style={{ marginLeft:'90px',marginTop: '10px' }}>Purple Gotapatti</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹55</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 3 */}
        <div style={{width:'300px', borderRadius: '30px', overflow: 'hidden' }}>
          <img src={jm12} alt="Random 3" style={{ maxWidth: '100%', height: 'auto' }}/>
          <h4 style={{ marginLeft:'100px',marginTop: '10px' }}>White Pearl</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹60</p>
          <button style={{marginLeft: '94px', padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
      </div>
      <h2 style={{ textAlign: 'center', padding: '140px 0 50px 0 ' }}>
        <span style={{ borderBottom: '2px solid red' }}>Summer Special</span>
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' ,padding:'0 0 130px 0'}}>
        {/* Image 1 */}
        <div style={{width:'300px', borderRadius: '30px', overflow: 'hidden' }}>
          <img src={sm1} alt="Random 1" style={{ maxWidth: '100%', height: 'auto' }}/>
          <h4 style={{ marginLeft:'90px',marginTop: '10px' }}>Purple Floral</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹60</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 2 */}
        <div style={{ width:'300px',borderRadius: '30px', overflow: 'hidden' }}>
          <img src={sm2} alt="Random 2" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'100px',marginTop: '10px' }}>Dangri</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹50</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Image 3 */}
        <div style={{ width:'300px',borderRadius: '30px', overflow: 'hidden' }}>
          <img src={sm3} alt="Random 3" style={{ maxWidth: '100%', height: 'auto' }} />
          <h4 style={{ marginLeft:'90px',marginTop: '10px' }}>Pearl Cap</h4>
          <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>Price: ₹100</p>
          <button style={{ marginLeft: '94px',padding: '10px 20px', backgroundColor: 'purple', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        
      </div>
    {/* Footer */}
    <Footer />
    </div>
  );
};

export default HomePage;
