import "./FeaturedProerties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {

  const { data, loading, error } = useFetch("/hotels/countByType");

  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1570698473651-b2de99bae12f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFkcmlkJTJDJTIwc3BhaW58ZW58MHx8MHx8&w=1000&q=80"
          alt="img"
          className="fpImg"
        />
        <span className="fpName">ApartHotel stare Miastro</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1570698473651-b2de99bae12f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFkcmlkJTJDJTIwc3BhaW58ZW58MHx8MHx8&w=1000&q=80"
          alt="img"
          className="fpImg"
        />
        <span className="fpName">ApartHotel stare Miastro</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1570698473651-b2de99bae12f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFkcmlkJTJDJTIwc3BhaW58ZW58MHx8MHx8&w=1000&q=80"
          alt="img"
          className="fpImg"
        />
        <span className="fpName">ApartHotel stare Miastro</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://images.unsplash.com/photo-1570698473651-b2de99bae12f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFkcmlkJTJDJTIwc3BhaW58ZW58MHx8MHx8&w=1000&q=80"
          alt="img"
          className="fpImg"
        />
        <span className="fpName">ApartHotel stare Miastro</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
