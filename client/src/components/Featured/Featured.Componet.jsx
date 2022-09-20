import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://cdn.britannica.com/49/179449-138-9F4EC401/Overview-Berlin.jpg?w=800&h=450&c=crop"
              alt="featured item"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg_1014274486.jpg"
              alt="featured item"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
              alt="featured item"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
