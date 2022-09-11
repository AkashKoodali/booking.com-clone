import "./Header.css"
import { faBed , faPlane, faCar, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon= {faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon= {faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon= {faCar} />
            <span>Car rentals</span>
          </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon= {faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon= {faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="hederDesc">Get rewarded for your travels unlock instant saving of 10% or more with a free Lamabooking account</p>
        <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  )
}

export default Header