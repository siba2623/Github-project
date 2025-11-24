import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalCount } from '../store/cartSlice';

export default function Header(){
  const total = useSelector(selectTotalCount);
  const nav = useNavigate();

  return (
    <div className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center'}}>
          <h2 style={{margin:0,marginRight:12}}>GreenHouse</h2>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </nav>
        </div>
        <div>
          <button className="cart-btn btn" onClick={()=>nav('/cart')}>
            Cart
            <span className="cart-count">{total}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
