import React, { useState } from 'react';
import products from '../data/products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../store/cartSlice';

export default function Products(){
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addedIds = new Set(cartItems.map(i=>i.product.id));

  const categories = Array.from(new Set(products.map(p=>p.category)));
  const [activeCat, setActiveCat] = useState('All');

  const shown = activeCat === 'All' ? products : products.filter(p=>p.category===activeCat);

  return (
    <div className="container">
      <h3>Plants</h3>
      <div className="categories">
        <div className={`category`} onClick={()=>setActiveCat('All')}>All</div>
        {categories.map(c=> <div key={c} className="category" onClick={()=>setActiveCat(c)}>{c}</div>)}
      </div>

      <div className="products-grid">
        {shown.map(p=> (
          <div className="card" key={p.id}>
            <img src={p.thumb} alt={p.name} className="thumb" />
            <h4>{p.name}</h4>
            <div className="muted">${p.price}</div>
            <button className="btn" disabled={addedIds.has(p.id)} onClick={()=>dispatch(addToCart(p))}>
              {addedIds.has(p.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
