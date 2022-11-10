import useFetch from "../../hooks/useFetch";
import "./FeaturedProerties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          { Array.isArray(data) ? data.map((item) => {
           return <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt="Featured"
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from $ {item.cheapestPrize}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
}): null
} 
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;