import React from 'react';
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className='featuredImg' src="https://www.holidify.com/images/bgImages/MUNNAR.jpg" alt="featured item" />
            <div className="featuredTitles">
                <h1>Kerala</h1>
                <h2>123 property</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://www.holidify.com/images/bgImages/MUNNAR.jpg" alt="featured item" />
            <div className="featuredTitles">
                <h1>Kerala</h1>
                <h2>123 property</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img  className='featuredImg' src="https://www.holidify.com/images/bgImages/MUNNAR.jpg" alt="featured item" />
            <div className="featuredTitles">
                <h1>Kerala</h1>
                <h2>123 property</h2>
            </div>
        </div>
    </div>
    
  )
}

export default Featured