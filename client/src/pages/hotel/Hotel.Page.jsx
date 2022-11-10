import React, { useContext, useState } from "react";
import "./Hotel.Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

//components
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";

import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/Reserve/Reserve";


const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {dates, options} = useContext(SearchContext);
  console.log(dates);
  
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNum;
    if (direction === "l") {
      newSlideNum = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNum = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNum);
  };

  const handleClick = () => {
    if(user) {
      setOpenModal(true);
    }else{
      navigate('/login');
    }
  }

  return (
    <div>
      <NavBar />
      <Header type="list" />

      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}

          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hDistance">
              Excellent location - {data.distance}m from center
            </span>
            <span className="hPriceHighlight">
              Book a stay over ${data.cheapestPrize} at this property and get a free airport taxi
            </span>
            <div className="hImages">
              {data.photos?.map((photos, i) => (
                <div className="hImageWrapper">
                  <img
                    src={photos}
                    alt="Hotel Imag"
                    className="hImg"
                    onClick={() => handleOpen(i)}
                  />
                </div>
              ))}
            </div>
            <div className="hDeatils">
              <div className="hDetailsTexts">
                <h1 className="hTitle">{data.title}</h1>
                <p className="hDesc">
                  {data.description}
                </p>
              </div>
              <div className="hDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  beatae consequuntur numquam facilis corrupti.
                </span>
                <h2>
                  <b>${days * data.cheapestPrize * options.room }</b> ({days} nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && (
        <Reserve setOpen={setOpenModal} hotelId={id}/>
      )}
    </div>
  );
};

export default Hotel;
