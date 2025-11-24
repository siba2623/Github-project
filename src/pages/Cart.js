import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, selectTotalCount, selectTotalCost, increase, decrease, removeItem } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart(){
  const items = useSelector(selectCartItems);
  const totalCount = useSelector(selectTotalCount);
  const totalCost = useSelector(selectTotalCost);
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className="container cart-list">
      <h3>Your Cart</h3>
      <div className="muted">Total items: {totalCount}</div>
      <div className="muted">Total cost: ${totalCost}</div>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map(({product, quantity})=> (
        <div key={product.id} className="cart-item">
          <img src={product.thumb} alt={product.name} style={{width:80,height:80,objectFit:'cover',borderRadius:6}} />
          <div style={{flex:1}}>
            <div><strong>{product.name}</strong></div>
            <div className="muted">Unit price: ${product.price}</div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <button className="btn" onClick={()=>dispatch(decrease(product.id))}>-</button>
            <div>{quantity}</div>
            <button className="btn" onClick={()=>dispatch(increase(product.id))}>+</button>
          </div>
          <div>
            <button className="btn" onClick={()=>dispatch(removeItem(product.id))}>Delete</button>
          </div>
        </div>
      ))}

      <div style={{marginTop:20}}>
        <button className="btn" onClick={()=>alert('Coming Soon')}>Checkout</button>
        <button className="btn" style={{marginLeft:10}} onClick={()=>nav('/products')}>Continue Shopping</button>
      </div>
    </div>
  )
}
