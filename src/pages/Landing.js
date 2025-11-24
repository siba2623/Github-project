import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing(){
  const nav = useNavigate();
  return (
    <div className="hero">
      <div className="container">
        <h1>GreenHouse</h1>
        <p style={{maxWidth:600}}>GreenHouse supplies healthy, beautiful houseplants that brighten homes and purify indoor air. Our collection focuses on easy-care varieties perfect for beginners and seasoned plant parents alike.</p>
        <button className="btn" onClick={()=>nav('/products')}>Get Started</button>
      </div>
    </div>
  )
}
