import React from "react";
import './SearchItem.css'

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="Search Item"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with air conditioning</span>
        <span className="siFeatures">Entire studio | 1 Bathroom | 21m sqare 1 full bed</span>
        <span className="siCancelationOp">Free cancelation</span>
        <span className="siCancelationOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
            <span className="siPrice">$132</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See Availability</button>

        </div>
      </div>
    </div>
  );
}

export default SearchItem;
