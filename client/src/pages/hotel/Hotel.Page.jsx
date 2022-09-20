import React, { useState } from "react";
import "./Hotel.Page.css";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      src: "https://empire-s3-production.bobvila.com/pages/538/original/Bedroom.jpg?1310503752",
    },
    {
      src: "https://www.bhg.com/thmb/0PqyQXUfkXlTBFc9KwIWJvaXh7Y=/1244x1658/filters:fill(auto,1)/master-bedroom-tufted-headboard-bed-720859ec-4916e08c7a5840cbbb94d2d993929207.jpg",
    },
    {
      src: "https://www.thespruce.com/thmb/PaMPY4RheEOMFXiXMquRY8EoWJE=/1821x1366/smart/filters:no_upscale()/interesting-white-bedroom-ideas-5200733-hero-c311e259f2e44a2280efb5dac2cd0b8d.jpg",
    },
    {
      src: "https://i0.wp.com/www.ariyonainterior.com/wp-content/uploads/2019/07/How-To-Style-Your-Bedroom-Rugs-27.jpg?resize=750%2C1122&ssl=1",
    },
    {
      src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove =(direction)=> {
    let newSlideNum;
    if(direction === "l"){
      newSlideNum = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNum = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNum);
  }

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">

        { open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")}/>
            <div className="sliderWrapper">
              <img src= {photos[slideNumber].src} alt="" className="sliderImg"/>
            </div>
             <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>
        </div>}
       

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hDistance">
            Excellent location - 500m from center
          </span>
          <span className="hPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hImages">
            {photos.map((photos, i) => (
              <div className="hImageWrapper">
                <img
                  src={photos.src}
                  alt="Hotel Imag"
                  className="hImg"
                  onClick={()=> handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hDeatils">
            <div className="hDetailsTexts">
              <h1 className="hTitle">Stay in the heart of Kraow</h1>
              <p className="hDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, placeat nesciunt corporis ullam delectus quod ducimus
                rerum fugit temporibus sapiente aspernatur fugiat ab neque eum
                veniam consectetur, ad ea dignissimos. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Maxime, placeat nesciunt
                corporis ullam delectus quod ducimus rerum fugit temporibus
                sapiente aspernatur fugiat ab neque eum veniam consectetur, ad
                ea dignissimos.
              </p>
            </div>
            <div className="hDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                beatae consequuntur numquam facilis corrupti.
              </span>
              <h2>
                <b>$638</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
