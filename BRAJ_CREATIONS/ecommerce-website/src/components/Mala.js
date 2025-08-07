import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ProductSection.css';
import './HomePage.css';

const Mala = () => {
  const [sortBy, setSortBy] = useState('popularity'); // Default sorting

  const malaproduct = [ { id: 1,title:'Beads mala & Kangan', price: '50', imageUrl:require('./images/mala1.jpg') }, { id: 2,  title: 'Set of mala & Kangan', price: '₹60', imageUrl: require('./images/mala2.jpg') },{ id: 3,  title:'Colourful Heavy Kundan' , price: '₹120', imageUrl:require('./images/mala3.jpg') },{ id: 4,title:'Jarkan Chokar Mala', price: '₹70', imageUrl:require('./images/mala4.jpg') },{ id: 5,title:'Chokar Mala', price: '₹80', imageUrl:require('./images/mala5.jpg') },{ id: 6,title:'Jarkan Mala Big', price: '₹90', imageUrl:require('./images/mala6.jpg') },{ id: 7,title:'Beaded Mala1', price: '₹40', imageUrl:require('./images/mala7.jpg') },{ id: 8,title:'Beaded Mala2', price: '₹45', imageUrl:require('./images/mala8.jpg') }
  , { id: 9,title:'Small Jarkan', price: '₹50', imageUrl:require('./images/mala9.jpg') },{ id: 10,title:'Leaf Mala', price: '₹35', imageUrl:require('./images/mala10.jpg') } , { id: 11,title:'Small Jarkan Mala', price: '₹30', imageUrl:require('./images/mala11.jpg') },{ id: 12,title:'Beaded Mala & Earings', price: '₹60', imageUrl:require('./images/mala12.jpg') },{ id: 13,title:'Radha Name Pendant', price: '₹40', imageUrl:require('./images/mala13.jpg') },{ id: 14,title:'Tulsi Mala', price: '₹20', imageUrl:require('./images/mala14.jpg') },{ id: 15,title:'Vaijanti Mala', price: '₹40', imageUrl:require('./images/mala15.jpg') },{ id: 16,title:'Heavy Mala ', price: '₹130', imageUrl:require('./images/mala16.jpg') },
  ,{ id: 17,title:'Beads Mala', price: '₹40', imageUrl:require('./images/mala17.jpg') },{ id: 18,title:'Kundan Mala', price: '₹80', imageUrl:require('./images/mala18.jpg') },{ id: 19,title:'Stone Mala', price: '₹30', imageUrl:require('./images/mala19.jpg') } , { id: 20,title:'Heavy Jarkan Mala', price: '₹110', imageUrl:require('./images/mala20.jpg') } ,{ id: 21,title:'New Design Mala', price: '₹75', imageUrl:require('./images/mala21.jpg') },{ id: 22,title:'Moti Mala', price: '₹45', imageUrl:require('./images/mala22.jpg') },{ id: 23,title:'Golden Beads ', price: '₹65', imageUrl:require('./images/mala23.jpg')} ,{ id: 24,title:'Flower Jarkan Mala', price: '₹75', imageUrl:require('./images/mala24.jpg') }
  ,{ id: 25,title:'Floral Diamond Mala', price: '₹80', imageUrl:require('./images/mala25.jpg') },{ id: 26,title:'Small Mala', price: '₹30', imageUrl:require('./images/mala26.jpg') },{ id: 27,title:'Simple Mala', price: '₹20', imageUrl:require('./images/mala27.jpg') },{ id: 28,title:'Colourful Mala', price: '₹80', imageUrl:require('./images/mala28.jpg') },{ id: 29,title:'Floral Mala', price: '₹90', imageUrl:require('./images/mala29.jpg') },{ id: 30,title:'Mini Flower Mala', price: '₹80', imageUrl:require('./images/mala30.jpg') },{ id: 31,title:'Rose Mala', price: '₹90', imageUrl:require('./images/mala31.jpg') }];

  // Sorting logic
  const sortProducts = (sortingCriteria) => {
    setSortBy(sortingCriteria);
  };
  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Display 4 products in a row
    gap: '20px', // Add gap between products
  };

  const sortedmalaProducts = [...malaproduct].sort((a, b) => {
    if (sortBy === 'popularity') {
      return b.ratings - a.ratings;
    } else if (sortBy === 'priceLowToHigh') {
      return a.price.replace('₹', '') - b.price.replace('₹', '');
    } else if (sortBy === 'priceHighToLow') {
      return b.price.replace('₹', '') - a.price.replace('₹', '');
    }
  });

  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#FFF4F3', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 20px', borderBottom: '1px solid #ccc', position: 'sticky', top: 0, zIndex: 1 }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <h1 style={{ fontSize: '34px', fontFamily: 'Dancing Script, cursive', margin: 5 }}>
            <Link to="/">Hare Krishna</Link>
          </h1>
        </div>
        <div className="hare-krishna">
        <span style={{ fontWeight:'bold',fontSize: '48px', margin: '0px 280px 10px ',color:'black' }}>Abhishek Agarwal</span>
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
      {/* Sort By options */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        Sort By:{" "}
        <span
          className={sortBy === 'popularity' ? 'active-sort' : 'sort'}
          onClick={() => sortProducts('popularity')}
        >
          Popularity
        </span>{" "}
        |{" "}
        <span
          className={sortBy === 'priceLowToHigh' ? 'active-sort' : 'sort'}
          onClick={() => sortProducts('priceLowToHigh')}
        >
          Price - Low to High
        </span>{" "}
        |{" "}
        <span
          className={sortBy === 'priceHighToLow' ? 'active-sort' : 'sort'}
          onClick={() => sortProducts('priceHighToLow')}
        >
          Price - High to Low
        </span>
      </div>
      {/* Product Grid */}
      <div className="product-grid" style={productGridStyle}>
        {sortedmalaProducts.slice(0,31).map((malaproduct) => (
          <div key={malaproduct.id} className="product-card">
            <img src={malaproduct.imageUrl} alt={malaproduct.title} />
            <h2>{malaproduct.title}</h2>
            <p className="product-price">{malaproduct.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mala;
