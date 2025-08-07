import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ProductSection.css';
import './HomePage.css';

const Deities = () => {
  const [sortBy, setSortBy] = useState('popularity'); // Default sorting

  const deitiesproduct = [ { id: 1,title:'Radhakrishna', price: '₹5200', imageUrl:require('./images/dt1.jpg') }, { id: 2,  title: 'Shaligram', price: '₹320', imageUrl: require('./images/dt2.jpg') },{ id: 3,  title:'Gaur Nitai' , price: '₹800', imageUrl:require('./images/dt3.jpg') }
  , { id: 4,title:'Gaur Nitai(Makeup)', price: '₹1250', imageUrl:require('./images/dt4.jpg') },{ id: 5,title:'Khatu Shyam Ji', price: '₹350', imageUrl:require('./images/dt5.jpg') } , { id: 6,title:'Black Ladoo Gopal', price: '₹950', imageUrl:require('./images/dt6.jpg') },{ id: 7,title:'Radhakrishn', price: '₹1450', imageUrl:require('./images/dt7.jpg') }
  ,{ id: 8,title:'Lala', price: '₹1000', imageUrl:require('./images/dt8.jpg') },{ id: 9,title:'Lali', price: '₹1150', imageUrl:require('./images/dt9.jpg') }];

  // Sorting logic
  const sortProducts = (sortingCriteria) => {
    setSortBy(sortingCriteria);
  };
  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Display 4 products in a row
    gap: '20px', // Add gap between products
  };

  const sortedProducts = [...deitiesproduct].sort((a, b) => {
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
            <Link to="/">Hare Krishna (Home)</Link>
          </h1>
        </div>
        <div className="hare-krishna">
        <span style={{ fontWeight:'bold',fontSize: '48px', margin: '0px 280px 10px ',color:'black' }}>Abhishek Agarwal</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" placeholder="Search" style={{ marginRight: '10px', fontSize: '18px', padding: '8px' }} />
          <Link to="/profile" style={{ color: 'purple', fontSize: '24px', marginRight: '10px' }}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <span style={{ color: 'black', fontSize: '18px' }}>|</span>
          <Link to="/cart" style={{ color: 'purple', fontSize: '24px', marginLeft: '10px' }}>
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
        {sortedProducts.slice(0,15).map((deitiesproduct) => (
          <div key={deitiesproduct.id} className="product-card">
            <img src={deitiesproduct.imageUrl} alt={deitiesproduct.title} />
            <h2>{deitiesproduct.title}</h2>
            <p className="product-price">{deitiesproduct.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deities;




