import React from "react";
import "./PropertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=1320&height=746&fit=crop&format=pjpg&auto=webp",
    "https://is1-2.housingcdn.com/01c16c28/2d41e0c81c2db56d8755145b37c56c68/v0/fs/3_bhk_apartment-for-sale-bapuji_nagar_bhubaneshwar-Bhubaneswar+-others.jpg",
    "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/02/Ramada-Resort-in-Cochin.jpg",
    "https://foyr.com/learn/wp-content/uploads/2019/03/Villa_Mistral-Singapore.jpg",
    "https://amazingarchitecture.com/storage/files/1/Architecture%20firms/Soheil%20Kiani/Gisoom%20Cabin/04-Gisoom-Cabin-Soheil-Kiani-Talesh-Iran.JPG",
  ];
  return (
    <div className="plist">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            images.map((img, index) => (
              <div className="plistItem" key={index}>
                <img className="plistImage" src={img} alt="plist" />
                <div className="plistTitles">
                  <h1>{data[index]?.type}</h1>
                  <h2> 
                    {data[index]?.count} {data[index]?.type}
                    </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
