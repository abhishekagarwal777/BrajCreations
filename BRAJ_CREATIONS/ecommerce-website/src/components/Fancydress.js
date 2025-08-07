import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ProductSection.css';
import './HomePage.css';

const Fancydress = () => {
  const [sortBy, setSortBy] = useState('popularity'); // Default sorting

  const fancyproduct = [ { id: 1,title:'Heavy Green & Pink', price: '₹180', imageUrl:require('./images/f1.jpg') }, { id: 2,  title: 'Floral Dress', price: '₹120', imageUrl: require('./images/f2.jpg') },{ id: 3,  title:'Heavy Stones Dress' , price: '₹180', imageUrl:require('./images/f3.jpg') }
  , { id: 4,title:'Rose Petal', price: '₹160', imageUrl:require('./images/f4.jpg') },{ id: 5,title:'Colourful Floral', price: '₹200', imageUrl:require('./images/f5.jpg') } , { id: 6,title:'Flowers Dress', price: '₹180', imageUrl:require('./images/f6.jpg') },{ id: 7,title:'Floral Heavy Green', price: '₹40', imageUrl:require('./images/f7.jpg') }
  ,{ id: 8,title:'Pink Kotadoria', price: '₹70', imageUrl:require('./images/f8.jpg') },{ id: 9,title:'Blue Kotadoria', price: '₹75', imageUrl:require('./images/f9.jpg') },{ id: 10, title:'Yellow Kotadoria',price: '₹100', imageUrl:require('./images/f10.jpg') },{ id: 12,title:'Yellow Chandan', price: '₹160', imageUrl:require('./images/f12.jpg') }
  ,{ id: 11,title:'Green Kotadoria', price: '₹100', imageUrl:require('./images/f11.jpg') },{ id: 13,title:'White Chandan', price: '₹160', imageUrl:require('./images/f13.jpg') },{ id: 14,title:'Green Chandan', price: '₹160', imageUrl:require('./images/f14.jpg') }];

  // Sorting logic
  const sortProducts = (sortingCriteria) => {
    setSortBy(sortingCriteria);
  };
  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Display 4 products in a row
    gap: '20px', // Add gap between products
  };

  const sortedProducts = [...fancyproduct].sort((a, b) => {
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
      <nav style={{ backgroundColor: '#F0F8FF', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', padding: '0 20px', borderBottom: '1px solid #ccc', position: 'sticky', top: 0, zIndex: 1 }}>
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
        {sortedProducts.slice(0,20).map((fancyproduct) => (
          <div key={fancyproduct.id} className="product-card">
            <img src={fancyproduct.imageUrl} alt={fancyproduct.title} />
            <h2>{fancyproduct.title}</h2>
            <p className="product-price">{fancyproduct.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fancydress;
